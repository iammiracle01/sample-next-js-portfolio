import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import handlebars from 'handlebars';
import { emailTemplate } from '@/utils/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {


  try {
    const { email, name, subject, message } = await request.json();

    const transport = nodemailer.createTransport({
      service: 'yahoo',
      host: "smtp.mail.yahoo.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const template = handlebars.compile(emailTemplate);
    const htmlContent = template({ name, email, subject, message });

     // Send email using resendx
    await resend.emails.send({
      from: `"My Portfolio" <onboarding@resend.dev>`,
      to: `${process.env.MY_EMAIL}`,
      subject: `${subject} - ${name} (${email})` || `Message from - ${name} (${email})`,
      html: htmlContent,
    });

    // Send email using nodemailer
    const mailOptions: nodemailer.SendMailOptions = {
      from:`"My Portfolio" <${process.env.MY_EMAIL}>`,
      to: `${process.env.GOOGLE_EMAIL}`,
      subject: `${subject} - ${name} (${email})` || `Message from - ${name} (${email})`,
      html: htmlContent,
    };

    await transport.sendMail(mailOptions);

    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
