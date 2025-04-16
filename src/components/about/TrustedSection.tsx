
import { motion } from "framer-motion";

const logos = [
  "/lovable-uploads/b41b27de-5576-4f59-b78f-d07b2ac7e519.png",
  "/lovable-uploads/9d74d270-391c-4149-a9b3-52a3fb8464f8.png",
  "/lovable-uploads/53363ea3-e5ab-42d7-8871-5ef86ed8aed6.png",
  "/lovable-uploads/3ddbdfb2-0494-4b1b-a217-91c2cbca191a.png"
];

export const TrustedSection = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-6"
          >
            Trusted by industries with 95% customer satisfaction
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 text-lg"
          >
            Navigating the intricate financial terrain can be overwhelming, but Growwth Partners is here to simplify and streamline the process for you. We understand the unique needs of businesses, and our solutions are designed to address your specific pain points.
          </motion.p>
        </div>

        <div className="relative">
          {/* Gradient masks for seamless appearance */}
          <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-gray-50 to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-gray-50 to-transparent"></div>
          
          {/* Sliding container */}
          <div className="overflow-hidden">
            <motion.div 
              className="flex"
              animate={{
                x: [0, -1000],
                transition: {
                  x: {
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                  },
                },
              }}
            >
              {/* Double the logos array for seamless loop */}
              {[...logos, ...logos].map((logo, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 mx-8"
                >
                  <img 
                    src={logo} 
                    alt="Partner logo" 
                    className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
