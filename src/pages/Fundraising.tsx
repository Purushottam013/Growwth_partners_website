
import React from 'react';
import { Layout } from "@/components/Layout";
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
  User,
  MapPin,
  Building
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
      points: [
        "100+ years combined finance experience",
        "Ex-CFO at Rocket Internet leadership",
        "100+ companies served globally"
      ]
    },
    {
      icon: Network,
      title: "Extensive Network",
      points: [
        "Curated investor connections",
        "Top-tier VCs and angel groups",
        "Active investment opportunities"
      ]
    },
    {
      icon: TrendingUp,
      title: "Industry Expertise",
      points: [
        "Deep market understanding",
        "Multiple sector experience",
        "Current funding trends knowledge"
      ]
    },
    {
      icon: User,
      title: "Personalized Approach",
      points: [
        "Tailored strategies for each client",
        "Business goals alignment",
        "Market position optimization"
      ]
    },
    {
      icon: CheckCircle,
      title: "End-to-End Support",
      points: [
        "Strategy to closing support",
        "Every stage guidance",
        "Comprehensive process management"
      ]
    }
  ];

  const faqs = [
    {
      question: "What types of companies do you work with?",
      answer: "We work with companies across various industries and stages, from pre-seed startups to established businesses seeking growth capital. Our expertise spans technology, healthcare, fintech, e-commerce, and many other sectors."
    },
    {
      question: "How long does the fundraising process typically take?",
      answer: "The fundraising timeline varies depending on several factors including company stage, funding amount, and market conditions. Typically, the process takes 4-6 months from initial engagement to closing, though some rounds may close faster or take longer depending on complexity."
    },
    {
      question: "What is your fee structure?",
      answer: "We offer flexible engagement models to suit different client needs, including success-based fees, retainer arrangements, and hybrid structures. Our fee structure is transparent and aligned with your fundraising goals. Contact us for a detailed discussion about pricing options."
    },
    {
      question: "Do you guarantee funding success?",
      answer: "While we cannot guarantee funding outcomes due to market variables and investor preferences, our proven methodology, extensive network, and comprehensive approach significantly increase your chances of successful fundraising. We work diligently to position your company for success."
    },
    {
      question: "What stages of funding do you support?",
      answer: "We support companies at all funding stages, from pre-seed and seed rounds to Series A, B, C, and beyond. We also assist with bridge financing, debt funding, and strategic partnerships. Our approach is tailored to your specific stage and requirements."
    },
    {
      question: "How do you help prepare our pitch deck?",
      answer: "Our team works closely with you to create compelling, investor-ready pitch decks that clearly communicate your value proposition, market opportunity, business model, and growth potential. We ensure your presentation tells a compelling story that resonates with investors."
    }
  ];

  return (
    <Layout>
      <SEOhelper
        title="Expert Fundraising Services for Startups | Growwth Partners"
        description="Secure the capital your business needs to scale with our expert-led fundraising solutions. From seed to Series A and beyond - start your fundraising journey today."
        keywords="fundraising services, startup funding, venture capital, angel investors, pitch deck, Series A funding, investment strategy"
      />

      {/* Hero Section - Completely Redesigned */}
      <section className="relative min-h-[90vh] bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white overflow-hidden flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400/10 rounded-full blur-2xl"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/lovable-uploads/grid-pattern.svg')] opacity-10"></div>
        
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <Badge className="inline-flex items-center gap-2 bg-white/10 text-white border-white/20 px-4 py-2 text-sm backdrop-blur-sm">
                    <Rocket className="w-4 h-4" />
                    Expert-Led Fundraising Solutions
                  </Badge>
                  
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    Fuel Your
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                      Growth Story
                    </span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-xl">
                    From seed to Series A and beyond. Expert guidance to secure the capital your business needs to scale.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                    onClick={() => setContactModalOpen(true)}
                  >
                    <Rocket className="mr-2 h-5 w-5" />
                    Start Your Journey
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm"
                    onClick={() => setContactModalOpen(true)}
                  >
                    <DollarSign className="mr-2 h-5 w-5" />
                    For Investors
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">100+</div>
                    <div className="text-blue-200 text-sm">Companies Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">$500M+</div>
                    <div className="text-blue-200 text-sm">Capital Raised</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">85%</div>
                    <div className="text-blue-200 text-sm">Success Rate</div>
                  </div>
                </div>
              </div>

              {/* Hero Visual */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">Ready to Scale?</h3>
                        <p className="text-blue-200">Join 100+ successful companies</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-medium">Pre-seed to Series A</span>
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-3/4"></div>
                        </div>
                      </div>
                      
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-medium">Growth Capital</span>
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full w-4/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

      {/* Why Choose Us Section - Redesigned with Point Format */}
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
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-blue-400 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-6 text-white">
                    {item.title}
                  </h3>
                  <ul className="space-y-3">
                    {item.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Using Cash Flow Page Style */}
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
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline px-8 py-6 hover:bg-gray-50 rounded-t-xl">
                    <span className="pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 px-8 pb-6 pt-2 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Get Started Section - Improved Design */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Take the first step towards securing your next funding round. Our team is ready to help you achieve your fundraising goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Contact Cards */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-4">Email Us</h3>
                  <p className="text-blue-100 mb-4">Get in touch via email for detailed discussions</p>
                  <a 
                    href="mailto:jd@growwthpartners.com" 
                    className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors font-medium"
                  >
                    jd@growwthpartners.com
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-4">Call Us</h3>
                  <p className="text-blue-100 mb-4">Speak directly with our fundraising experts</p>
                  <a 
                    href="tel:+6598615600" 
                    className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors font-medium"
                  >
                    +65 9861 5600
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-4">Visit Us</h3>
                  <p className="text-blue-100 mb-4">Meet us at our Singapore office</p>
                  <p className="text-white font-medium">
                    Singapore Office
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setContactModalOpen(true)}
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen} 
      />
    </Layout>
  );
};

export default Fundraising;
