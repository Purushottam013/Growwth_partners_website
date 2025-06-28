
import { Layout } from "@/components/Layout";
import { useCountry } from "@/contexts/CountryContext";
import SEOhelper from "@/components/SEOhelper";

const PrivacyPolicyPage = () => {
  const { country } = useCountry();
  
  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy | Growwth Partners",
    description: "Read the privacy policy for Growwth Partners to see how we collect, use, and protect your data when you visit our website.",
    url: "https://growwthpartners.com//privacy-policy",
    publisher: {
      "@type": "Organization",
      name: "Growwth Partners",
      url: "https://growwthpartners.com"
    },
    about: {
      "@type": "Thing",
      name: "Privacy Policy"
    },
    dateModified: "2025-04-26"
  };
  
  return (
    <Layout>
      <SEOhelper
        title="Privacy Policy | Growwth Partners"
        description="Read the privacy policy for Growwth Partners to see how we collect, use, and protect your data when you visit our website."
        keywords="privacy policy, data protection, user privacy, growwth partners"
        canonicalUrl="https://growwthpartners.com//privacy-policy"
        structuredData={privacySchema}
      />
      <div className="py-16 container-custom">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none space-y-8">
          <p className="text-gray-600">Last updated: April 26, 2025</p>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p>Our website address is: https://growwthpartners.com.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            <p>When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor's IP address and browser user agent string to help spam detection.</p>
            <p>An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available at automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Media</h2>
            <p>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Cookies</h2>
            <div className="space-y-4">
              <p>If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>
              <p>If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p>
              <p>When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select "Remember Me", your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</p>
              <p>If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Embedded Content from Other Websites</h2>
            <div className="space-y-4">
              <p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>
              <p>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Who We Share Your Data With</h2>
            <p>If you request a password reset, your IP address will be included in the reset email.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">How Long We Retain Your Data</h2>
            <div className="space-y-4">
              <p>If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.</p>
              <p>For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">What Rights You Have Over Your Data</h2>
            <p>If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Where Your Data is Sent</h2>
            <p>Visitor comments may be checked through an automated spam detection service.</p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;
