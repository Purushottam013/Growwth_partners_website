
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CaseStudyCta = () => {
  return (
    <section className="py-20 bg-brand-dark text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <h3 className="text-3xl md:text-4xl font-bold">
            At Growwth Partners, we don't just consult; we collaborate to transform businesses and pave the way for sustained success.
          </h3>
          
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-semibold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-colors text-lg"
          >
            Speak To An Expert
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
