import { motion } from "framer-motion";
import { Clock } from "lucide-react";
export const FoodTechTimeline = () => {
  return <section className="bg-gradient-to-br from-slate-50 to-white py-[60px]">
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
      }} className="text-center mb-16">
          <h3 className="heading-md text-brand-dark">Timelines</h3>
          <div className="w-24 h-1 bg-brand-orange mx-auto mt-4"></div>
        </motion.div>
        
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-brand-orange/10 rounded-full">
                <Clock className="text-brand-orange" size={24} />
              </div>
              <h4 className="text-xl font-bold text-brand-dark">Project Completion</h4>
            </div>
            
            <div className="pl-4 border-l-2 border-brand-orange/30">
              <p className="text-gray-700 leading-relaxed">
                Completion of data cleanup and system integration within 4 months, overcoming delays in data gathering and internal restructuring.
              </p>
            </div>
            
            <div className="w-full h-2 bg-gray-100 rounded-full mt-8 mb-2">
              <div className="h-full w-full bg-gradient-to-r from-brand-orange to-orange-400 rounded-full"></div>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Project Start</span>
              <span>4 Months</span>
              <span>Completion</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};