
import { motion } from "framer-motion";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export const AboutTestimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Happy Customers</h2>
          <p className="text-xl text-gray-600">
            Finance made simple with our services. Not trusting our words? Hear what our clients are saying about us and our services.
          </p>
        </motion.div>

        <TestimonialsSection />
      </div>
    </section>
  );
};
