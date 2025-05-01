
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  PhoneIcon, 
  User, 
  Building, 
  Mail, 
  MessageSquare
} from "lucide-react";

const services = [
  "Accounting Services",
  "Bookkeeping",
  "Payroll",
  "Taxation & Compliance",
  "Part-Time/Fractional CFO",
  "Cash Flow Modelling",
  "Corporate Secretary",
  "Company Incorporation",
  "Valuation",
  "Due Diligence",
  "Pitch Your StartUp",
  "Invester Growth Services",
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
            <SelectContent className="max-h-[250px] overflow-auto">
              {countryCodes.map((country) => (
                <SelectItem key={country.code} value={country.code} className="text-base py-2">
                  <span className="flex items-center">
                    <span className="mr-2 text-lg">{country.flag}</span>
                    <span>{country.code}</span>
                  </span>
                </SelectItem>
              ))}
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
          <SelectContent className="max-h-[250px] overflow-auto">
            {services.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
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
        className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white py-6 text-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5" 
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </Button>
    </form>
  );
};
