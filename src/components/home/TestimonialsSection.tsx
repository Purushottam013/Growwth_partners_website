import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Crown, DollarSign, Star } from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";

export const TestimonialsSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const values = [
    {
      icon: <Shield className="h-12 w-12 text-brand-orange" />,
      title: "Trust Value",
      description:
        "With Growwth Partners, you'll always know who you're talking to. We assign dedicated team members to each client, fostering strong, trust-based relationships.",
    },
    {
      icon: <Heart className="h-12 w-12 text-brand-orange" />,
      title: "Professionalism Value",
      description:
        "Our team of experienced professionals is dedicated to providing top-notch financial advice and services. We go beyond basic bookkeeping to offer comprehensive financial insights and strategic guidance.",
    },
    {
      icon: <Crown className="h-12 w-12 text-brand-orange" />,
      title: "Strong Leadership Value",
      description:
        "Our CEO Jatin Detwani is amongst the Top finance professionals globally and has been awarded as Asia's Greatest CFO award.",
    },
    {
      icon: <DollarSign className="h-12 w-12 text-brand-orange" />,
      title: "Affordability Value",
      description:
        "Growwth Partners offers high-quality financial services at competitive rates. Our customized approach ensures you only pay for the services you need, making our solutions both effective and affordable.",
    },
  ];
  const testimonialVideos = [
    {
      id: "uylxy3pjgl",
      title: "Customer Testimonial 1",
      name: "Ellie Curran",
      role: "Ex Co-Founder & CEO, CoLab",
    },
    {
      id: "7lotud5v4w",
      title: "Customer Testimonial 2",
      name: "Migara Tennakoon",
      role: "Founder & CEO, Peace Lily",
    },
  ];
  return (
    <section className="py-[40px]">
      <div className="container-custom mb-20">
        <div className="text-center mb-10">
          <h3 className="heading-md text-center mb-5">
            Service Personalisation Like Never Before
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Unlike automated services offered by other firms, we emphasize
            personal interaction and customized solutions. Our clients always
            know who they are speaking with, ensuring consistency and trust in
            every communication.
          </p>
          <Button
            onClick={() => setContactModalOpen(true)}
            className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg font-medium rounded-full"
          >
            Get Started
          </Button>
        </div>
      </div>

      <div className="bg-gray-50 py-[40px]">
        <div className="container-custom">
          <h1 className="heading-lg text-center mb-16">
            Our Clients Love Us Because..
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300 h-full"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-5 p-3 rounded-full bg-brand-orange/10">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom my-20">
        <h3 className="heading-md text-center mb-8">
          Worked with 500+ startups, investors, founders, MNCs in Asia and
          helped them in their financial journey
        </h3>
        <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-4">
            Our work and fee structure (equity, cash, and others) reflect our
            long-term commitment as partners. We firmly believe that we can only
            grow if our clients grow.
          </p>
          <p className="text-lg text-gray-600">
            Our team has worked with businesses of various sizes, including
            entrepreneurs, start-ups, international corporations, domestic
            corporations, private equity, venture capital, and government/public
            sector organizations.
          </p>
        </div>
      </div>

      <div className="bg-brand-orange text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Did You Know Your Business Can Now Afford a CFO?
            </h1>
            <p className="text-xl opacity-90 mb-10">
              Our clients benefit from our CFO advisory services, which include
              10-20 hours of dedicated financial support each month. This unique
              service provides strategic insights and financial expertise that
              set us apart from standard accounting firms.
            </p>
            <Button
              onClick={() => setContactModalOpen(true)}
              className="bg-white text-brand-orange hover:bg-gray-100 px-8 py-6 text-lg font-bold rounded-full"
            >
              Learn More About CFO Services
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-[60px]">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-6">Our Happy Customers</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto font-semibold">
            Finance made simple with our services. Not trusting our words? Hear
            what our clients are saying about us and our services.
          </p>
          <div className="max-w-4xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="relative"
            >
              <CarouselContent>
                {testimonialVideos.map((video) => (
                  <CarouselItem key={video.id} className="md:basis-full">
                    <div className="bg-white rounded-lg p-8 shadow-lg">
                      <div className="flex flex-col items-center mb-4">
                        <div className="flex gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-brand-orange text-brand-orange"
                            />
                          ))}
                        </div>
                        <h4 className="text-xl font-semibold mb-1">
                          {video.name}
                        </h4>
                        <p className="text-gray-600 mb-4">{video.role}</p>
                      </div>
                      <div className="aspect-video w-[85%] mx-auto overflow-hidden rounded-lg">
                        <iframe
                          allowTransparency={true}
                          title={video.title}
                          allowFullScreen
                          frameBorder="0"
                          scrolling="no"
                          className="wistia_embed w-full h-full"
                          name="wistia_embed"
                          src={`https://fast.wistia.net/embed/iframe/${video.id}`}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12" />
            </Carousel>
            <p className="text-lg text-gray-600 text-center mt-8">
              Hear directly from our satisfied customers about their experience
              working with Growwth Partners.
            </p>
          </div>
        </div>
      </div>



      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </section>
  );
};
