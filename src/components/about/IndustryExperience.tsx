
import { motion } from "framer-motion";

export const IndustryExperience = () => {
  const logos = [
    "/lovable-uploads/0f0b318a-4ef8-4095-870f-df3ab1c5c6f3.png",
    "/lovable-uploads/ba873e62-6dfa-4752-a14b-f5e3e383d17c.png",
    "/lovable-uploads/86314f3c-7a21-4742-abe7-5b054a545a3a.png",
    "/lovable-uploads/0d06335b-68d9-4748-86d0-3cbbeb473321.png",
    "/lovable-uploads/a16de0e6-1747-4ab9-8698-0a26466a8361.png",
    "/lovable-uploads/252078a8-a3c1-4d49-a461-8cff586f2f33.png",
    "/lovable-uploads/feb0a95d-0747-435d-9dcb-57094cb58b81.png",
    "/lovable-uploads/74b52958-ec15-47e6-ba79-c28ff42be2f6.png",
    "/lovable-uploads/6975d6ec-b76e-4c33-bae5-4676538519e8.png",
    "/lovable-uploads/cfad044f-2459-4cc6-b845-3b34a2d834e2.png",
    "/lovable-uploads/cd7b6993-5bda-4906-9674-d7f0ae84cf76.png",
    "/lovable-uploads/8ed45ef5-53d6-4559-8a16-ca7b73e018db.png",
    "/lovable-uploads/2dd7b5c5-f089-4799-a686-6496b406f12e.png",
    "/lovable-uploads/a6523b7a-50ed-4b47-b087-f662f3fbd419.png",
    "/lovable-uploads/b5f95d1d-d3e5-45b7-b21f-8c88c0241762.png"
  ];

  return (
    <section className="bg-white py-[40px] overflow-hidden">
      <div className="container-custom">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8" {/* Changed from mb-16 to mb-8 */}
        >
          Industry Experience
        </motion.h3>

        <div className="relative">
          <motion.div
            className="flex space-x-8"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear"
              }
            }}
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center p-4"
              >
                <img
                  src={logo}
                  alt={`Industry logo ${index + 1}`}
                  className="h-20 object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center p-4"
              >
                <img
                  src={logo}
                  alt={`Industry logo ${index + 1}`}
                  className="h-20 object-contain"
                />
              </div>
            ))}
          </motion.div>
          
          {/* Gradient overlays for smooth transition */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};
