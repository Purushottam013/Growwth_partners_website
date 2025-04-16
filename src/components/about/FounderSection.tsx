
import { motion } from "framer-motion";
import { Globe, Briefcase, Award } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

export const FounderSection = () => {
  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container-custom max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Meet Our Founder and CEO:
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-[320px] h-[320px] mx-auto lg:mx-0 lg:ml-auto group">
              <Avatar className="w-full h-full border-4 border-white shadow-2xl transition-transform duration-300 group-hover:scale-105">
                <AvatarImage 
                  src="/lovable-uploads/afe4aff2-e31a-4c3f-a316-5b398191df48.png"
                  alt="Jatin Detwani"
                  className="object-cover"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-orange/30 to-transparent backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0"
            >
              <Card className="px-6 py-3 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <p className="text-brand-orange font-bold text-lg">Founder & CEO</p>
              </Card>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Jatin Detwani
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                A seasoned executive with 20+ years of global experience leading Growwth Partners.
              </p>
            </div>

            <div className="grid gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="group"
              >
                <Card className="flex items-start space-x-6 p-6 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 border-0 shadow-lg hover:shadow-xl">
                  <Briefcase className="w-12 h-12 text-brand-orange flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">Diverse Background</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Extensive expertise advising technology firms, multinationals, PE/VC investors, family-owned businesses, and startups worldwide.
                    </p>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="group"
              >
                <Card className="flex items-start space-x-6 p-6 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 border-0 shadow-lg hover:shadow-xl">
                  <Globe className="w-12 h-12 text-brand-orange flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">Global Presence</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Worked in India, Singapore, France, the UK, Luxembourg, providing a broad perspective on business landscapes.
                    </p>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="group"
              >
                <Card className="flex items-start space-x-6 p-6 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 border-0 shadow-lg hover:shadow-xl">
                  <Award className="w-12 h-12 text-brand-orange flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">Versatile Skills</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Strong strategic, operational, financial, and investment-related skills acquired through diverse roles, including consultant, startup investor, operator, board member, and various C-suite positions.
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
