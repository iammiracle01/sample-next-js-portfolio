export const emailTemplate = `
<div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
  <h2 style="color: #333; font-weight: 600; font-size: 24px; margin-bottom: 16px;">Contact Form Submission</h2>
  <p style="color: #555; margin-bottom: 8px;"><strong>Name:</strong> {{name}}</p>
  <p style="color: #555; margin-bottom: 8px;"><strong>Email:</strong> {{email}}</p>
  <p style="color: #555; margin-bottom: 8px;"><strong>Subject:</strong> {{subject}}</p>
  <p style="color: #555; margin-bottom: 16px;"><strong>Message:</strong></p>
  <p style="color: #555; white-space: pre-line;">{{message}}</p>
  <hr style="margin-top: 20px; border: none; border-top: 1px solid #ddd;" />
  <p style="color: #777; font-size: 12px;">This email was sent from your website's contact form.</p>
</div>
`;
