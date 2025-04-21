
import React from "react";
import { motion } from "framer-motion";
import { 
  DollarSign, 
  FileText, 
  Briefcase, 
  Users, 
  ShieldCheck
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ServicesSection = () => {
  const services = [
    {
      icon: <DollarSign className="w-10 h-10 text-white" />,
      title: "Payroll and payroll related compliances",
      description: "We assist businesses with correct payroll processing, proper maintenance, and timely payout in order to make payroll management a success."
    },
    {
      icon: <FileText className="w-10 h-10 text-white" />,
      title: "Withholding tax, income tax compliances",
      description: "Keep your tax filings up to date. We will ensure that your tax returns are accurate, timely provided, & tax liability is as low as possible."
    },
    {
      icon: <Briefcase className="w-10 h-10 text-white" />,
      title: "Transfer Pricing",
      description: "We make sure that the Transfer Pricing documentation is in place before the annual tax return filing deadline."
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: "Corporate governance",
      description: "We advise and implement most practical and effective Corporate Governance processes to meet needs of your business and your risk profile."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-white" />,
      title: "Corp sec services",
      description: "We take care of the all the required compliances for your business in Singapore including secretarial services under Singapore Companies Law and ACRA."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#081221] to-[#1a274d] text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Your Premier Corporate Secretarial Services In Singapore</h3>
          <p className="text-xl text-gray-300">
            We deliver transparent, efficient, innovative & corporate secretarial services in Singapore
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="bg-white/5 backdrop-blur-sm border-none rounded-xl overflow-hidden h-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-0 h-full">
                  <div className="p-6 flex flex-col h-full">
                    <div className="bg-gradient-to-r from-[#F87315] to-[#FF9F50] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-white">{service.title}</h4>
                    <p className="text-gray-300 flex-grow">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
