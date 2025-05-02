
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

// Get environment variables
const SENDGRID_API_KEY = Deno.env.get("SENDGRID_API_KEY");
const ADMIN_EMAIL = Deno.env.get("ADMIN_EMAIL");
const SENDER_EMAIL = Deno.env.get("SENDER_EMAIL");

// CORS headers for browser requests
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Form submission request structure
interface FormSubmissionRequest {
  name: string;
  email: string;
  formType: "contact" | "expert" | "consultation";
  company?: string;
  phone?: string;
  service?: string;
  message?: string;
  countryCode?: string;
}

// HTML email templates
const getAdminEmailTemplate = (data: FormSubmissionRequest): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
        .container { padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
        h1 { color: #f97316; }
        .field { margin-bottom: 10px; }
        .label { font-weight: bold; }
        .footer { margin-top: 30px; font-size: 12px; color: #777; text-align: center; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>New Form Submission</h1>
        <p>You have received a new ${data.formType} form submission:</p>
        
        <div class="field">
          <span class="label">Name:</span> ${data.name}
        </div>
        <div class="field">
          <span class="label">Email:</span> ${data.email}
        </div>
        ${data.company ? `
        <div class="field">
          <span class="label">Company:</span> ${data.company}
        </div>` : ''}
        ${data.phone ? `
        <div class="field">
          <span class="label">Phone:</span> ${data.countryCode || ''} ${data.phone}
        </div>` : ''}
        ${data.service ? `
        <div class="field">
          <span class="label">Service:</span> ${data.service}
        </div>` : ''}
        ${data.message ? `
        <div class="field">
          <span class="label">Message:</span> 
          <p>${data.message}</p>
        </div>` : ''}
        
        <div class="footer">
          This is an automated notification from your website.
        </div>
      </div>
    </body>
    </html>
  `;
};

const getUserEmailTemplate = (data: FormSubmissionRequest): string => {
  const formTypeMap = {
    contact: "contact request",
    expert: "expert consultation request",
    consultation: "consultation request"
  };

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
        .container { padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
        h1 { color: #f97316; }
        p { margin-bottom: 15px; }
        .footer { margin-top: 30px; font-size: 12px; color: #777; text-align: center; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Thank You for Your Submission</h1>
        
        <p>Dear ${data.name},</p>
        
        <p>Thank you for your ${formTypeMap[data.formType]}. We have received your information and will contact you shortly.</p>
        
        <p>Here's a summary of what you submitted:</p>
        <ul>
          ${data.company ? `<li>Company: ${data.company}</li>` : ''}
          ${data.service ? `<li>Service: ${data.service}</li>` : ''}
          ${data.message ? `<li>Message: "${data.message.substring(0, 100)}${data.message.length > 100 ? '...' : ''}"</li>` : ''}
        </ul>
        
        <p>If you have any questions or need to provide additional information, please don't hesitate to reply to this email.</p>
        
        <p>Best regards,<br>The Team</p>
        
        <div class="footer">
          This is an automated confirmation of your submission.
        </div>
      </div>
    </body>
    </html>
  `;
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders,
      status: 204,
    });
  }

  try {
    // Validate required environment variables
    if (!SENDGRID_API_KEY || !ADMIN_EMAIL || !SENDER_EMAIL) {
      console.error("Missing required environment variables:", {
        hasSendgridKey: !!SENDGRID_API_KEY,
        hasAdminEmail: !!ADMIN_EMAIL,
        hasSenderEmail: !!SENDER_EMAIL,
      });
      throw new Error("Missing required configuration for email sending");
    }

    const formData: FormSubmissionRequest = await req.json();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.formType) {
      throw new Error("Missing required form fields");
    }

    console.log(`Processing ${formData.formType} form submission for ${formData.name}`);

    // Prepare admin notification email
    const adminEmailResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: ADMIN_EMAIL }],
            subject: `New ${formData.formType} form submission from ${formData.name}`,
          },
        ],
        from: { email: SENDER_EMAIL, name: "Website Notifications" },
        reply_to: { email: formData.email, name: formData.name },
        subject: `New ${formData.formType} form submission from ${formData.name}`,
        content: [{ type: "text/html", value: getAdminEmailTemplate(formData) }],
      }),
    });

    if (!adminEmailResponse.ok) {
      const adminErrorText = await adminEmailResponse.text();
      console.error("SendGrid admin notification failed:", adminErrorText);
      throw new Error(`Failed to send admin notification: ${adminEmailResponse.status}`);
    }

    // Prepare user confirmation email
    const userEmailResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: formData.email }],
            subject: "Thank you for your submission",
          },
        ],
        from: { email: SENDER_EMAIL, name: "Customer Support" },
        reply_to: { email: ADMIN_EMAIL },
        subject: "Thank you for your submission",
        content: [{ type: "text/html", value: getUserEmailTemplate(formData) }],
      }),
    });

    if (!userEmailResponse.ok) {
      const userErrorText = await userEmailResponse.text();
      console.error("SendGrid user confirmation failed:", userErrorText);
      // We'll still return success since the admin was notified
      console.warn("Failed to send user confirmation email but admin was notified");
    }

    console.log("Successfully sent emails");
    
    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error) {
    console.error("Error in send-form-email function:", error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: error instanceof Error ? error.message : "Unknown error occurred" 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
