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
  const formTypeColors = {
    contact: "#f97316",
    expert: "#2563eb",
    consultation: "#059669"
  };
  
  const formTypeColor = formTypeColors[data.formType] || "#f97316";
  const formTypeLabel = data.formType.charAt(0).toUpperCase() + data.formType.slice(1);
  
  const formattedDateTime = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(new Date());
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Form Submission</title>
      <style>
        body { 
          font-family: 'Segoe UI', Arial, sans-serif;
          line-height: 1.6; 
          color: #333;
          max-width: 600px;
          margin: 0 auto; 
          background-color: #f9f9f9;
        }
        .container { 
          padding: 30px; 
          border-radius: 8px; 
          background-color: #ffffff;
          box-shadow: 0 3px 10px rgba(0,0,0,0.05);
          margin: 20px auto;
        }
        .header {
          border-left: 4px solid ${formTypeColor};
          padding-left: 15px;
          margin-bottom: 25px;
        }
        h1 { 
          color: ${formTypeColor}; 
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }
        .timestamp {
          color: #666;
          font-size: 14px;
          margin-top: 5px;
        }
        .form-type {
          display: inline-block;
          background-color: ${formTypeColor};
          color: white;
          padding: 5px 10px;
          border-radius: 15px;
          font-size: 12px;
          margin-top: 5px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .section {
          margin-top: 25px;
          background-color: #f9f9f9;
          border-radius: 6px;
          padding: 15px;
        }
        .section-title {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 10px;
          color: #555;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 1px solid #eee;
          padding-bottom: 5px;
        }
        .field { 
          margin-bottom: 12px;
          padding: 8px 0;
        }
        .field:not(:last-child) {
          border-bottom: 1px solid #eee;
        }
        .label {
          font-weight: 600;
          display: inline-block;
          min-width: 120px;
          color: #555;
        }
        .value {
          display: inline-block;
        }
        .message-content {
          background-color: #fff;
          border-left: 3px solid ${formTypeColor};
          padding: 10px 15px;
          margin-top: 10px;
          border-radius: 0 4px 4px 0;
        }
        .footer { 
          margin-top: 30px;
          font-size: 12px;
          color: #777;
          text-align: center;
          padding-top: 15px;
          border-top: 1px solid #eee;
        }
        @media only screen and (max-width: 600px) {
          .container { padding: 20px; margin: 10px; }
          .label, .value { display: block; }
          .label { margin-bottom: 3px; }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Form Submission</h1>
          <div class="timestamp">${formattedDateTime}</div>
          <div class="form-type">${formTypeLabel} Form</div>
        </div>
        
        <div class="section">
          <div class="section-title">Contact Information</div>
          <div class="field">
            <span class="label">Name:</span>
            <span class="value"><strong>${data.name}</strong></span>
          </div>
          <div class="field">
            <span class="label">Email:</span>
            <span class="value"><a href="mailto:${data.email}" style="color: ${formTypeColor}; text-decoration: none;">${data.email}</a></span>
          </div>
          ${data.company ? `
          <div class="field">
            <span class="label">Company:</span>
            <span class="value">${data.company}</span>
          </div>` : ''}
          ${data.phone ? `
          <div class="field">
            <span class="label">Phone:</span>
            <span class="value">${data.countryCode || ''} ${data.phone}</span>
          </div>` : ''}
        </div>

        ${data.service ? `
        <div class="section">
          <div class="section-title">Service Details</div>
          <div class="field">
            <span class="label">Service:</span>
            <span class="value">${data.service}</span>
          </div>
        </div>` : ''}
        
        ${data.message ? `
        <div class="section">
          <div class="section-title">Message</div>
          <div class="message-content">
            ${data.message.replace(/\n/g, '<br>')}
          </div>
        </div>` : ''}
        
        <div class="footer">
          <p>This is an automated notification from your website.</p>
          <p><strong>Growwth Partners</strong> • Form Submission System</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

const getUserEmailTemplate = (data: FormSubmissionRequest): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
        .container { padding: 20px; border: 1px solid #ddd; border-radius: 5px; position: relative; }
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
