
import React from "react";
import { Layout } from "@/components/Layout";
import { FaqSection } from "@/components/accounting/FaqSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Book, FileText, Question, Lightbulb, BookOpen, PhoneCall } from "lucide-react";

const InvestorPitchGuidePage = () => {
  // First section of FAQs
  const investmentReadinessFaqs = [
    {
      question: "How do I know if my business is ready for investment?",
      answer: "You can look for indicators like quick growth opportunities, product development needs, plans to expand into new markets, financial strain, and the need to stay competitive."
    },
    {
      question: "What are the dangers of looking for investments outside?",
      answer: "Some risks include losing control, having ownership diluted, being under increased pressure to perform, and potential conflicts with investors."
    },
    {
      question: "Is it bad to seek investment too early?",
      answer: "Yes. You could give away too much equity by seeking investment in the early stages of your business and it may not be beneficial if your business model hasn't been fully validated yet."
    },
    {
      question: "What financial indicators should I consider before seeking investors?",
      answer: "Cash flow, profitability, market potential and current financial health are some examples of what you should consider."
    },
    {
      question: "How do I prepare my business for investment?",
      answer: "Make sure that all your financial records are up-to-date and accurate, create a strong business plan, and establish clear growth strategies."
    }
  ];

  // Second section of FAQs
  const investorTypesFaqs = [
    {
      question: "What is the difference between venture capitalists and angel investors?",
      answer: "Angel investors usually use their own money while venture capitalists invest pooled funds from many different sources."
    },
    {
      question: "What is equity crowdfunding?",
      answer: "Equity crowdfunding means raising small amounts of money from lots of people who each get a share in your company, usually through online platforms."
    },
    {
      question: "How do corporate investors differ from other types of investors?",
      answer: "Corporate investors are large companies that invest in startups because they want strategic benefits such as access to new technologies or business models."
    },
    {
      question: "What factors should I take into account when deciding between various investor types?",
      answer: "Think about things like how much money you need, how much control you're willing to give up, and the tactical advantages each investor can offer."
    },
    {
      question: "How can government grants and loans help my business?",
      answer: "Government grants and loans provide non-dilutive funding, which means you don't have to give away any equity. They can support various aspects of your business too."
    }
  ];

  // Third section of FAQs
  const findingInvestorsFaqs = [
    {
      question: "Where can I look to raise money for my new business?",
      answer: "Networking events, internet platforms, industry conferences, accelerator and incubator programmes are some of the ways you can find investors."
    },
    {
      question: "How should I make my first contact with an investor?",
      answer: "Do your homework on the investor, adjust your strategy to suit their needs, act professionally, and clearly state the value proposition of your company."
    },
    {
      question: "How challenging is it to get funding?",
      answer: "Getting funding is difficult and competitive. It calls for perseverance, a potent business plan, and a captivating pitch."
    },
    {
      question: "Is networking necessary to find investors?",
      answer: "Networking allows you to connect and socialise with potential investors, which could lead to getting strong recommendations. Establishing rapport and going for events related to your field opens up a lot of possibilities."
    },
    {
      question: "How can I increase my chances of getting investment?",
      answer: "Give all the necessary preparations enough time, rehearse your pitch before presenting it, have a deep understanding about your market and your business's financial statements, and create strong connections within this industry."
    }
  ];

  return (
    <Layout>
      <article className="container mx-auto px-4 py-8">
        {/* Section 1: Title and Key Takeaways */}
        <header className="max-w-full mx-auto mb-12">
          <div className="bg-gradient-to-r from-brand-orange/10 to-blue-50 p-8 rounded-lg shadow-sm">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 w-[95%] mx-auto text-center bg-clip-text text-transparent bg-gradient-to-r from-brand-orange to-blue-700 leading-tight">
              The Most Comprehensive Guide to Pitching to Investors
            </h1>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg mt-8">
            <h2 className="text-2xl font-semibold mb-8 text-center flex items-center justify-center gap-2">
              <Book className="h-6 w-6 text-brand-orange" />
              Key Takeaways
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="p-6 bg-white rounded shadow-sm flex flex-col items-center text-center h-full">
                <div className="mb-4 text-brand-orange">
                  <ArrowRight className="h-10 w-10" />
                </div>
                <h3 className="font-medium mb-4 text-xl">Business Needs</h3>
                <p className="text-base">Realise when and why a company will need outside funding to scale effectively.</p>
              </div>
              <div className="p-6 bg-white rounded shadow-sm flex flex-col items-center text-center h-full">
                <div className="mb-4 text-brand-orange">
                  <ArrowRight className="h-10 w-10" />
                </div>
                <h3 className="font-medium mb-4 text-xl">Different Investors</h3>
                <p className="text-base">Know the various kinds of investors and what they anticipate.</p>
              </div>
              <div className="p-6 bg-white rounded shadow-sm flex flex-col items-center text-center h-full">
                <div className="mb-4 text-brand-orange">
                  <ArrowRight className="h-10 w-10" />
                </div>
                <h3 className="font-medium mb-4 text-xl">Create an Engaging Pitch Deck</h3>
                <p className="text-base">Organise your pitch deck well so that it captures the attention of investors who want to see your business potential.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded shadow-sm flex flex-col items-center text-center h-full">
                <div className="mb-4 text-brand-orange">
                  <ArrowRight className="h-10 w-10" />
                </div>
                <h3 className="font-medium mb-4 text-xl">Perfect Your Elevator Pitch</h3>
                <p className="text-base">Create a concise, compelling elevator pitch that will leave a lasting impression on potential investors.</p>
              </div>
              <div className="p-6 bg-white rounded shadow-sm flex flex-col items-center text-center h-full">
                <div className="mb-4 text-brand-orange">
                  <ArrowRight className="h-10 w-10" />
                </div>
                <h3 className="font-medium mb-4 text-xl">Navigate Investor Networks</h3>
                <p className="text-base">Understanding where and how to find suitable investors can greatly increase the chances of securing required funds for growth.</p>
              </div>
            </div>
          </div>
        </header>

        {/* Section 2: Introduction */}
        <section className="max-w-4xl mx-auto my-12">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FileText className="h-6 w-6 text-brand-orange" />
            Introduction
          </h3>
          <div className="prose max-w-none">
            <p>Gaining funds from investors is often seen as one of the most important moments in any business. It is usually regarded as the end of being just another small company and the start of becoming an established business.</p>
            <p>However, pitching to investors and securing investments is a complex process that requires detailed preparation, strategic thinking and thoroughly knowing your business needs and potentials.</p>
            <p>This comprehensive guide provides everything you need to know about pitching to investors, including when is the right time to seek for investment, creating winning pitch decks or even finding right investors.</p>
          </div>
        </section>

        {/* Section 3: Pitching to Investors */}
        <section className="max-w-4xl mx-auto my-12">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FileText className="h-6 w-6 text-brand-orange" />
            Pitching to Investors
          </h3>
          <div className="prose max-w-none mb-6">
            <p>In order to obtain funding, you must pitch your business idea, growth strategies, and financial requirements to possible investors. Presenting your company's story in an engaging way, supported by reliable data and a distinct future vision, is the art of pitching.</p>
            <p>For newly established and expanding companies that require funding to grow, innovate, or maintain operations, this procedure is essential.</p>
            <p>Trust Growwth Partners to handle everything from pre-fundraising preparations to maintaining strong investor relationships.</p>
          </div>
          
          <img 
            src="/lovable-uploads/380e65fc-4d6d-4889-82de-b6091090e409.png" 
            alt="Signs Your Business Needs Investors" 
            className="w-full max-w-3xl mx-auto my-8 rounded-lg shadow-md"
          />
        </section>

        {/* Section 4: FAQs */}
        <section className="max-w-4xl mx-auto my-12">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Question className="h-6 w-6 text-brand-orange" />
            Frequently Asked Questions
          </h3>
          <FaqSection faqs={investmentReadinessFaqs} />
        </section>

        {/* Section 5: Kinds of Investors and Investments */}
        <section className="max-w-4xl mx-auto my-12">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FileText className="h-6 w-6 text-brand-orange" />
            Kinds of Investors and Investments
          </h3>
          <div className="prose max-w-none">
            <p>Investors are people or organisations that put their money into businesses with the aim of making profits later. Here are some types:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <Card className="shadow-sm">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold mb-2 text-brand-orange">Angel Investors</h4>
                  <p>These are often wealthy individuals who provide capital for startups in exchange for ownership equity. They may also offer mentorship services as well as industry connections with funding support.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold mb-2 text-brand-orange">Venture Capitalists (VCs)</h4>
                  <p>Venture capitalists are professional groups or companies that pool investments together from different sources before investing them into high-growth-potential startups. They take significant stakes in such firms while also occupying positions on their boards.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold mb-2 text-brand-orange">Crowdfunding</h4>
                  <p>This refers to raising small amounts of money from numerous people through online platforms, mostly in form of donations or product pre-orders. It's more suited for consumer-oriented products and can help build up the customer base too.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold mb-2 text-brand-orange">Corporate Investors</h4>
                  <p>Sometimes, large corporations invest in smaller ones so that they can acquire new technologies or business models. Such deals may involve substantial amounts of capital besides bringing about strategic advantages.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm md:col-span-2">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold mb-2 text-brand-orange">Government Grants and Loans</h4>
                  <p>Governments provide financial aid to startups and small businesses in many forms. They are not investors per se, but can represent an important source of non-dilutive capital.</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* FAQs for Investor Types section */}
          <div className="mt-8">
            <FaqSection faqs={investorTypesFaqs} />
          </div>
        </section>

        {/* Section 7: Step by Step Guide to Pitching to Investors */}
        <section className="max-w-4xl mx-auto my-12">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FileText className="h-6 w-6 text-brand-orange" />
            Step by Step Guide to Pitching to Investors
          </h3>
          <div className="prose max-w-none mb-6">
            <div className="grid gap-6 my-8">
              <Card className="shadow-sm">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold mb-2 text-brand-orange">STEP 1: Research Potential Investors</h4>
                  <p>Find out about previous investments made by individuals or companies who operate within your sector or have similar business models.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold mb-2 text-brand-orange">STEP 2: Prepare Your Pitch Deck</h4>
                  <p>Make a strong pitch deck that contains essential details about your company, the market it wants to penetrate, your product or service, your business model, your traction, your financial projections, and the money you need.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold mb-2 text-brand-orange">STEP 3: Craft Your Elevator Pitch</h4>
                  <p>This is a short speech that sums up what your company does and why it's valuable. It should be between 30-60 seconds long and grab people's attention.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold mb-2 text-brand-orange">STEP 4: Practise Your Pitch</h4>
                  <p>Rehearse your presentation until you can deliver it smoothly without pauses or hesitation. Get feedback from peers or mentors, if possible. Keep your pitch under 10 minutes to allow for questions and discussion afterwards.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold mb-2 text-brand-orange">STEP 5: Schedule Meetings with Investors</h4>
                  <p>Contact potential investors directly or through intermediaries to arrange one-on-one meetings where you can present your ideas face-to-face. Use networking events, conferences or online platforms to connect with potential investors who may be interested in what you're doing.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold mb-2 text-brand-orange">STEP 6: Deliver Your Pitch</h4>
                  <p>During the actual presentation, maintain eye contact; speak slowly but clearly, engage them by asking rhetorical questions, etc., Be prepared for tough questions – don't take them personally! Try to answer all inquiries as honestly as possible while showing confidence in yourself and your team's ability to execute the plan.</p>
                  <p>Some common mistakes include not being fully prepared, not knowing your numbers inside out, talking too much about product features instead of customer benefits, and failing to address risks associated with investing in your venture.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold mb-2 text-brand-orange">STEP 7: Follow Up</h4>
                  <p>Once you have made your pitch, it is necessary to send a follow-up email thanking all those who invested their time. Along with this gratitude, provide them with any other necessary information they might ask for. Be sure to keep in touch while informing them about what has been happening with regards to the project.</p>
                  <p>In case any investor loses interest, still thank them for their time but also request feedback on how best you can improve for next time when doing another pitch.</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <img 
            src="/lovable-uploads/c49abbab-0e5e-4281-963f-1de108532560.png" 
            alt="How to Make a Pitch Deck" 
            className="w-full max-w-3xl mx-auto my-8 rounded-lg shadow-md"
          />
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6 flex gap-2">
            <div className="flex-shrink-0 pt-1">
              <Lightbulb className="h-6 w-6 text-yellow-500" />
            </div>
            <div>
              <p className="font-semibold">Pro-tip:</p>
              <p>Attempt to understand the patterns of the investors' previous investments so that you can tailor your presentation to suit their preferences. Showing that you value their time and that they should take your proposal seriously will greatly increase its chances of being accepted.</p>
            </div>
          </div>
        </section>

        {/* Section 8: How to Make an Elevator Pitch */}
        <section className="max-w-4xl mx-auto my-12">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FileText className="h-6 w-6 text-brand-orange" />
            How to Make an Elevator Pitch
          </h3>
          <div className="prose max-w-none mb-6">
            <p>An elevator pitch is a concise, persuasive summary of your business. Below is a guide on how to create one:</p>
            
            <ol className="list-decimal space-y-4 pl-6 mt-4">
              <li>
                <strong>Start with a Hook</strong>
                <p>Start your elevator pitch with something that will hook the listener's interest. This could be a question, a surprising fact or a bold statement.</p>
              </li>
              <li>
                <strong>Explain Your Business</strong>
                <p>Clearly state what your business does, who it serves and the problem it solves for them. Avoid jargon and don't be too vague or give too much away.</p>
              </li>
              <li>
                <strong>Highlight Your Unique Selling Proposition (USP)</strong>
                <p>What sets your company apart from others? Identify this unique selling point in order to differentiate yourself from competitors.</p>
              </li>
              <li>
                <strong>Keep It Short</strong>
                <p>The entire elevator pitch should not exceed 1 minute; usually this is about as long as someone would spend talking with another person in an elevator. Practice delivering within that time frame.</p>
              </li>
              <li>
                <strong>End with a Call to Action</strong>
                <p>Do not leave the elevator pitch session open-ended. Finish by telling them what action they need to take next, such as scheduling a meeting, exchanging contact information, visiting your website.</p>
              </li>
            </ol>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6 flex gap-2">
            <div className="flex-shrink-0 pt-1">
              <Lightbulb className="h-6 w-6 text-yellow-500" />
            </div>
            <div>
              <p className="font-semibold">Pro-tip:</p>
              <p>Practice giving your elevator pitch in different real-time situations, such as networking events or chance encounters at informal meetings. The more natural and confident you appear through repetition, the stronger impression can be made on potential investors.</p>
            </div>
          </div>
        </section>

        {/* Section 9: Finding Investors: Where and How */}
        <section className="max-w-4xl mx-auto my-12">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FileText className="h-6 w-6 text-brand-orange" />
            Finding Investors: Where and How
          </h3>
          <div className="prose max-w-none">
            <h4 className="text-xl font-semibold mt-6 mb-4">Where to Find Investors</h4>
            <p>To locate suitable investors, use multiple channels like:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Networking Events:</strong> Attend industry conferences, startup events or networking meet-ups where you could potentially meet interested investors.</li>
              <li><strong>Online Resources:</strong> Utilise platforms such as LinkedIn or crowdfunding websites. These allow for easy identification and connection with people willing to put capital into ventures like yours.</li>
              <li><strong>Accelerators and Incubators Programs:</strong> Joining one of these programs provides access to funds as well as investor relations among other benefits.</li>
              <li><strong>Referrals:</strong> Reach out to mentors, advisors or other business owners within your existing network for referrals.</li>
            </ul>
            
            <h4 className="text-xl font-semibold mt-6 mb-4">How to Approach Investors</h4>
            <p>When approaching investors, follow these steps:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Investigate:</strong> Learn about the investor's investing preferences, portfolio, and history.</li>
              <li><strong>Customise:</strong> Make your strategy specific to every investor. Emphasise how your company's operations complement their investment goals and areas of interest.</li>
              <li><strong>Act with professionalism:</strong> Be sure to communicate in a professional manner at all times. Be succinct, precise, and considerate of their time.</li>
              <li><strong>Follow Up:</strong> To maintain the conversation after making the first contact, follow up. As needed, provide updates and more details.</li>
            </ul>
            
            <h4 className="text-xl font-semibold mt-6 mb-4">How Difficult Is It to Get Investments?</h4>
            <p>Securing investment is not easy; there's stiff competition for limited funds, so having a great business idea alone won't cut it. Building relationships with potential investors takes time, but can significantly improve chances of success.</p>
            <p>For expert financial management services, from accounting to capital acquisition, connect with Growwth Partners.</p>
          </div>
          
          {/* FAQs for Finding Investors section */}
          <div className="mt-8">
            <FaqSection faqs={findingInvestorsFaqs} />
          </div>
        </section>

        {/* Section 11: Summary */}
        <section className="max-w-4xl mx-auto my-12">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-brand-orange" />
            Summary
          </h3>
          <div className="prose max-w-none">
            <p>Being able to pitch to investors is essential for an entrepreneur who wants to grow his or her business. It's important to recognise when your business needs money, what kinds of investors and investments there are, as well as how best to go about making and giving a presentation, because it is these things which will increase your chances for getting funded.</p>
            <p>But another part of the process involves putting together a captivating pitch deck, perfecting an elevator speech, and understanding who you are talking with on this journey. Maintaining persistence and professionalism will be key, as securing investments is often a complex process.</p>
            <p>Growwth Partners offers a full range of fundraising services, such as customised funding plans, investor matching, professional valuation, flawless pitches, streamlined due diligence, and transparent financial statements. You can rely on Growwth Partners's team of financial experts to help you with every stage of the investing process, from planning ahead to upholding enduring relationships with investors.</p>
            <p>Putting important parts of your investment-seeking journey in the hands of professionals can greatly increase your chances of success!</p>
          </div>
        </section>

        {/* Section 12: Call to Action */}
        <section className="max-w-4xl mx-auto my-12 bg-gradient-to-r from-brand-orange/20 to-brand-orange/5 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
            <PhoneCall className="h-6 w-6 text-brand-orange" />
            Book a free call with our expert to discuss your bookkeeping needs and save time and effort.
          </h3>
          <p className="mb-6 text-lg">We are here to help you!</p>
          <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange/80">
            <Link to="/contact">Book a free call</Link>
          </Button>
        </section>
      </article>
    </Layout>
  );
};

export default InvestorPitchGuidePage;
