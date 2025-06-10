
import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { LocationsSection } from "@/components/contact/LocationsSection";
import { ContactTestimonials } from "@/components/contact/ContactTestimonials";
import { useCountry } from "@/contexts/CountryContext";
import { SeoOptimizer } from "@/components/SeoOptimizer";

const ContactPage = () => {
  const { country } = useCountry();

  // Redirect non-Singapore users to their respective home pages
  if (country === 'uae') {
    return (
      <>
        <SeoOptimizer
          title="Contact Experts in the UAE | Growwth Partners"
          description="Get UAE-specific support! Reach out to Growwth Partners for expert local UAE financial and accounting advice. Contact our Emirates-based specialists for customized business solutions."
          canonical={`https://growwthpartners.com/uae/contact-us`}
          keywords={["contact uae", "uae financial experts", "emirates accounting", "dubai consultants"]}
        />
        <Navigate to="/uae" replace />
      </>
    );
  }

  if (country === 'australia') {
    return (
      <>
        <SeoOptimizer
          title="Australia Enquiry | Growwth Partners"
          description="Connecting Australian businesses with the right financial, compliance, and startup support. Use our local Australia experts for compliant and growth-oriented business solutions."
          canonical={`https://growwthpartners.com/australia/contact-us`}
          keywords={["contact australia", "australian financial experts", "sydney consultants", "melbourne accounting"]}
        />
        <Navigate to="/australia" replace />
      </>
    );
  }

  return (
    <Layout>
      <SeoOptimizer
        title="Contact Growwth Partners Singapore | Speak to a Financial Expert"
        description="Request custom advice or support from our award-winning Singapore accounting and finance team. We're ready to help your SME or startup grow!"
        canonical={`https://growwthpartners.com/contact-us`}
        keywords={["contact singapore", "financial expert consultation", "accounting advice", "business support"]}
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
