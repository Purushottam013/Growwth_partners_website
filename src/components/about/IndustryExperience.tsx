
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const IndustryExperience = () => {
  // Using the same logos from TrustedSection for now
  const logos = [
    "/lovable-uploads/b41b27de-5576-4f59-b78f-d07b2ac7e519.png",
    "/lovable-uploads/9d74d270-391c-4149-a9b3-52a3fb8464f8.png",
    "/lovable-uploads/53363ea3-e5ab-42d7-8871-5ef86ed8aed6.png",
    "/lovable-uploads/3ddbdfb2-0494-4b1b-a217-91c2cbca191a.png"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Industry Experience
        </motion.h3>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {logos.map((logo, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="flex items-center justify-center p-6">
                  <img 
                    src={logo} 
                    alt="Industry logo" 
                    className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
