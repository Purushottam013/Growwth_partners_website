
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

// Main API call function - let errors bubble up
export const sendToContactApi = async (payload: ContactApiPayload): Promise<unknown> => {
  console.log('Sending to contact API:', payload);

  const response = await fetch(CONTACT_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => '');
    console.error('Contact API failed:', response.status, errorText);
    throw new Error(`API call failed: ${response.status} ${errorText}`);
  }

  const result = await response.json().catch(() => null);
  console.log('Contact API response:', result);
  return result;
};

