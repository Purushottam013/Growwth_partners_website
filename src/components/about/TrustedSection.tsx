
import { motion } from "framer-motion";

const logos = [
  "/lovable-uploads/b41b27de-5576-4f59-b78f-d07b2ac7e519.png",
  "/lovable-uploads/9d74d270-391c-4149-a9b3-52a3fb8464f8.png",
  "/lovable-uploads/53363ea3-e5ab-42d7-8871-5ef86ed8aed6.png",
  "/lovable-uploads/3ddbdfb2-0494-4b1b-a217-91c2cbca191a.png"
];

export const TrustedSection = () => {
  return (
    <section className="py-20 bg-gray-50">
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex justify-center"
            >
              <img 
                src={logo} 
                alt="Partner logo" 
                className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
