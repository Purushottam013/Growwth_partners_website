import { motion } from "framer-motion";
import { Check } from "lucide-react";
export const FoodTechGoalsObjectives = () => {
  const objectives = ["Efficiency and Harmony: We streamlined operations for a more efficient and harmonious business.", "Essential Ingredients: We optimized accounting and working capital like culinary experts perfecting a recipe.", "Resource Optimization: We ensured seamless resource management, especially cash flow.", "Transparency and Precision: We brought transparency to operations, with meticulous inventory and expiry date management.", "Recipe for Success: Crafting success through dynamic pricing and strategic marketing"];
  return <section className="bg-gradient-to-br from-gray-50 to-white py-[60px]">
      <div className="container-custom">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} viewport={{
        once: true
      }} className="text-center mb-12">
          <h3 className="heading-md text-brand-dark">Primary Goals and Objectives</h3>
          <div className="w-24 h-1 bg-brand-orange mx-auto mt-4"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <ul className="space-y-4">
            {objectives.map((objective, index) => <motion.li key={index} initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <Check className="text-brand-orange mt-1 flex-shrink-0" size={24} />
                <span className="text-gray-700">{objective}</span>
              </motion.li>)}
          </ul>
        </div>
      </div>
    </section>;
};