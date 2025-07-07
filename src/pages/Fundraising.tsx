
import React, { useState } from 'react';
import { Layout } from "@/components/Layout";
import SEOhelper from '@/components/SEOhelper';
import { useCountry } from '@/contexts/CountryContext';
import { ContactModal } from '@/components/ui/contact-modal';
import { HeroSection } from '@/components/fundraising/HeroSection';
import { AboutSection } from '@/components/fundraising/AboutSection';
import { ServicesSection } from '@/components/fundraising/ServicesSection';
import { WhyChooseUsSection } from '@/components/fundraising/WhyChooseUsSection';
import { FAQSection } from '@/components/fundraising/FAQSection';
import { CTASection } from '@/components/fundraising/CTASection';

const Fundraising = () => {
  const { getCountryUrl } = useCountry();
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <Layout>
      <SEOhelper
        title="Expert Fundraising Services for Startups | Growwth Partners"
        description="Secure the capital your business needs to scale with our expert-led fundraising solutions. From seed to Series A and beyond - start your fundraising journey today."
        keywords="fundraising services, startup funding, venture capital, angel investors, pitch deck, Series A funding, investment strategy"
      />

      <HeroSection onContactClick={() => setContactModalOpen(true)} />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <FAQSection />
      <CTASection onContactClick={() => setContactModalOpen(true)} />

      <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen} 
      />
    </Layout>
  );
};

export default Fundraising;
