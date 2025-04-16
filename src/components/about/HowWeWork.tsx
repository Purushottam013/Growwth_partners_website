import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";
import { ArrowRight, FileText, PiggyBank, LineChart, Target } from "lucide-react";
import { useState } from "react";
export const HowWeWork = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const services = [{
    icon: <FileText className="w-10 h-10 text-brand-orange" />,
    title: "Facilitating & Interpreting Financial Reporting",
    description: "Translating complex financial data into actionable insights."
  }, {
    icon: <PiggyBank className="w-10 h-10 text-brand-orange" />,
    title: "Raising Capital & Budgeting",
    description: "Ensuring financial stability and strategic allocation of resources."
  }, {
    icon: <LineChart className="w-10 h-10 text-brand-orange" />,
    title: "Long and Short-Term Forecasting",
    description: "Providing a roadmap for sustainable growth."
  }, {
    icon: <Target className="w-10 h-10 text-brand-orange" />,
    title: "Financial Strategy",
    description: "Crafted to align with your business goals and objectives."
  }];
  return <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">How We Work?</h3>
          <p className="text-xl text-gray-600 mb-8">Growwth Partners is more than a service provider, we are your dedicated partners in growth.</p>
          <Button onClick={() => setContactModalOpen(true)} className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg rounded-full">
            Speak to an Expert <ArrowRight className="ml-2" />
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => <motion.div key={index} initial={{
          opacity: 0,
          x: index % 2 === 0 ? -20 : 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1,
          duration: 0.6
        }} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>)}
        </div>
      </div>

      <Dialog open={contactModalOpen} onOpenChange={setContactModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">Speak to an Expert</DialogTitle>
            <DialogDescription className="text-center">
              Get personalized guidance for your business needs
            </DialogDescription>
          </DialogHeader>
          <ContactForm onSuccess={() => setContactModalOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>;
};