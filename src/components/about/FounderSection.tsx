
import { motion } from "framer-motion";
import { Globe, Users, Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";

export const FounderSection = () => {
  return (
    <section className="py-20 min-h-screen relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-gray-100/80" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGM0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOC04IDMuNTgyLTggOCAzLjU4MiA4IDggOHoiIHN0cm9rZT0iI2RkZCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-5" />

      <div className="container-custom max-w-7xl relative">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Meet Our Founder and CEO
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Building innovative solutions with decades of global expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Profile Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="sticky top-24">
              <div className="relative w-[320px] h-[320px] mx-auto lg:mx-0 group">
                <div className="relative transform transition-all duration-500 rounded-2xl overflow-hidden shadow-2xl">
                  <Avatar className="w-full h-full">
                    <AvatarImage 
                      src="/lovable-uploads/afe4aff2-e31a-4c3f-a316-5b398191df48.png"
                      alt="Jatin Detwani"
                      className="object-cover w-full h-full"
                    />
                    <AvatarFallback className="text-4xl">JD</AvatarFallback>
                  </Avatar>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              <div className="mt-8 text-center lg:text-left space-y-4">
                <h3 className="text-3xl font-bold text-gray-900">Jatin Detwani</h3>
                <p className="text-brand-orange font-semibold text-lg">Founder & CEO</p>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Versatile Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-orange-100 p-2">
                  <Star className="w-6 h-6 text-brand-orange" />
                </div>
                <h4 className="text-2xl font-semibold text-gray-900">Versatile Skills</h4>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Strong strategic, operational, financial, and investment-related skills acquired through diverse roles, including consultant, startup investor, operator, board member, and various C-suite positions.
              </p>
            </motion.div>

            {/* Experience Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <HoverCard>
                <HoverCardTrigger>
                  <Card className="p-6 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 border-0 shadow-lg hover:shadow-xl group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-orange-100 p-3 group-hover:scale-110 transition-transform duration-300">
                        <Globe className="w-6 h-6 text-brand-orange" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">Global Presence</h4>
                        <p className="text-gray-600">Led initiatives across multiple continents</p>
                      </div>
                    </div>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">International Experience</h4>
                    <p className="text-sm">
                      Worked across India, Singapore, France, UK, and Luxembourg, bringing diverse perspectives to business solutions.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Card className="p-6 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 border-0 shadow-lg hover:shadow-xl group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-blue-100 p-3 group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">Leadership</h4>
                        <p className="text-gray-600">Building and mentoring high-performance teams</p>
                      </div>
                    </div>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Team Development</h4>
                    <p className="text-sm">
                      Expertise in building and leading cross-functional teams across multiple countries and cultures.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
