import { NextRequest, NextResponse } from 'next/server'
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'

const sesClient = new SESClient({
  region: process.env.AWS_REGION || 'ap-northeast-1',
  // Amplify上ではIAMロールから自動的に認証情報を取得
  // ローカル開発時は環境変数から取得
  ...(process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY
    ? {
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
      }
    : {}),
})

interface ContactFormData {
  inquiryType: string
  companyName: string
  department: string
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const inquiryTypeLabels: Record<string, string> = {
  product: '製品に関するお問い合わせ',
  quote: '見積もり依頼',
  business: '取引に関するお問い合わせ',
  recruitment: '採用に関するお問い合わせ',
  other: 'その他',
}

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json()

    const toEmail = process.env.CONTACT_EMAIL_TO
    const fromEmail = process.env.CONTACT_EMAIL_FROM || process.env.CONTACT_EMAIL_TO

    // デバッグログ
    console.log('Environment check:', {
      hasToEmail: !!toEmail,
      hasFromEmail: !!fromEmail,
      region: process.env.AWS_REGION,
      nodeEnv: process.env.NODE_ENV,
    })

    if (!toEmail) {
      console.error('CONTACT_EMAIL_TO is not set. Available env keys:', Object.keys(process.env).filter(k => k.startsWith('CONTACT') || k.startsWith('AWS')))
      return NextResponse.json(
        { error: '送信先メールアドレスが設定されていません' },
        { status: 500 }
      )
    }

    const inquiryTypeLabel = inquiryTypeLabels[formData.inquiryType] || formData.inquiryType

    const emailBody = `
FirstGear ウェブサイトからお問い合わせがありました。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ お問い合わせ種別
${inquiryTypeLabel}

■ お客様情報
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
会社名: ${formData.companyName || '(未入力)'}
部署名: ${formData.department || '(未入力)'}
お名前: ${formData.name}
メールアドレス: ${formData.email}
電話番号: ${formData.phone || '(未入力)'}

■ お問い合わせ内容
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
件名: ${formData.subject}

${formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
このメールはFirstGearウェブサイトのお問い合わせフォームから自動送信されました。
`

    const command = new SendEmailCommand({
      Source: fromEmail,
      Destination: {
        ToAddresses: [toEmail],
      },
      Message: {
        Subject: {
          Data: `【FirstGear】${inquiryTypeLabel}: ${formData.subject}`,
          Charset: 'UTF-8',
        },
        Body: {
          Text: {
            Data: emailBody,
            Charset: 'UTF-8',
          },
        },
      },
      ReplyToAddresses: [formData.email],
    })

    await sesClient.send(command)

    return NextResponse.json({ success: true, message: 'メールを送信しました' })
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'メールの送信に失敗しました。しばらく経ってから再度お試しください。' },
      { status: 500 }
    )
  }
}
