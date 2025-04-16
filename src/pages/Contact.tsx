
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { LocationsSection } from "@/components/contact/LocationsSection";
import { ContactTestimonials } from "@/components/contact/ContactTestimonials";

const ContactPage = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <ContactHero />
        <ContactForm />
        <LocationsSection />
        <ContactTestimonials />
      </motion.div>
    </Layout>
  );
};

export default ContactPage;
