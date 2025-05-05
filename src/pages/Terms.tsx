import { Layout } from "@/components/Layout";
import { useCountry } from "@/contexts/CountryContext";

const TermsPage = () => {
  const { country } = useCountry();
  
  return (
    <Layout>
      <div className="py-16 container-custom">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose max-w-none space-y-8">
          <p className="text-gray-600">Last updated: April 26, 2025</p>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Terms</h2>
            <p>By accessing the website at https://growwthpartners.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
            <div className="space-y-4">
              <p>Permission is granted to temporarily download one copy of the materials (information or software) on Growwth Partners's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc pl-6">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on Growwth Partners's website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Growwth Partners at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
            <div className="space-y-4">
              <p>The materials on Growwth Partners's website are provided on an 'as is' basis. Growwth Partners makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
              <p>Further, Growwth Partners does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
            <p>In no event shall Growwth Partners or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Growwth Partners's website, even if Growwth Partners or a Growwth Partners authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">5. Accuracy of Materials</h2>
            <p>The materials appearing on Growwth Partners's website could include technical, typographical, or photographic errors. Growwth Partners does not warrant that any of the materials on its website are accurate, complete or current. Growwth Partners may make changes to the materials contained on its website at any time without notice. However Growwth Partners does not make any commitment to update the materials.</p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default TermsPage;
