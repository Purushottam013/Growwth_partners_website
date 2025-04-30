
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { PhoneCall, BookOpen, TrendingUp, Users, FileText, Lightbulb, Globe } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "@/components/contact/ContactForm";
import { Guide } from "@/data/guides";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
interface GuideDetailProps {
  guide: Guide;
  keyTakeawayImages: string[];
}
const GuideDetail = ({
  guide,
  keyTakeawayImages
}: GuideDetailProps) => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Layout>
      <article className="py-12 font-['Montserrat']">
        <div className="container mx-auto px-4 max-w-4xl bg-green">
          {/* Guide Header */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-['Poppins'] font-bold mb-6 py-4 px-6 rounded-lg bg-gradient-to-r from-amber-200 to-amber-400 inline-block shadow-lg">
              {guide.Title}
            </h1>
          </div>

          {/* Section 1: Key Takeaways */}
          <section className="mb-16 mx-auto w-[90%]">
            <div className="flex items-center justify-center mb-8">
              <BookOpen className="mr-3 h-7 w-7 text-brand-orange" />
              <h2 className="text-2xl md:text-3xl font-['Poppins'] font-bold text-gray-800">Key Takeaways</h2>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-8 shadow-lg">
              {/* First row with 3 images */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* Item 1 */}
                <div className="flex flex-col items-center">
                  <div className="mb-4 overflow-hidden rounded-lg shadow-lg h-48 w-full flex items-center justify-center bg-white p-6">
                    <img src={keyTakeawayImages[0]} alt="Business Needs" className="object-contain max-h-full max-w-full transition-transform duration-300 hover:scale-105" />
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <TrendingUp className="h-6 w-6 text-brand-orange mr-2 flex-shrink-0" />
                      <h3 className="text-xl font-['Poppins'] font-semibold">Business Needs</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Realise when and why a company will need outside funding to scale effectively.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center">
                  <div className="mb-4 overflow-hidden rounded-lg shadow-lg h-48 w-full flex items-center justify-center bg-white p-6">
                    <img src={keyTakeawayImages[1]} alt="Different Investors" className="object-contain max-h-full max-w-full transition-transform duration-300 hover:scale-105" />
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="h-6 w-6 text-brand-orange mr-2 flex-shrink-0" />
                      <h3 className="text-xl font-['Poppins'] font-semibold">Different Investors</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Know the various kinds of investors and what they anticipate.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center">
                  <div className="mb-4 overflow-hidden rounded-lg shadow-lg h-48 w-full flex items-center justify-center bg-white p-6">
                    <img src={keyTakeawayImages[2]} alt="Create an Engaging Pitch Deck" className="object-contain max-h-full max-w-full transition-transform duration-300 hover:scale-105" />
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <FileText className="h-6 w-6 text-brand-orange mr-2 flex-shrink-0" />
                      <h3 className="text-xl font-['Poppins'] font-semibold">Create an Engaging Pitch Deck</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Organise your pitch deck well so that it captures the attention of investors who want to see your business potential.
                    </p>
                  </div>
                </div>
              </div>

              {/* Second row with 2 images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-3xl md:mx-auto">
                {/* Item 4 */}
                <div className="flex flex-col items-center">
                  <div className="mb-4 overflow-hidden rounded-lg shadow-lg h-48 w-full flex items-center justify-center bg-white p-6">
                    <img src={keyTakeawayImages[3]} alt="Perfect Your Elevator Pitch" className="object-contain max-h-full max-w-full transition-transform duration-300 hover:scale-105" />
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Lightbulb className="h-6 w-6 text-brand-orange mr-2 flex-shrink-0" />
                      <h3 className="text-xl font-['Poppins'] font-semibold">Perfect Your Elevator Pitch</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Create a concise, compelling elevator pitch that will leave a lasting impression on potential investors.
                    </p>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="flex flex-col items-center">
                  <div className="mb-4 overflow-hidden rounded-lg shadow-lg h-48 w-full flex items-center justify-center bg-white p-6">
                    <img src={keyTakeawayImages[4]} alt="Navigate Investor Networks" className="object-contain max-h-full max-w-full transition-transform duration-300 hover:scale-105" />
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Globe className="h-6 w-6 text-brand-orange mr-2 flex-shrink-0" />
                      <h3 className="text-xl font-['Poppins'] font-semibold">Navigate Investor Networks</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Understanding where and how to find suitable investors can greatly increase the chances of securing required funds for growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Introduction */}
          <section className="mb-16">
            <h3 className="text-2xl md:text-3xl font-['Poppins'] font-bold mb-6 text-center text-gray-800">Introduction</h3>
            <div className="prose max-w-none">
              <p className="mb-6 text-center text-lg leading-relaxed text-gray-700 font-['Montserrat']">
                Gaining funds from investors is often seen as one of the most important moments in any business. 
                It is usually regarded as the end of being just another small company and the start of becoming an established business.
              </p>
              <p className="text-center text-lg leading-relaxed text-gray-700 font-['Montserrat']">
                However, pitching to investors and securing investments is a complex process that requires detailed preparation, 
                strategic thinking and thoroughly knowing your business needs and potentials. This comprehensive guide provides 
                everything you need to know about pitching to investors, including when is the right time to seek for investment, 
                creating winning pitch decks or even finding right investors.
              </p>
            </div>
          </section>

          {/* Section 3: Pitching to Investors */}
          <section className="mb-16">
            <h3 className="text-2xl md:text-3xl font-['Poppins'] font-bold mb-6 text-center text-gray-800">Pitching to Investors</h3>
            <div className="grid grid-cols-1 items-center mb-8">
              <div className="prose max-w-none mb-8 text-center">
                <p className="mb-6 text-lg leading-relaxed text-gray-700 font-['Montserrat']">
                  In order to obtain funding, you must pitch your business idea, growth strategies, and financial requirements 
                  to possible investors. Presenting your company's story in an engaging way, supported by reliable data and a 
                  distinct future vision, is the art of pitching.
                </p>
                <p className="mb-6 text-lg leading-relaxed text-gray-700 font-['Montserrat']">
                  For newly established and expanding companies that require funding to grow, innovate, or maintain operations, 
                  this procedure is essential.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 font-['Montserrat']">
                  Trust Growwth Partners to handle everything from pre-fundraising preparations to maintaining strong investor relationships.
                </p>
              </div>
              <div>
                <img src="/lovable-uploads/753ca010-8990-4e45-a02a-523a4c61a109.png" alt="Signs Your Business Needs Investors" className="rounded-lg shadow-md w-full max-w-2xl mx-auto hover:shadow-lg transition-shadow duration-300" />
              </div>
            </div>
          </section>

          {/* Section 4: FAQ 1 */}
          <section className="mb-16">
            <h3 className="text-2xl md:text-3xl font-['Poppins'] font-bold mb-6 text-center text-gray-800">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="faq-1" className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <AccordionTrigger className="group px-6 py-4 flex justify-between items-center hover:no-underline">
                  <span className="text-lg font-medium text-gray-800 font-['Poppins']">How do I know if my business is ready for investment?</span>
                  <div className="flex-shrink-0">
                    <Plus className="h-6 w-6 text-brand-orange group-data-[state=open]:hidden transition-transform" />
                    <Minus className="h-6 w-6 text-brand-orange hidden group-data-[state=open]:block transition-transform" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 bg-gray-50 text-gray-700 font-['Montserrat'] leading-relaxed">
                  <p>You can look for indicators like quick growth opportunities, product development needs, plans to expand into new markets, financial strain, and the need to stay competitive.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-2" className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <AccordionTrigger className="group px-6 py-4 flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-800">What are the dangers of looking for investments outside?</span>
                  <div className="flex-shrink-0">
                    <Plus className="h-6 w-6 text-brand-orange group-data-[state=open]:hidden transition-transform" />
                    <Minus className="h-6 w-6 text-brand-orange hidden group-data-[state=open]:block transition-transform" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 bg-gray-50">
                  <p>Some risks include losing control, having ownership diluted, being under increased pressure to perform, and potential conflicts with investors.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-3" className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <AccordionTrigger className="group px-6 py-4 flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-800">Is it bad to seek investment too early?</span>
                  <div className="flex-shrink-0">
                    <Plus className="h-6 w-6 text-brand-orange group-data-[state=open]:hidden transition-transform" />
                    <Minus className="h-6 w-6 text-brand-orange hidden group-data-[state=open]:block transition-transform" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 bg-gray-50">
                  <p>Yes. You could give away too much equity by seeking investment in the early stages of your business and it may not be beneficial if your business model hasn't been fully validated yet.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-4" className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <AccordionTrigger className="group px-6 py-4 flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-800">What financial indicators should I consider before seeking investors?</span>
                  <div className="flex-shrink-0">
                    <Plus className="h-6 w-6 text-brand-orange group-data-[state=open]:hidden transition-transform" />
                    <Minus className="h-6 w-6 text-brand-orange hidden group-data-[state=open]:block transition-transform" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 bg-gray-50">
                  <p>Cash flow, profitability, market potential and current financial health are some examples of what you should consider.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-5" className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <AccordionTrigger className="group px-6 py-4 flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-800">How do I prepare my business for investment?</span>
                  <div className="flex-shrink-0">
                    <Plus className="h-6 w-6 text-brand-orange group-data-[state=open]:hidden transition-transform" />
                    <Minus className="h-6 w-6 text-brand-orange hidden group-data-[state=open]:block transition-transform" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 bg-gray-50">
                  <p>Make sure that all your financial records are up-to-date and accurate, create a strong business plan, and establish clear growth strategies.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Section 5: Kinds of Investors and Investments */}
          <section className="mb-16">
            <h3 className="text-2xl md:text-3xl font-['Poppins'] font-bold mb-6 text-center text-gray-800">Kinds of Investors and Investments</h3>
            <div className="prose max-w-none text-center mb-8">
              <p className="mb-6 text-lg leading-relaxed text-gray-700 font-['Montserrat']">
                Investors are people or organisations that put their money into businesses with the aim of making profits later. Here are some types:
              </p>
            </div>
              
            <div className="prose max-w-none space-y-8">  
              <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-brand-orange">
                <h4 className="text-xl font-['Poppins'] font-semibold mb-3 text-gray-800">Angel Investors</h4>
                <p className="text-gray-700 leading-relaxed font-['Montserrat']">
                  These are often wealthy individuals who provide capital for startups in exchange for ownership equity. 
                  They may also offer mentorship services as well as industry connections with funding support.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-brand-orange">
                <h4 className="text-xl font-['Poppins'] font-semibold mb-3 text-gray-800">Venture Capitalists (VCs)</h4>
                <p className="text-gray-700 leading-relaxed font-['Montserrat']">
                  Venture capitalists are professional groups or companies that pool investments together from different sources before 
                  investing them into high-growth-potential startups. They take significant stakes in such firms while also occupying positions on their boards.
                </p>
              </div>
              
              <h4 className="text-xl font-['Poppins'] font-semibold mb-4">Crowdfunding</h4>
              <p className="mb-6">
                This refers to raising small amounts of money from numerous people through online platforms, mostly in form of donations or product pre-orders. 
                It's more suited for consumer-oriented products and can help build up the customer base too.
              </p>
              
              <h4 className="text-xl font-['Poppins'] font-semibold mb-4">Corporate Investors</h4>
              <p className="mb-6">
                Sometimes, large corporations invest in smaller ones so that they can acquire new technologies or business models. 
                Such deals may involve substantial amounts of capital besides bringing about strategic advantages.
              </p>
              
              <h4 className="text-xl font-['Poppins'] font-semibold mb-4">Government Grants and Loans</h4>
              <p>
                Governments provide financial aid to startups and small businesses in many forms. 
                They are not investors per se, but can represent an important source of non-dilutive capital.
              </p>
            </div>
          </section>

          {/* Section 6: FAQ 2 */}
          <section className="mb-16">
            <h3 className="text-2xl md:text-3xl font-['Poppins'] font-bold mb-6 text-center text-gray-800">More Questions About Investors</h3>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="faq-6" className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <AccordionTrigger className="group px-6 py-4 flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-800">What is the difference between venture capitalists and angel investors?</span>
                  <div className="flex-shrink-0">
                    <Plus className="h-6 w-6 text-brand-orange group-data-[state=open]:hidden transition-transform" />
                    <Minus className="h-6 w-6 text-brand-orange hidden group-data-[state=open]:block transition-transform" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 bg-gray-50">
                  <p>Angel investors usually use their own money while venture capitalists invest pooled funds from many different sources.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-7" className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <AccordionTrigger className="group px-6 py-4 flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-800">What is equity crowdfunding?</span>
                  <div className="flex-shrink-0">
                    <Plus className="h-6 w-6 text-brand-orange group-data-[state=open]:hidden transition-transform" />
                    <Minus className="h-6 w-6 text-brand-orange hidden group-data-[state=open]:block transition-transform" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 bg-gray-50">
                  <p>Equity crowdfunding means raising small amounts of money from lots of people who each get a share in your company, usually through online platforms.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-8" className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <AccordionTrigger className="group px-6 py-4 flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-800">How do corporate investors differ from other types of investors?</span>
                  <div className="flex-shrink-0">
                    <Plus className="h-6 w-6 text-brand-orange group-data-[state=open]:hidden transition-transform" />
                    <Minus className="h-6 w-6 text-brand-orange hidden group-data-[state=open]:block transition-transform" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 bg-gray-50">
                  <p>Corporate investors are large companies that invest in startups because they want strategic benefits such as access to new technologies or business models.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-9" className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <AccordionTrigger className="group px-6 py-4 flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-800">What factors should I take into account when deciding between various investor types?</span>
                  <div className="flex-shrink-0">
                    <Plus className="h-6 w-6 text-brand-orange group-data-[state=open]:hidden transition-transform" />
                    <Minus className="h-6 w-6 text-brand-orange hidden group-data-[state=open]:block transition-transform" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 bg-gray-50">
                  <p>Think about things like how much money you need, how much control you're willing to give up, and the tactical advantages each investor can offer.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-10" className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <AccordionTrigger className="group px-6 py-4 flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-800">How can government grants and loans help my business?</span>
                  <div className="flex-shrink-0">
                    <Plus className="h-6 w-6 text-brand-orange group-data-[state=open]:hidden transition-transform" />
                    <Minus className="h-6 w-6 text-brand-orange hidden group-data-[state=open]:block transition-transform" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 bg-gray-50">
                  <p>Government grants and loans provide non-dilutive funding, which means you don't have to give away any equity. They can support various aspects of your business too.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Section 7: Step by Step Guide */}
          <section className="mb-16">
            <h3 className="text-2xl md:text-3xl font-['Poppins'] font-bold mb-6 text-center text-gray-800">Step by Step Guide to Pitching to Investors</h3>
            <div className="grid grid-cols-1 items-center mb-8">
              <div>
                <img src="/lovable-uploads/da2a31da-9077-4593-8489-06aea79fe594.png" alt="How to Make a Pitch Deck" className="rounded-lg shadow-md w-full mx-auto mb-8" />
              </div>
              <div className="prose max-w-none">
                <h4 className="text-xl font-semibold mb-4">STEP 1: Research Potential Investors</h4>
                <p className="mb-4">Find out about previous investments made by individuals or companies who operate within your sector or have similar business models.</p>
                
                <h4 className="text-xl font-semibold mb-4">STEP 2: Prepare Your Pitch Deck</h4>
                <p className="mb-4">Make a strong pitch deck that contains essential details about your company, the market it wants to penetrate, your product or service, your business model, your traction, your financial projections, and the money you need.</p>
                
                <h4 className="text-xl font-semibold mb-4">STEP 3: Craft Your Elevator Pitch</h4>
                <p className="mb-4">This is a short speech that sums up what your company does and why it's valuable. It should be between 30-60 seconds long and grab people's attention.</p>
                
                <h4 className="text-xl font-semibold mb-4">STEP 4: Practise Your Pitch</h4>
                <p className="mb-4">Rehearse your presentation until you can deliver it smoothly without pauses or hesitation. Get feedback from peers or mentors, if possible. Keep your pitch under 10 minutes to allow for questions and discussion afterwards.</p>
              </div>
            </div>

            <div className="prose max-w-none">
              <h4 className="text-xl font-semibold mb-4">STEP 5: Schedule Meetings with Investors</h4>
              <p className="mb-4">Contact potential investors directly or through intermediaries to arrange one-on-one meetings where you can present your ideas face-to-face. Use networking events, conferences or online platforms to connect with potential investors who may be interested in what you're doing.</p>
              
              <h4 className="text-xl font-semibold mb-4">STEP 6: Deliver Your Pitch</h4>
              <p className="mb-4">During the actual presentation, maintain eye contact; speak slowly but clearly, engage them by asking rhetorical questions, etc., Be prepared for tough questions – don't take them personally! Try to answer all inquiries as honestly as possible while showing confidence in yourself and your team's ability to execute the plan. Some common mistakes include not being fully prepared, not knowing your numbers inside out, talking too much about product features instead of customer benefits, and failing to address risks associated with investing in your venture.</p>
              
              <h4 className="text-xl font-semibold mb-4">STEP 7: Follow Up</h4>
              <p>Once you have made your pitch, it is necessary to send a follow-up email thanking all those who invested their time. Along with this gratitude, provide them with any other necessary information they might ask for. Be sure to keep in touch while informing them about what has been happening with regards to the project. In case any investor loses interest, still thank them for their time but also request feedback on how best you can improve for next time when doing another pitch.</p>
            </div>

            <div className="bg-brand-orange/10 p-6 rounded-lg mt-8">
              <p className="font-medium text-brand-orange">Pro-tip:</p>
              <p>Attempt to understand the patterns of the investors' previous investments so that you can tailor your presentation to suit their preferences. Showing that you value their time and that they should take your proposal seriously will greatly increase its chances of being accepted.</p>
            </div>
          </section>

          {/* Section 8: How to Make an Elevator Pitch */}
          <section className="mb-16">
            <h3 className="text-2xl md:text-3xl font-['Poppins'] font-bold mb-6 text-center text-gray-800">How to Make an Elevator Pitch</h3>
            <div className="prose max-w-none">
              <p className="mb-6 text-center">An elevator pitch is a concise, persuasive summary of your business. Below is a guide on how to create one:</p>
              
              <h4 className="text-xl font-semibold mb-4">1. Start with a Hook</h4>
              <p className="mb-4">Start your elevator pitch with something that will hook the listener's interest. This could be a question, a surprising fact or a bold statement.</p>
              
              <h4 className="text-xl font-semibold mb-4">2. Explain Your Business</h4>
              <p className="mb-4">Clearly state what your business does, who it serves and the problem it solves for them. Avoid jargon and don't be too vague or give too much away.</p>
              
              <h4 className="text-xl font-semibold mb-4">3. Highlight Your Unique Selling Proposition (USP)</h4>
              <p className="mb-4">What sets your company apart from others? Identify this unique selling point in order to differentiate yourself from competitors.</p>
              
              <h4 className="text-xl font-semibold mb-4">4. Keep It Short</h4>
              <p className="mb-4">The entire elevator pitch should not exceed 1 minute; usually this is about as long as someone would spend talking with another person in an elevator. Practice delivering within that time frame.</p>
              
              <h4 className="text-xl font-semibold mb-4">5. End with a Call to Action</h4>
              <p>Do not leave the elevator pitch session open-ended. Finish by telling them what action they need to take next, such as scheduling a meeting, exchanging contact information, visiting your website.</p>
            </div>

            <div className="bg-brand-orange/10 p-6 rounded-lg mt-8">
              <p className="font-medium text-brand-orange">Pro-tip:</p>
              <p>Practice giving your elevator pitch in different real-time situations, such as networking events or chance encounters at informal meetings. The more natural and confident you appear through repetition, the stronger impression can be made on potential investors.</p>
            </div>
          </section>

          {/* Section 9: Finding Investors */}
          <section className="mb-16">
            <h3 className="text-2xl md:text-3xl font-['Poppins'] font-bold mb-6 text-center text-gray-800">Finding Investors: Where and How</h3>
            <div className="prose max-w-none">
              <h4 className="text-xl font-semibold mb-4">Where to Find Investors</h4>
              <p className="mb-4">To locate suitable investors, use multiple channels like:</p>
              <ul className="mb-6">
                <li><strong>Networking Events:</strong> Attend industry conferences, startup events or networking meet-ups where you could potentially meet interested investors.</li>
                <li><strong>Online Resources:</strong> Utilise platforms such as LinkedIn or crowdfunding websites. These allow for easy identification and connection with people willing to put capital into ventures like yours.</li>
                <li><strong>Accelerators and Incubator Programs:</strong> Joining one of these programs provides access to funds as well as investor relations among other benefits.</li>
                <li><strong>Referrals:</strong> Reach out to mentors, advisors or other business owners within your existing network for referrals.</li>
              </ul>
              
              <h4 className="text-xl font-semibold mb-4">How to Approach Investors</h4>
              <p className="mb-4">When approaching investors, follow these steps:</p>
              <ul className="mb-6">
                <li><strong>Investigate:</strong> Learn about the investor's investing preferences, portfolio, and history.</li>
                <li><strong>Customise:</strong> Make your strategy specific to every investor. Emphasise how your company's operations complement their investment goals and areas of interest.</li>
                <li><strong>Act with professionalism:</strong> Be sure to communicate in a professional manner at all times. Be succinct, precise, and considerate of their time.</li>
                <li><strong>Follow Up:</strong> To maintain the conversation after making the first contact, follow up. As needed, provide updates and more details.</li>
              </ul>
              
              <h4 className="text-xl font-semibold mb-4">How Difficult Is It to Get Investments?</h4>
              <p className="mb-6">Securing investment is not easy; there's stiff competition for limited funds, so having a great business idea alone won't cut it. Building relationships with potential investors takes time, but can significantly improve chances of success.</p>
              
              <p>For expert financial management services, from accounting to capital acquisition, connect with Growwth Partners.</p>
            </div>
          </section>

          {/* Section 10: FAQ 3 */}
          <section className="mb-16">
            <h3 className="text-2xl md:text-3xl font-['Poppins'] font-bold mb-6 text-center text-gray-800">Finding Investors: Common Questions</h3>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="faq-11" className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <AccordionTrigger className="group px-6 py-4 flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-800">Where can I look to raise money for my new business?</span>
                  <div className="flex-shrink-0">
                    <Plus className="h-6 w-6 text-brand-orange group-data-[state=open]:hidden transition-transform" />
                    <Minus className="h-6 w-6 text-brand-orange hidden group-data-[state=open]:block transition-transform" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 bg-gray-50">
                  <p>Networking events, internet platforms, industry conferences, accelerator and incubator programmes are some of the ways you can find investors.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-12" className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <AccordionTrigger className="group px-6 py-4 flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-800">How should I make my first contact with an investor?</span>
                  <div className="flex-shrink-0">
                    <Plus className="h-6 w-6 text-brand-orange group-data-[state=open]:hidden transition-transform" />
                    <Minus className="h-6 w-6 text-brand-orange hidden group-data-[state=open]:block transition-transform" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 bg-gray-50">
                  <p>Do your homework on the investor, adjust your strategy to suit their needs, act professionally, and clearly state the value proposition of your company.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-13" className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <AccordionTrigger className="group px-6 py-4 flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-800">How challenging is it to get funding?</span>
                  <div className="flex-shrink-0">
                    <Plus className="h-6 w-6 text-brand-orange group-data-[state=open]:hidden transition-transform" />
                    <Minus className="h-6 w-6 text-brand-orange hidden group-data-[state=open]:block transition-transform" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 bg-gray-50">
                  <p>Getting funding is difficult and competitive. It calls for perseverance, a potent business plan, and a captivating pitch.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-14" className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <AccordionTrigger className="group px-6 py-4 flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-800">Is networking necessary to find investors?</span>
                  <div className="flex-shrink-0">
                    <Plus className="h-6 w-6 text-brand-orange group-data-[state=open]:hidden transition-transform" />
                    <Minus className="h-6 w-6 text-brand-orange hidden group-data-[state=open]:block transition-transform" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 bg-gray-50">
                  <p>Networking allows you to connect and socialise with potential investors, which could lead to getting strong recommendations. Establishing rapport and going for events related to your field opens up a lot of possibilities.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-15" className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <AccordionTrigger className="group px-6 py-4 flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-800">How can I increase my chances of getting investment?</span>
                  <div className="flex-shrink-0">
                    <Plus className="h-6 w-6 text-brand-orange group-data-[state=open]:hidden transition-transform" />
                    <Minus className="h-6 w-6 text-brand-orange hidden group-data-[state=open]:block transition-transform" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 bg-gray-50">
                  <p>Give all the necessary preparations enough time, rehearse your pitch before presenting it, have a deep understanding about your market and your business's financial statements, and create strong connections within this industry.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Section 11: Summary */}
          <section className="mb-16">
            <h3 className="text-2xl md:text-3xl font-['Poppins'] font-bold mb-6 text-center text-gray-800">Summary</h3>
            <div className="prose max-w-none">
              <p className="mb-4 text-center text-lg leading-relaxed text-gray-700 font-['Montserrat']">
                Being able to pitch to investors is essential for an entrepreneur who wants to grow his or her business. 
                It's important to recognise when your business needs money, what kinds of investors and investments there are, 
                as well as how best to go about making and giving a presentation, because it is these things which will increase your chances for getting funded.
              </p>
              <p className="mb-4 text-center text-lg leading-relaxed text-gray-700 font-['Montserrat']">
                But another part of the process involves putting together a captivating pitch deck, perfecting an elevator speech, 
                and understanding who you are talking with on this journey. Maintaining persistence and professionalism will be key, 
                as securing investments is often a complex process.
              </p>
              <p className="mb-4 text-center text-lg leading-relaxed text-gray-700 font-['Montserrat']">
                Growwth Partners offers a full range of fundraising services, such as customised funding plans, investor matching, 
                professional valuation, flawless pitches, streamlined due diligence, and transparent financial statements. 
                You can rely on Growwth Partners's team of financial experts to help you with every stage of the investing process, 
                from planning ahead to upholding enduring relationships with investors.
              </p>
              <p className="text-center text-lg leading-relaxed text-gray-700 font-['Montserrat']">
                Putting important parts of your investment-seeking journey in the hands of professionals can greatly increase your chances of success!
              </p>
            </div>
          </section>

          {/* Section 12: Call To Action */}
          <section className="mb-16 bg-gradient-to-br from-brand-orange/90 to-brand-orange py-[40px] px-8 rounded-2xl text-white shadow-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-['Poppins'] font-bold mb-6">Ready to Take the Next Step?</h3>
              <p className="text-xl mb-8 font-['Montserrat']">
                Book a free call with our expert to discuss your bookkeeping needs and save time and effort.
                We are here to help you!
              </p>
              <Button onClick={() => setContactModalOpen(true)} className="bg-white text-brand-orange hover:bg-gray-100 px-8 py-6 text-lg font-bold rounded-full transform transition hover:scale-105 shadow-md">
                <PhoneCall className="mr-2 h-5 w-5" />
                Book a Free Call
              </Button>
            </div>
          </section>
        </div>
      </article>

      <Dialog open={contactModalOpen} onOpenChange={setContactModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center font-['Poppins']">Speak To An Expert</DialogTitle>
            <DialogDescription className="text-center font-['Montserrat']">
              Every Business Is Unique. Let Us Tailor A Plan For You! Fill In Your Details And An Expert Will Touch Base With You
            </DialogDescription>
          </DialogHeader>
          <ContactForm />
        </DialogContent>
      </Dialog>
    </Layout>;
};
export default GuideDetail;
