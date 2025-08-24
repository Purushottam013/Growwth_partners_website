
// Contact API integration for external endpoint
const CONTACT_API_URL = 'http://localhost:8081/api/contact-growwth';

interface ContactApiPayload {
  data: {
    name: string;
    companyName: string;
    email: string;
    phoneNumber: string;
    serviceLookingFor: string;
    message: string;
  };
}

// General contact form mapper (modal form)
export const mapGeneralContactPayload = (formData: {
  name: string;
  company: string;
  email: string;
  countryCode: string;
  phone: string;
  service: string;
}): ContactApiPayload => ({
  data: {
    name: formData.name,
    companyName: formData.company,
    email: formData.email,
    phoneNumber: `${formData.countryCode} ${formData.phone}`,
    serviceLookingFor: formData.service,
    message: "" // General contact form doesn't have a message field
  }
});

// Contact page form mapper (includes message)
export const mapContactPagePayload = (formData: {
  name: string;
  company: string;
  email: string;
  countryCode: string;
  phone: string;
  service: string;
  message: string;
}): ContactApiPayload => ({
  data: {
    name: formData.name,
    companyName: formData.company,
    email: formData.email,
    phoneNumber: `${formData.countryCode} ${formData.phone}`,
    serviceLookingFor: formData.service,
    message: formData.message
  }
});

// Expert form mapper (CFO services)
export const mapExpertFormPayload = (formData: {
  name: string;
  email: string;
  company: string;
  message: string;
}): ContactApiPayload => ({
  data: {
    name: formData.name,
    companyName: formData.company || "",
    email: formData.email,
    phoneNumber: "", // Expert form doesn't collect phone
    serviceLookingFor: "Part-Time/Fractional CFO", // Default service for expert form
    message: formData.message
  }
});

// Main API call function
export const sendToContactApi = async (payload: ContactApiPayload): Promise<void> => {
  try {
    console.log('Sending to contact API:', payload);
    
    const response = await fetch(CONTACT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`API call failed: ${response.status}`);
    }

    const result = await response.json();
    console.log('Contact API response:', result);
  } catch (error) {
    console.error('Error calling contact API:', error);
    // Don't throw - we don't want to break the main flow
  }
};
