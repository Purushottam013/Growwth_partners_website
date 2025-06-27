
import { Layout } from "@/components/Layout";
import SEOhelper from "@/components/SEOhelper";

const TermsPage = () => {
  return (
    <Layout>
      <SEOhelper
        title="Terms & Conditions | Growwth Partners"
        description="Read the terms and conditions for using Growwth Partners' services and website. Understanding your rights and responsibilities."
        canonicalUrl={`${window.location.origin}/terms`}
        keywords="terms and conditions, legal terms, service agreement, growwth partners"
      />
      
      <div className="py-16 container-custom">
        <h1 className="text-3xl font-bold mb-8">Terms & Conditions</h1>
        
        <div className="prose max-w-none space-y-8">
          <p className="text-gray-600">Last updated: April 26, 2025</p>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials on Growwth Partners' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
            <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Growwth Partners at any time.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
            <p>The materials on Growwth Partners' website are provided on an 'as is' basis. Growwth Partners makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
            <p>In no event shall Growwth Partners or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Growwth Partners' website, even if Growwth Partners or a Growwth Partners authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">5. Privacy Policy</h2>
            <p>Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, to understand our practices.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">6. Contact Information</h2>
            <p>If you have any questions about these Terms & Conditions, please contact us through our contact page or email us directly.</p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default TermsPage;
