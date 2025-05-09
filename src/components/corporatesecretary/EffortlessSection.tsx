
import React from "react";
import { OptimizedImage } from "../ui/optimized-image";

export const EffortlessSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="opacity-0 animate-fadeIn">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#D3E4FD]/40 to-[#F1F0FB]/40 rounded-2xl blur-lg"></div>
              <OptimizedImage
                src="/lovable-uploads/70b46f47-e5be-4d91-bdfb-9d06b07fc608.png"
                alt="Corporate Governance"
                className="relative rounded-xl shadow-lg w-full"
                width={600}
                height={400}
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-brand-orange">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center opacity-0 animate-fadeIn" style={{ animationDelay: "200ms" }}>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Effortless Compliance, Seamless Governance</h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              In the bustling world of business, keeping up with deadlines, record-keeping, and adhering to Singapore's 
              regulatory landscape can become overwhelming. Non-compliance can lead to penalties and disrupt your business flow.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Growwth Partners, we specialise in easing this burden. We offer dedicated corporate secretary services 
              designed to streamline your compliance journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
