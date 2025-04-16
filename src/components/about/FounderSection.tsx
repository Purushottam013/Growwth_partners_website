
import { motion } from "framer-motion";
import { Globe, Briefcase, Award } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const FounderSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-[280px] h-[280px] mx-auto lg:mx-0 lg:ml-auto">
              <Avatar className="w-full h-full border-4 border-white shadow-xl">
                <AvatarImage 
                  src="/lovable-uploads/afe4aff2-e31a-4c3f-a316-5b398191df48.png"
                  alt="Jatin Detwani"
                  className="object-cover"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-orange/20 to-transparent" />
            </div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 bg-white rounded-full px-6 py-2 shadow-lg"
            >
              <p className="text-brand-orange font-semibold">Founder & CEO</p>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Jatin Detwani
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A seasoned executive with 20+ years of global experience leading Growwth Partners.
            </p>

            <div className="grid gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-sm"
              >
                <Briefcase className="w-12 h-12 text-brand-orange flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Diverse Background</h3>
                  <p className="text-gray-600">
                    Extensive expertise advising technology firms, multinationals, PE/VC investors, family-owned businesses, and startups worldwide.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-sm"
              >
                <Globe className="w-12 h-12 text-brand-orange flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Global Presence</h3>
                  <p className="text-gray-600">
                    Worked in India, Singapore, France, the UK, Luxembourg, providing a broad perspective on business landscapes.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-sm"
              >
                <Award className="w-12 h-12 text-brand-orange flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Versatile Skills</h3>
                  <p className="text-gray-600">
                    Strong strategic, operational, financial, and investment-related skills acquired through diverse roles, including consultant, startup investor, operator, board member, and various C-suite positions.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Added Heading at the end of the section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Meet Our Founder and CEO:
          </h2>
        </motion.div>
      </div>
    </section>
  );
};
