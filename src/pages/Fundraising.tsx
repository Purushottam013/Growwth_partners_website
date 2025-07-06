
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
  User,
  Star,
  Zap,
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
      description: "First time founder? We work with you to develop a comprehensive fundraising strategy tailored to your needs and stage of business, market conditions and growth objectives. Our strategic approach ensures you're well-positioned before approaching investors.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Investor Identification & Outreach",
      description: "Leverage our extensive network of angel investors, HNIs and top tier venture capital firms who invest across various stages. We identify the most relevant investors for your industry and stage of growth, then facilitate meaningful connections and also prepare you to pitch and win.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FileText,
      title: "Pitch Deck Development",
      description: "Create compelling, investor-ready pitch decks that clearly communicate your value proposition, market opportunity and growth potential. Our presentations are designed to capture investor attention and drive funding decisions.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Due Diligence Preparation",
      description: "Get your business investor-ready with comprehensive due diligence preparation. We help organize your financial records, legal documents, and KPIs to streamline the investment process.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Handshake,
      title: "Negotiation Support",
      description: "Navigate and understand complex term sheets and investment agreements with confidence. Our team provides expert guidance on valuation, equity structures, and deal terms to ensure favorable outcomes for you and your business.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Our team together has more than 100 years of vast experience in finance. Our founder CEO (Jatin Detwani) was the ex-CFO at Rocket internet. We bring deep experience across 100+ companies globally, acting as Fractional and Strategic CFOs for startups and growth-stage businesses.",
      stats: "100+ Companies Served"
    },
    {
      icon: Network,
      title: "Extensive Network",
      description: "With us you will have access to a curated network of investors, including top-tier VCs, angel groups, and strategic partners actively seeking investment opportunities.",
      stats: "500+ Investor Network"
    },
    {
      icon: TrendingUp,
      title: "Industry Expertise",
      description: "Our team has a rich and deep understanding of market dynamics, investor preferences, and funding trends across multiple sectors and business models.",
      stats: "Multi-Sector Experience"
    },
    {
      icon: User,
      title: "Personalized Approach",
      description: "Every engagement is tailored to your specific needs, ensuring strategies align with your business goals and market position.",
      stats: "Tailored Solutions"
    },
    {
      icon: CheckCircle,
      title: "End-to-End Support",
      description: "From initial strategy through closing, we provide comprehensive support at every stage of the fundraising process.",
      stats: "Complete Journey"
    }
  ];

  const achievements = [
    { number: "300%", label: "Valuation Uplift", description: "for a medtech company" },
    { number: "100+", label: "Companies", description: "globally served" },
    { number: "$50M+", label: "Raised", description: "for our clients" },
    { number: "4-6", label: "Months", description: "average timeline" }
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
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-6 py-3 text-sm font-medium rounded-full animate-fade-in">
                <Rocket className="w-4 h-4 mr-2" />
                Expert-Led Fundraising Solutions
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight animate-fade-in">
              Expert led fundraising solutions for 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"> startups</span> and 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400"> emerging companies</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed max-w-4xl mx-auto animate-fade-in delay-200">
              Expert guidance to secure the capital your business needs to scale. From seed to Series A and beyond...
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in delay-300">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 text-lg font-bold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 rounded-full"
                onClick={() => setContactModalOpen(true)}
              >
                <Rocket className="mr-3 h-6 w-6" />
                Start your Fundraising Journey here
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl animate-fade-in delay-400">
              <div className="flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Are you an investor?</h3>
              </div>
              <p className="text-lg mb-6 text-gray-200">
                Join us to be the first one to invest in the best deals out there.
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/40 text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
                onClick={() => setContactModalOpen(true)}
              >
                <DollarSign className="mr-3 h-5 w-5" />
                Send the Best Deals to Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Zap className="w-12 h-12 text-purple-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              About Our Fundraising Service
            </h2>
            <div className="text-xl text-gray-700 space-y-8 leading-relaxed">
              <p className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl">
                At Growwth Partners, we understand that securing funding is one of the most critical steps in your startup journey. Our experienced team provides end-to-end fundraising support, combining deep market knowledge with proven strategies to help you connect with the right investors at the right time.
              </p>
              <p className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
                Whether you're preparing for your first funding round or looking to scale through Series A, B, or later stages, we provide the expertise and network you need to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="container-custom">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-purple-100 text-purple-700 px-4 py-2">Our Expertise</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive fundraising solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className={`bg-gradient-to-br ${service.color} w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-purple-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-6 h-6 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 px-4 py-2">Why Choose Us</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Growwth Partners?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven expertise, extensive network, and personalized support for your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 group">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-blue-400 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <Badge className="bg-purple-500/20 text-purple-200 text-xs">
                      {item.stats}
                    </Badge>
                  </div>
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
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-blue-100 text-blue-700 px-4 py-2">FAQ</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about our fundraising services
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border-0 rounded-2xl shadow-lg px-8 hover:shadow-xl transition-shadow duration-300">
                  <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline py-8 text-lg hover:text-purple-700 transition-colors duration-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-8 text-lg leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <Star className="w-16 h-16 text-yellow-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Get Started
            </h2>
            <p className="text-xl mb-12 text-blue-100 leading-relaxed">
              Ready to accelerate your growth through strategic fundraising? Contact us today to discuss your funding needs and learn how we can help you achieve your goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-8 w-8 text-blue-300" />
                  </div>
                  <h3 className="font-bold mb-4 text-xl">Email Us</h3>
                  <a href="mailto:jd@growwthpartners.com" className="text-blue-300 hover:text-white transition-colors text-lg font-medium">
                    jd@growwthpartners.com
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-8 w-8 text-blue-300" />
                  </div>
                  <h3 className="font-bold mb-4 text-xl">Call Us</h3>
                  <a href="tel:+6598615600" className="text-blue-300 hover:text-white transition-colors text-lg font-medium">
                    +65 9861 5600
                  </a>
                </CardContent>
              </Card>
            </div>

            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105 rounded-full"
              onClick={() => setContactModalOpen(true)}
            >
              Start Your Fundraising Journey
              <ArrowRight className="ml-3 h-6 w-6" />
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
