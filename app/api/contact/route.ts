import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const {
      name,
      email,
      phone,
      zipcode,
      service,
      datetime,
      location,
      message,
    } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        { error: 'RESEND_API_KEY is not configured.' },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)
    const toEmail = process.env.CONTACT_TO_EMAIL || 'massagebymarie1783@yahoo.com'
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

    const { data, error } = await resend.emails.send({
      from: `Wellness Contact <${fromEmail}>`,
      to: [toEmail],
      subject: `New massage inquiry from ${name}`,
      html: `
        <h2>New massage inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Zip Code / Area:</strong> ${zipcode || 'Not provided'}</p>
        <p><strong>Preferred Package / Service:</strong> ${service || 'Not provided'}</p>
        <p><strong>Preferred Date & Time:</strong> ${datetime || 'Not provided'}</p>
        <p><strong>Preferred Branch / Location:</strong> ${location || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    if (error) {
      const resendError = error as {
        message?: string
        name?: string
        statusCode?: number
        cause?: unknown
      }

      console.error('Resend email error:', {
        name: resendError.name,
        message: resendError.message,
        statusCode: resendError.statusCode,
        cause: resendError.cause,
      })

      return NextResponse.json(
        {
          error:
            resendError.message ||
            'Resend rejected the email. Verify your sender/recipient in the Resend dashboard, then try again.',
          details: resendError,
        },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong while submitting the form.' },
      { status: 500 }
    )
  }
}
