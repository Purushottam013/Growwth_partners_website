
import { motion } from "framer-motion";
import { Globe, Briefcase, Award } from "lucide-react";

export const FounderSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Meet Our Founder and CEO
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Jatin Detwani, a seasoned executive with 20+ years of global experience, leads Growwth Partners.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <Briefcase className="w-12 h-12 text-brand-orange mb-4" />
              <h3 className="text-xl font-bold mb-3">Diverse Background</h3>
              <p className="text-gray-600">
                Extensive expertise advising technology firms, multinationals, PE/VC investors, family-owned businesses, and startups worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <Globe className="w-12 h-12 text-brand-orange mb-4" />
              <h3 className="text-xl font-bold mb-3">Global Presence</h3>
              <p className="text-gray-600">
                Worked in India, Singapore, France, the UK, Luxembourg, providing a broad perspective on business landscapes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <Award className="w-12 h-12 text-brand-orange mb-4" />
              <h3 className="text-xl font-bold mb-3">Versatile Skills</h3>
              <p className="text-gray-600">
                Strong strategic, operational, financial, and investment-related skills acquired through diverse roles, including consultant, startup investor, operator, board member, and various C-suite positions.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
