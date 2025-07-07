
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

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Expert Fundraising Services for Startups | Growwth Partners",
    "mainEntity": [{
      "@type": "Question",
      "name": "What types of companies do you work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with companies across various industries and stages, from pre-seed startups to established businesses seeking growth capital. Our expertise spans technology, healthcare, fintech, e-commerce, and many other sectors."
      }
    },{
      "@type": "Question",
      "name": "How long does the fundraising process typically take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The fundraising timeline varies depending on several factors including company stage, funding amount, and market conditions. Typically, the process takes 4-6 months from initial engagement to closing, though some rounds may close faster or take longer depending on complexity."
      }
    },{
      "@type": "Question",
      "name": "Do you guarantee funding success?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While we cannot guarantee funding outcomes due to market variables and investor preferences, our proven methodology, extensive network, and comprehensive approach significantly increase your chances of successful fundraising. We work diligently to position your company for success."
      }
    },
    {
      "@type": "Question",
      "name": "How do you help prepare our pitch deck?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our team works closely with you to create compelling, investor-ready pitch decks that clearly communicate your value proposition, market opportunity, business model, and growth potential. We ensure your presentation tells a compelling story that resonates with investors."
      }
    },
  ]
  };

  return (
    <Layout>
      <SEOhelper
        title="Expert Fundraising Services for Startups | Growwth Partners"
        description="Secure the capital your business needs to scale with our expert-led fundraising solutions. From seed to Series A and beyond - start your fundraising journey today."
        keywords="fundraising services, startup funding, venture capital, angel investors, pitch deck, Series A funding, investment strategy"
        canonicalUrl='https://growwthpartners.com/fundraising-services/'
        structuredData={organizationSchema}
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
