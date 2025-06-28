import { motion } from "framer-motion";
import { OptimizedImage } from "@/components/ui/optimized-image";

const logos = ["/lovable-uploads/282e3516-793c-4c30-bc6c-e7eb739c38c8.png",
// Dataleap
"/lovable-uploads/99fcce07-ce02-44ee-8870-4f52d33459d0.png",
// Hybrid
"/lovable-uploads/7dc923dd-e1e3-420a-a0aa-668aabe312b3.png",
// Juvoxa
"/lovable-uploads/fd59f6aa-607b-4701-8af8-38f7feee006f.png",
// Kaya Founders
"/lovable-uploads/aa76040e-2068-42e8-8283-9eaf66c10138.png",
// KeyReply
"/lovable-uploads/c109455f-7ae7-49e1-8463-1f9a14ef8d4b.png",
// Mana
"/lovable-uploads/f7576af1-c02f-4d0a-a034-219b55bc62d8.png",
// Mangtas
"/lovable-uploads/86472ba7-d8a2-47d2-b34c-ea31e1419f16.png",
// Ronpos
"/lovable-uploads/5261aa9f-d764-47ed-a044-14cc7760906f.png",
// Tigerhall
"/lovable-uploads/7aeeb063-7885-4f1a-ba0f-b9d684c2b2d6.png",
// TreeDots
"/lovable-uploads/2e976aa7-241a-43d1-bb45-3f5127a76984.png",
// Appboxo
"/lovable-uploads/16ee7b65-f455-49be-936a-d460497f89de.png",
// Cenoa
"/lovable-uploads/311b604a-3636-4d94-b540-e59129f600b1.png",
// Eblity
"/lovable-uploads/fe4f0800-a09e-406e-ab81-905c2f53439a.png" // GreenA
];

export const TrustedSection = () => {
  return <section className="bg-gray-50 overflow-hidden py-[20px]">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <motion.h3 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-3xl font-bold mb-4">
            Trusted by 200+ startups/businesses around the world
          </motion.h3>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-gray-50 to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-gray-50 to-transparent"></div>
            
            <div className="overflow-hidden">
              <motion.div className="flex" animate={{
              x: [0, -2000],
              transition: {
                x: {
                  repeat: Infinity,
                  duration: 30,
                  ease: "linear"
                }
              }
            }}>
                {[...logos, ...logos].map((logo, index) => <motion.div key={index} className="flex-shrink-0 mx-8">
                    <OptimizedImage 
                      src={logo} 
                      alt="Partner logo" 
                      className="h-20 w-auto object-contain transition-all duration-300 hover:scale-110" 
                      width={120}
                      height={80}
                    />
                  </motion.div>)}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
