
import React from 'react';
import SEOhelper from '@/components/SEOhelper';
import { useCountry } from '@/contexts/CountryContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  TrendingUp, 
  Users, 
  Target, 
  FileText, 
  Shield, 
  Handshake,
  CheckCircle,
  Mail,
  Phone,
  ArrowRight,
  Rocket,
  DollarSign,
  Network,
  Award,
  User
} from 'lucide-react';
import { ContactModal } from '@/components/ui/contact-modal';
import { useState } from 'react';

const Fundraising = () => {
  const { getCountryUrl } = useCountry();
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const services = [
    {
      icon: Target,
      title: "Fundraising Strategy & Planning",
      description: "First time founder? We work with you to develop a comprehensive fundraising strategy tailored to your needs and stage of business, market conditions and growth objectives. Our strategic approach ensures you're well-positioned before approaching investors."
    },
    {
      icon: Users,
      title: "Investor Identification & Outreach",
      description: "Leverage our extensive network of angel investors, HNIs and top tier venture capital firms who invest across various stages. We identify the most relevant investors for your industry and stage of growth, then facilitate meaningful connections and also prepare you to pitch and win."
    },
    {
      icon: FileText,
      title: "Pitch Deck Development",
      description: "Create compelling, investor-ready pitch decks that clearly communicate your value proposition, market opportunity and growth potential. Our presentations are designed to capture investor attention and drive funding decisions."
    },
    {
      icon: Shield,
      title: "Due Diligence Preparation",
      description: "Get your business investor-ready with comprehensive due diligence preparation. We help organize your financial records, legal documents, and KPIs to streamline the investment process."
    },
    {
      icon: Handshake,
      title: "Negotiation Support",
      description: "Navigate and understand complex term sheets and investment agreements with confidence. Our team provides expert guidance on valuation, equity structures, and deal terms to ensure favorable outcomes for you and your business."
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Our team together has more than 100 years of vast experience in finance. Our founder CEO (Jatin Detwani) was the ex-CFO at Rocket internet. We bring deep experience across 100+ companies globally, acting as Fractional and Strategic CFOs for startups and growth-stage businesses."
    },
    {
      icon: Network,
      title: "Extensive Network",
      description: "With us you will have access to a curated network of investors, including top-tier VCs, angel groups, and strategic partners actively seeking investment opportunities."
    },
    {
      icon: TrendingUp,
      title: "Industry Expertise",
      description: "Our team has a rich and deep understanding of market dynamics, investor preferences, and funding trends across multiple sectors and business models."
    },
    {
      icon: User,
      title: "Personalized Approach",
      description: "Every engagement is tailored to your specific needs, ensuring strategies align with your business goals and market position."
    },
    {
      icon: CheckCircle,
      title: "End-to-End Support",
      description: "From initial strategy through closing, we provide comprehensive support at every stage of the fundraising process."
    }
  ];

  const faqs = [
    {
      question: "What types of companies do you work with?",
      answer: "We work with companies across various industries and stages, from pre-seed startups to established businesses seeking growth capital."
    },
    {
      question: "How long does the fundraising process typically take?",
      answer: "Timeline varies by company and funding stage, but most processes take 4-6 months from initial engagement to closing."
    },
    {
      question: "What is your fee structure?",
      answer: "We offer flexible engagement models including success-based fees, retainer arrangements, and hybrid structures tailored to your needs."
    },
    {
      question: "Do you guarantee funding success?",
      answer: "While we cannot guarantee funding outcomes, our proven methodology and extensive network significantly increase your chances of success."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOhelper
        title="Expert Fundraising Services for Startups | Growwth Partners"
        description="Secure the capital your business needs to scale with our expert-led fundraising solutions. From seed to Series A and beyond - start your fundraising journey today."
        keywords="fundraising services, startup funding, venture capital, angel investors, pitch deck, Series A funding, investment strategy"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 px-4 py-2 text-sm">
              🚀 Expert-Led Fundraising Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Expert led fundraising solutions for 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> startups</span> and 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> emerging companies</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Expert guidance to secure the capital your business needs to scale. From seed to Series A and beyond...
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-xl"
                onClick={() => setContactModalOpen(true)}
              >
                <Rocket className="mr-2 h-5 w-5" />
                Start your Fundraising Journey here
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-lg mb-4 text-gray-200">
                Are you an investor? Join us to be the first one to invest in the best deals out there.
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-6 py-3"
                onClick={() => setContactModalOpen(true)}
              >
                <DollarSign className="mr-2 h-5 w-5" />
                Send the Best Deals to Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              About Our Fundraising Service
            </h2>
            <div className="text-lg text-gray-700 space-y-6 leading-relaxed">
              <p>
                At Growwth Partners, we understand that securing funding is one of the most critical steps in your startup journey. Our experienced team provides end-to-end fundraising support, combining deep market knowledge with proven strategies to help you connect with the right investors at the right time.
              </p>
              <p>
                Whether you're preparing for your first funding round or looking to scale through Series A, B, or later stages, we provide the expertise and network you need to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive fundraising solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Growwth Partners?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven expertise, extensive network, and personalized support for your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-blue-400 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about our fundraising services
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Started
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Ready to accelerate your growth through strategic fundraising? Contact us today to discuss your funding needs and learn how we can help you achieve your goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 mx-auto mb-4 text-blue-300" />
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <a href="mailto:jd@growwthpartners.com" className="text-blue-300 hover:text-white transition-colors">
                    jd@growwthpartners.com
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 mx-auto mb-4 text-blue-300" />
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <a href="tel:+6598615600" className="text-blue-300 hover:text-white transition-colors">
                    +65 9861 5600
                  </a>
                </CardContent>
              </Card>
            </div>

            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl"
              onClick={() => setContactModalOpen(true)}
            >
              Start Your Fundraising Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen} 
      />
    </div>
  );
};

export default Fundraising;
