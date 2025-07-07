

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
  Building,
  Star,
  Globe,
  Zap
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
      description: "Comprehensive fundraising strategy tailored to your business stage and market conditions.",
      details: ["Strategic positioning", "Market analysis", "Timing optimization", "Growth roadmap"]
    },
    {
      icon: Users,
      title: "Investor Identification & Outreach",
      description: "Connect with the right investors through our extensive network of VCs and angel investors.",
      details: ["Investor matching", "Network access", "Pitch preparation", "Relationship building"]
    },
    {
      icon: FileText,
      title: "Pitch Deck Development",
      description: "Create compelling presentations that capture investor attention and drive funding decisions.",
      details: ["Story crafting", "Visual design", "Data presentation", "Investment thesis"]
    },
    {
      icon: Shield,
      title: "Due Diligence Preparation",
      description: "Get investor-ready with organized financials, legal documents, and KPIs.",
      details: ["Document organization", "Financial preparation", "Legal compliance", "Process streamlining"]
    },
    {
      icon: Handshake,
      title: "Negotiation Support",
      description: "Navigate term sheets and investment agreements with expert guidance.",
      details: ["Term sheet review", "Valuation analysis", "Deal structuring", "Legal support"]
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

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden flex items-center">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-400/20 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-cyan-400/25 rounded-full blur-2xl animate-pulse delay-700"></div>
        </div>
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45"></div>
          <div className="absolute bottom-40 right-40 w-24 h-24 border border-white/15 rotate-12"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-white/25 rotate-45"></div>
        </div>
        
        <div className="container-custom relative z-10 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-10">
                <div className="space-y-8">
                  <Badge className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border-white/30 px-6 py-3 text-base backdrop-blur-md rounded-full">
                    <Rocket className="w-5 h-5" />
                    Expert-Led Fundraising Solutions
                  </Badge>
                  
                  <div className="space-y-6">
                    <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                      Transform Your
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-pulse">
                        Vision Into
                      </span>
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
                        Reality
                      </span>
                    </h1>
                    
                    <p className="text-lg lg:text-xl text-blue-100 leading-relaxed max-w-2xl font-light">
                      From seed funding to Series A and beyond. Expert guidance to secure the capital your startup needs to thrive in today's competitive market.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 text-xl font-bold shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 rounded-full"
                    onClick={() => setContactModalOpen(true)}
                  >
                    <Rocket className="mr-3 h-6 w-6" />
                    Start Your Journey
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-white/40 text-white hover:bg-white/15 px-10 py-6 text-xl backdrop-blur-md rounded-full font-semibold"
                    onClick={() => setContactModalOpen(true)}
                  >
                    <DollarSign className="mr-3 h-6 w-6" />
                    For Investors
                  </Button>
                </div>

                {/* Enhanced Stats with Icons */}
                <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/20">
                  <div className="text-center group">
                    <div className="flex items-center justify-center mb-3">
                      <Building className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-1">100+</div>
                    <div className="text-blue-200 text-base">Companies Served</div>
                  </div>
                  <div className="text-center group">
                    <div className="flex items-center justify-center mb-3">
                      <DollarSign className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-1">$500M+</div>
                    <div className="text-blue-200 text-base">Capital Raised</div>
                  </div>
                  <div className="text-center group">
                    <div className="flex items-center justify-center mb-3">
                      <Star className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-1">85%</div>
                    <div className="text-blue-200 text-base">Success Rate</div>
                  </div>
                </div>
              </div>

              {/* Reduced Hero Visual Size */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-3 border border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-500 max-w-sm mx-auto lg:mx-0">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                        <Globe className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white mb-0.5">Ready to Scale?</h3>
                        <p className="text-blue-200 text-xs">Join 100+ successful companies</p>
                      </div>
                    </div>
                    
                    <div className="space-y-1.5">
                      <div className="bg-white/10 rounded-lg p-2 border border-white/10 hover:bg-white/15 transition-colors">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-white font-semibold text-xs">Pre-seed to Series A</span>
                          <CheckCircle className="w-3 h-3 text-green-400" />
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-0.5">
                          <div className="bg-gradient-to-r from-green-400 to-blue-500 h-0.5 rounded-full w-3/4 shadow-lg"></div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-2 border border-white/10 hover:bg-white/15 transition-colors">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-white font-semibold text-xs">Growth Capital</span>
                          <CheckCircle className="w-3 h-3 text-green-400" />
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-0.5">
                          <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-0.5 rounded-full w-4/5 shadow-lg"></div>
                        </div>
                      </div>

                      <div className="bg-white/10 rounded-lg p-2 border border-white/10 hover:bg-white/15 transition-colors">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-white font-semibold text-xs">Strategic Partnerships</span>
                          <Zap className="w-3 h-3 text-yellow-400" />
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-0.5">
                          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-0.5 rounded-full w-5/6 shadow-lg"></div>
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

      {/* About Section - Wrapped in gradient cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              About Our Fundraising Service
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-200/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Expert Guidance</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    At Growwth Partners, we understand that securing funding is one of the most critical steps in your startup journey. Our experienced team provides end-to-end fundraising support, combining deep market knowledge with proven strategies.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-200/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Scaling Success</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Whether you're preparing for your first funding round or looking to scale through Series A, B, or later stages, we provide the expertise and network you need to connect with the right investors at the right time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Improved Layout with Light Gradients */}
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

          {/* First Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {services.slice(0, 3).map((service, index) => (
              <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-blue-50/50 to-purple-50/50">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Second Row - 2 Cards Centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {services.slice(3).map((service, index) => (
                <Card key={index + 3} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-green-50/50 to-blue-50/50">
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - 3-2 Layout with Second Row Centered */}
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

          {/* First Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {whyChooseUs.slice(0, 3).map((item, index) => (
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

          {/* Second Row - 2 Cards Centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {whyChooseUs.slice(3).map((item, index) => (
                <Card key={index + 3} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
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

      {/* Enhanced Get Started Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/3 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/3 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        {/* Geometric decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/15 rotate-12 animate-pulse delay-1000"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="inline-flex items-center gap-2 bg-white/15 text-white border-white/30 px-6 py-3 text-base backdrop-blur-md rounded-full mb-8 shadow-lg">
                <Star className="w-5 h-5" />
                Ready to Transform Your Business?
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Ready to Get
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
                  Started?
                </span>
              </h2>
              <p className="text-xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Take the first step towards securing your next funding round. Our team is ready to help you achieve your fundraising goals and unlock your startup's potential.
              </p>
            </div>
            
            {/* Enhanced Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
              {/* Email Card */}
              <Card className="bg-gradient-to-br from-white/20 via-white/15 to-white/10 backdrop-blur-xl border border-white/30 hover:bg-gradient-to-br hover:from-white/25 hover:via-white/20 hover:to-white/15 transition-all duration-300 group transform hover:scale-105 hover:shadow-2xl shadow-xl">
                <CardContent className="p-8 text-center relative overflow-hidden">
                  {/* Card decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-xl"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-blue-400 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-4 text-white">Email Us</h3>
                    <p className="text-blue-100 mb-6 text-base leading-relaxed">Get in touch via email for detailed discussions about your fundraising needs</p>
                    <a 
                      href="mailto:jd@growwthpartners.com" 
                      className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors font-semibold text-base bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 border border-white/20 hover:border-white/40 backdrop-blur-sm"
                    >
                      jd@growwthpartners.com
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              {/* Phone Card */}
              <Card className="bg-gradient-to-br from-white/20 via-white/15 to-white/10 backdrop-blur-xl border border-white/30 hover:bg-gradient-to-br hover:from-white/25 hover:via-white/20 hover:to-white/15 transition-all duration-300 group transform hover:scale-105 hover:shadow-2xl shadow-xl">
                <CardContent className="p-8 text-center relative overflow-hidden">
                  {/* Card decoration */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-xl"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-transparent rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-purple-400 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-4 text-white">Call Us</h3>
                    <p className="text-blue-100 mb-6 text-base leading-relaxed">Speak directly with our fundraising experts for immediate assistance</p>
                    <a 
                      href="tel:+6598615600" 
                      className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors font-semibold text-base bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 border border-white/20 hover:border-white/40 backdrop-blur-sm"
                    >
                      +65 9861 5600
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced CTA Button */}
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 rounded-full border-2 border-transparent hover:border-blue-200 group"
                onClick={() => setContactModalOpen(true)}
              >
                <Rocket className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                Schedule a Consultation
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-blue-200 text-sm mt-4 max-w-md mx-auto">
                Free 30-minute consultation to discuss your fundraising strategy
              </p>
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

