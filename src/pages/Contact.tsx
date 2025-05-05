
import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { LocationsSection } from "@/components/contact/LocationsSection";
import { ContactTestimonials } from "@/components/contact/ContactTestimonials";
import { useCountry } from "@/contexts/CountryContext";

const ContactPage = () => {
  const { country } = useCountry();
  
  // Redirect non-Singapore users to their respective home pages
  if (country === 'uae') {
    return <Navigate to="/uae" replace />;
  }
  
  if (country === 'australia') {
    return <Navigate to="/australia" replace />;
  }
  
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <ContactHero />
        <ContactFormSection />
        <ContactTestimonials />
        <LocationsSection />
      </motion.div>
    </Layout>
  );
};

export default ContactPage;
