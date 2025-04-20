import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Star } from "lucide-react";
export const AboutTestimonials = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const testimonialVideos = [{
    id: "uylxy3pjgl",
    title: "Customer Testimonial 1",
    name: "Ellie Curran",
    role: "Ex Co-Founder & CEO, CoLab"
  }, {
    id: "7lotud5v4w",
    title: "Customer Testimonial 2",
    name: "Migara Tennakoon",
    role: "Founder & CEO, Peace Lily"
  }];
  return <section className="bg-gray-50 py-[40px]">
      <div className="container-custom">
        <h2 className="heading-lg text-center mb-6">Our Happy Customers</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto font-semibold">
          Finance made simple with our services. Not trusting our words? Hear what our clients are saying about us and our services.
        </p>
        <div className="max-w-4xl mx-auto">
          <Carousel opts={{
          align: "start",
          loop: true
        }} className="relative">
            <CarouselContent>
              {testimonialVideos.map(video => <CarouselItem key={video.id} className="md:basis-full">
                  <div className="bg-white rounded-lg p-8 shadow-lg">
                    <div className="flex flex-col items-center mb-4">
                      <div className="flex gap-1 mb-2">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-brand-orange text-brand-orange" />)}
                      </div>
                      <h4 className="text-xl font-semibold mb-1">{video.name}</h4>
                      <p className="text-gray-600 mb-4">{video.role}</p>
                    </div>
                    <div className="aspect-video w-[85%] mx-auto overflow-hidden rounded-lg">
                      <iframe allowTransparency={true} title={video.title} allowFullScreen frameBorder="0" scrolling="no" className="wistia_embed w-full h-full" name="wistia_embed" src={`https://fast.wistia.net/embed/iframe/${video.id}`} />
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12" />
          </Carousel>
          <p className="text-lg text-gray-600 text-center mt-8">Hear directly from our satisfied customers about their experience working with Growwth Partners.</p>
        </div>
      </div>

      <Dialog open={contactModalOpen} onOpenChange={setContactModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">Speak To An Expert</DialogTitle>
            <DialogDescription className="text-center">
              Every Business Is Unique. Let Us Tailor A Plan For You! Fill In Your Details And An Expert Will Touch Base With You
            </DialogDescription>
          </DialogHeader>
          <ContactForm onSuccess={() => setContactModalOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>;
};