import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useCountry } from "@/contexts/CountryContext";
import SEOhelper from "@/components/SEOhelper";

const TermsPage = () => {
  const { country } = useCountry();

  // Redirect non-Singapore users to their respective home pages
  if (country === 'uae') {
    return <Navigate to="/uae" replace />;
  }

  if (country === 'australia') {
    return <Navigate to="/australia" replace />;
  }

  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service - Growwth Partners",
    "description": "Terms and conditions for using Growwth Partners' financial services, including accounting, payroll, and CFO advisory services.",
    "publisher": {
      "@type": "Organization",
      "name": "Growwth Partners",
      "url": "https://growwthpartners.com"
    },
    "mainEntity": {
      "@type": "Article",
      "name": "Terms of Service",
      "description": "Legal terms and conditions governing the use of Growwth Partners services"
    }
  };

  return (
    <Layout>
      <SEOhelper
        title="Terms of Service | Growwth Partners"
        description="Terms and conditions for using Growwth Partners' financial services, including accounting, payroll, and CFO advisory services."
        keywords="terms of service, legal terms, growwth partners terms, service agreement"
        canonicalUrl={`${window.location.origin}/terms`}
        structuredData={termsSchema}
      />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Last updated: January 1, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services provided by Growwth Partners ("we," "our," or "us"), 
              you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p>
              Growwth Partners provides financial services including but not limited to accounting, 
              bookkeeping, payroll processing, fractional CFO services, and business advisory services 
              to businesses primarily in Singapore.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p>
              Users are responsible for providing accurate and complete information necessary for 
              the provision of our services. You agree to maintain the confidentiality of your 
              account information and accept responsibility for all activities under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Privacy and Confidentiality</h2>
            <p>
              We are committed to protecting your privacy and maintaining the confidentiality of 
              your financial information. Our privacy practices are detailed in our Privacy Policy, 
              which forms part of these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Service Limitations</h2>
            <p>
              While we strive to provide accurate and timely services, we do not guarantee 
              uninterrupted or error-free service. Our liability is limited to the fees paid 
              for the specific service in question.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
            <p>
              Either party may terminate services with appropriate notice as specified in 
              individual service agreements. Upon termination, we will provide you with 
              your financial records and data in a reasonable format.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
            <p>
              These terms are governed by the laws of Singapore. Any disputes will be 
              resolved through the courts of Singapore.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p><strong>Growwth Partners</strong></p>
              <p>Email: hello@growwthpartners.com</p>
              <p>Phone: +65 8808 8365</p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default TermsPage;
