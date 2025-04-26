
import { Layout } from "@/components/Layout";

const TermsPage = () => {
  return (
    <Layout>
      <div className="py-16 container-custom">
        <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="prose max-w-none space-y-8">
          <p className="text-gray-600">Last updated: April 26, 2025</p>
          
          <section className="space-y-4">
            <p>Welcome to the Growwth Partners Pte Ltd (collectively referred to as "GPSPL"). We hope you find it to be informative. Your use of this website is subject to the following terms and conditions, and your use of the website / app constitutes acceptance of these terms ("Agreement"). If you do not agree to the terms stated below OR DO NOT AGREE WITH THIS WEBSITE'S PRIVACY POLICY, THEN YOU MUST immediately LEAVE this website, AS YOU DO NOT HAVE OUR PERMISSION TO USE IT.</p>
            <p className="font-bold">PLEASE NOTE: The GPSPL Terms of Service on this web page are effective as of the 'Last Updated' date above for any user who is browsing the GPSPL Service, or for any user who creates a GPSPL account on or after that date.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. Eligibility and Assent to Terms</h2>
            <p>The following Terms of Service are for the www.growwthpartners.com website, www.app.growwthpartners.com or any redirects, including but not limited to software applications, tools, calculators or other products / services made available by GPSPL from the website or via a third party ('Software'), and any application programming interface ('API') or other technology or services made available by GPSPL via the website or Software (collectively, the 'GPSPL Service') is a legal contract between you, ('You' or, collectively, 'Users'), and GPSPL regarding your use of the GPSPL Service ('Terms').</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Intellectual Property</h2>
            <p>The website and its original content, features and functionality are owned by GPSPL and are protected by international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Modification</h2>
            <p>We reserve the right, at our discretion, to change these Terms on a going-forward basis at any time. Please check these Terms periodically for changes. Material changes are effective upon your acceptance of the modified Terms. Immaterial changes are effective upon publication.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Fees and Payment</h2>
            <div className="space-y-4">
              <p>Some portions of the GPSPL Service may have fees associated with them (each, a 'Paid Service'). You will have the opportunity to review and accept the fees that you will be charged before using a Paid Service.</p>
              <p>Free Trial periods may be available for Paid Services. You may be required to enter a Payment Method to register for a Free Trial.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. User Accounts</h2>
            <p>You may browse the website without creating an account, subject to these Terms. To use the full features of the GPSPL Service, you must register for an account or log in using a supported third-party platform ('Integrated Service').</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Prohibited Conduct</h2>
            <p>Users must not engage in prohibited conduct including but not limited to: unauthorized use, spamming, harassment, fraudulent activity, or violation of any applicable laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Disclaimer of Warranties</h2>
            <p>THE GPSPL SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
            <p>GPSPL SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
            <p>The services are offered by Growwth Partners Pte. Ltd, Singapore</p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default TermsPage;
