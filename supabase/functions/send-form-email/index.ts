
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
  const logoUrl = "https://oqtgbspxeoukwahhacld.supabase.co/storage/v1/object/public/website/logo.png";
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
        .container { padding: 20px; border: 1px solid #ddd; border-radius: 5px; position: relative; }
        .logo { position: absolute; top: 20px; right: 20px; max-width: 120px; }
        h1 { color: #f97316; margin-top: 10px; }
        p { margin-bottom: 15px; }
        .contact-info { margin-top: 20px; background-color: #f8f8f8; padding: 10px; border-radius: 5px; }
        .contact-info p { margin: 5px 0; }
        .footer { margin-top: 30px; font-size: 12px; color: #777; text-align: center; border-top: 1px solid #eee; padding-top: 15px; }
        .highlight { font-weight: bold; color: #f97316; }
      </style>
    </head>
    <body>
      <div class="container">
        <img src="data:image/png;base64,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" class="logo" alt="Growwth Partners Logo" />
        
        <h1>Thank You for Your Submission</h1>
        
        <p>Dear ${data.email},</p>
        
        <p>Thank you for filling out the form on our website! We appreciate your interest in Growwth Partners and will get back to you shortly.</p>
        
        <p>In the meantime, feel free to explore our website to learn more about how we can help grow your business.</p>
        
        <div class="contact-info">
          <p>If you have any urgent queries, you can reach us at:</p>
          <p><span class="highlight">Email:</span> <strong>jatin@growwthpartners.com</strong></p>
          <p><span class="highlight">Phone:</span> <strong>+65 8893 0720</strong></p>
        </div>
        
        <p>Looking forward to connecting with you soon!</p>
        
        <p><strong>Best regards,</strong><br>
        Growwth Partners Team</p>
        
        <div class="footer">
          This is an automated confirmation of your submission.
        </div>
      </div>
    </body>
    </html>
  `;
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
        from: { email: SENDER_EMAIL, name: "Growwth Partners" },
        reply_to: { email: "jatin@growwthpartners.com" },
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
