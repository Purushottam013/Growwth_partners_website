
import { Layout } from "@/components/Layout";

const TermsPage = () => {
  return (
    <Layout>
      <div className="py-16 container-custom">
        <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="prose max-w-none">
          <p className="mb-4">Last updated: April 14, 2025</p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">1. Introduction</h2>
          <p>
            These terms and conditions outline the rules and regulations for the use of Growwth Partners' Website. By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Growwth Partners' website if you do not accept all of the terms and conditions stated on this page.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">2. License</h2>
          <p>
            Unless otherwise stated, Growwth Partners and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may view and/or print pages from the website for your own personal use subject to restrictions set in these terms and conditions.
          </p>
          <p>You must not:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Republish material from this website</li>
            <li>Sell, rent or sub-license material from this website</li>
            <li>Reproduce, duplicate or copy material from this website</li>
            <li>Redistribute content from this website, unless content is specifically made for redistribution</li>
          </ul>
          
          <h2 className="text-xl font-bold mt-8 mb-4">3. Disclaimer</h2>
          <p>
            To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website.
          </p>
          <p>Nothing in this disclaimer will:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Limit or exclude our or your liability for death or personal injury</li>
            <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>
            <li>Limit any of our or your liabilities in any way that is not permitted under applicable law</li>
            <li>Exclude any of our or your liabilities that may not be excluded under applicable law</li>
          </ul>
          
          <h2 className="text-xl font-bold mt-8 mb-4">4. Limitations and Exclusions</h2>
          <p>
            The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or in relation to the subject matter of this disclaimer, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty.
          </p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">5. Contact Information</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us:
          </p>
          <p>
            Email: jatin@growwthpartners.com<br />
            Phone: +65 8893 0720
          </p>
          
        </div>
      </div>
    </Layout>
  );
};

export default TermsPage;
