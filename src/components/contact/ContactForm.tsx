
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue,
  SelectScrollUpButton,
  SelectScrollDownButton
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { 
  PhoneIcon, 
  User, 
  Building, 
  Mail, 
  MessageSquare, 
  ChevronUp, 
  ChevronDown,
  MapPin,
  MessageCircle
} from "lucide-react";

const services = [
  "Accounting Services",
  "Bookkeeping",
  "Payroll",
  "Taxation & Compliance",
  "Fractional CFO",
  "Cash Flow Modelling",
  "Corporate Secretary",
  "Company Incorporation",
  "Other"
];

const countryCodes = [
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+1", country: "USA", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+86", country: "China", flag: "🇨🇳" },
  { code: "+82", country: "South Korea", flag: "🇰🇷" },
  { code: "+7", country: "Russia", flag: "🇷🇺" },
  { code: "+39", country: "Italy", flag: "🇮🇹" },
  { code: "+34", country: "Spain", flag: "🇪🇸" },
  { code: "+55", country: "Brazil", flag: "🇧🇷" },
  { code: "+52", country: "Mexico", flag: "🇲🇽" },
  { code: "+31", country: "Netherlands", flag: "🇳🇱" },
  { code: "+41", country: "Switzerland", flag: "🇨🇭" },
  { code: "+46", country: "Sweden", flag: "🇸🇪" },
  { code: "+47", country: "Norway", flag: "🇳🇴" },
  { code: "+45", country: "Denmark", flag: "🇩🇰" },
  { code: "+358", country: "Finland", flag: "🇫🇮" },
  { code: "+64", country: "New Zealand", flag: "🇳🇿" },
  { code: "+27", country: "South Africa", flag: "🇿🇦" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
];

const contactDetails = [
  {
    icon: <Mail className="h-6 w-6 text-brand-orange" />,
    title: "Mail Us",
    details: ["jatin@growwthpartners.com"]
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-brand-orange" />,
    title: "Whatsapp",
    details: ["Live Support"]
  },
  {
    icon: <MapPin className="h-6 w-6 text-brand-orange" />,
    title: "Visit Us",
    details: [
      "Come say hello at our office HQ.",
      "65 Chulia Street, #46-00 OCBC Centre, Singapore 049513"
    ]
  },
  {
    icon: <PhoneIcon className="h-6 w-6 text-brand-orange" />,
    title: "Call Us",
    details: ["+65 8893 0720"]
  }
];

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    countryCode: "+65",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Request Submitted",
        description: "We'll be in touch with you shortly. Thank you!",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        countryCode: "+65",
        phone: "",
        service: "",
        message: ""
      });
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#E5DEFF]/20 via-white to-[#D6BCFA]/20">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="heading-md mb-3">Schedule a FREE consultation call with an Expert</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We'd be delighted to assist. Please provide your contact information and we will contact you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 items-start px-4 lg:px-16">
          {/* Contact Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1 space-y-6 pl-4"
          >
            {contactDetails.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                className="bg-white/80 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#9b87f5]/20"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-[#9b87f5]/10 p-3 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden w-[85%] mx-auto">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DBE9FE]/30 rounded-full -mr-10 -mt-10 z-0"></div>
              
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="pl-11"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="pl-11"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@company.com"
                      className="pl-11"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="flex space-x-2">
                    <Select
                      value={formData.countryCode}
                      onValueChange={(value) => handleSelectChange("countryCode", value)}
                    >
                      <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Country" className="text-base" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[250px]">
                        <SelectScrollUpButton className="flex items-center justify-center h-7">
                          <ChevronUp className="h-4 w-4" />
                        </SelectScrollUpButton>
                        <ScrollArea className="h-[200px]">
                          {countryCodes.map((country) => (
                            <SelectItem key={country.code} value={country.code} className="text-base py-2">
                              <span className="flex items-center">
                                <span className="mr-2 text-lg">{country.flag}</span>
                                <span>{country.code}</span>
                              </span>
                            </SelectItem>
                          ))}
                        </ScrollArea>
                        <SelectScrollDownButton className="flex items-center justify-center h-7">
                          <ChevronDown className="h-4 w-4" />
                        </SelectScrollDownButton>
                      </SelectContent>
                    </Select>
                    <div className="relative flex-1">
                      <PhoneIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="pl-11"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Service Looking For</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => handleSelectChange("service", value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <ScrollArea className="h-[200px]">
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </ScrollArea>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message for us</Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="min-h-[120px] pl-11 pt-8"
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white py-6 text-lg font-medium" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
