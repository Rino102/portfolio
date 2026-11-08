import { NextRequest, NextResponse } from "next/server"
import { contactSchema } from "@/lib/validations"
import { Resend } from "resend"

export async function POST(req: NextRequest) {
  let body: unknown

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten() },
      { status: 400 }
    )
  }

  const { name, email, subject, message } = parsed.data

  const resend = new Resend(process.env.RESEND_API_KEY)

  const contactEmail = process.env.CONTACT_EMAIL ?? "rlrino102@gmail.com"

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: email,
      subject: `Rino - PM - Enquiry - ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #2438c8; margin-bottom: 24px;">New Message from Portfolio</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #dad8cf;">
              <td style="padding: 12px 0; color: #4a5565; width: 100px; font-size: 14px;">Name</td>
              <td style="padding: 12px 0; color: #0e1624; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #dad8cf;">
              <td style="padding: 12px 0; color: #4a5565; font-size: 14px;">Email</td>
              <td style="padding: 12px 0; color: #0e1624; font-size: 14px;">${email}</td>
            </tr>
            <tr style="border-bottom: 1px solid #dad8cf;">
              <td style="padding: 12px 0; color: #4a5565; font-size: 14px;">Subject</td>
              <td style="padding: 12px 0; color: #0e1624; font-size: 14px;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 24px;">
            <p style="color: #4a5565; font-size: 14px; margin-bottom: 8px;">Message:</p>
            <div style="background: #f5f4ef; border-left: 3px solid #2438c8; padding: 16px; border-radius: 4px; color: #0e1624; font-size: 14px; line-height: 1.6;">
              ${message.replace(/\n/g, "<br/>")}
            </div>
          </div>
          <p style="margin-top: 24px; color: #8e99ab; font-size: 12px;">Sent from rinorobinson.com portfolio contact form</p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Contact route error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
