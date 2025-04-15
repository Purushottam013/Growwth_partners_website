
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";

export const CtaSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleJoinUs = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-brand-dark to-gray-900 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-6">Ready to Transform Your Business Finances?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Partner with us for expert accounting, bookkeeping, and financial advisory services 
            tailored to your business needs. Let's grow together!
          </p>
          <Button 
            onClick={handleJoinUs} 
            className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg font-bold rounded-full"
          >
            Join Us
          </Button>
        </div>
      </div>
    </section>
  );
};
