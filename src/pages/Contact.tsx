

import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { LocationsSection } from "@/components/contact/LocationsSection";
import { ContactTestimonials } from "@/components/contact/ContactTestimonials";
import { useCountry } from "@/contexts/CountryContext";
import { Seo } from "@/components/Seo";


const ContactPage = () => {
  const { country } = useCountry();

  // Redirect non-Singapore users to their respective home pages
  if (country === 'uae') {
    return (
      <>
        <Seo
          title="Contact Experts in the UAE | Growwth Partners"
          description="Growwth Partners serves UAE-based businesses. Please visit our UAE site for localized contact support and financial expertise."
          canonical={`${window.location.origin}/uae/contact-us`}
        />
        <Navigate to="/uae" replace />
      </>
    );
  }

  if (country === 'australia') {
    return (
      <>
        <Seo
          title="Australia Enquiry | Growwth Partners"
          description="Growwth Partners operates in Australia! Please visit our Australia page for the latest advisory contact information and service support."
          canonical={`${window.location.origin}/australia/contact-us`}
        />
        <Navigate to="/australia" replace />
      </>
    );
  }

  return (
    <Layout>
      <Seo
        title="Contact Growwth Partners | Speak to a Financial Expert"
        description="Contact Growwth Partners to get personalised finance, accounting, and business growth advice. Our experts in Singapore are ready to help your business succeed."
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <ContactFormSection />
        <ContactHero />
        <ContactTestimonials />
        <LocationsSection />
      </motion.div>
    </Layout>
  );
};

export default ContactPage;
