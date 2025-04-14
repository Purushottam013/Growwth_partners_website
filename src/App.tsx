
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";

// Pages
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import AccountingPage from "./pages/Accounting";
import BookkeepingPage from "./pages/Bookkeeping";
import PayrollPage from "./pages/Payroll";
import TaxationPage from "./pages/Taxation";
import FractionalCFOPage from "./pages/FractionalCFO";
import CashFlowPage from "./pages/CashFlow";
import ContactPage from "./pages/Contact";
import BlogPage from "./pages/Blog";
import SuccessStoriesPage from "./pages/SuccessStories";
import GuidePage from "./pages/Guide";
import AchievementsPage from "./pages/Achievements";
import NewsPage from "./pages/News";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import TermsPage from "./pages/Terms";
import CorporateSecretaryPage from "./pages/CorporateSecretary";
import CompanyIncorporationPage from "./pages/CompanyIncorporation";
import NotFound from "./pages/NotFound";

// Context provider for country selection
import { CountryProvider } from "./contexts/CountryContext";

const queryClient = new QueryClient();

// External redirect component
const SingaporeRedirect = () => {
  useEffect(() => {
    window.location.href = "https://growwthpartners.com/";
  }, []);
  
  return <div className="min-h-screen flex items-center justify-center">Redirecting to Growwth Partners Singapore...</div>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <CountryProvider>
          <Toaster />
          <Sonner />
          <Routes>
            {/* Singapore routes - redirect to external site */}
            <Route path="/" element={<SingaporeRedirect />} />
            <Route path="/about" element={<SingaporeRedirect />} />
            <Route path="/accounting" element={<SingaporeRedirect />} />
            <Route path="/bookkeeping" element={<SingaporeRedirect />} />
            <Route path="/payroll" element={<SingaporeRedirect />} />
            <Route path="/taxation" element={<SingaporeRedirect />} />
            <Route path="/fractional-cfo" element={<SingaporeRedirect />} />
            <Route path="/cash-flow" element={<SingaporeRedirect />} />
            <Route path="/contact" element={<SingaporeRedirect />} />
            <Route path="/blog" element={<SingaporeRedirect />} />
            <Route path="/success-stories" element={<SingaporeRedirect />} />
            <Route path="/guide" element={<SingaporeRedirect />} />
            <Route path="/achievements" element={<SingaporeRedirect />} />
            <Route path="/news" element={<SingaporeRedirect />} />
            <Route path="/privacy-policy" element={<SingaporeRedirect />} />
            <Route path="/terms" element={<SingaporeRedirect />} />
            <Route path="/corporate-secretary" element={<SingaporeRedirect />} />
            <Route path="/company-incorporation" element={<SingaporeRedirect />} />
            
            {/* UAE routes */}
            <Route path="/uae" element={<HomePage />} />
            <Route path="/uae/about" element={<AboutPage />} />
            <Route path="/uae/accounting" element={<AccountingPage />} />
            <Route path="/uae/bookkeeping" element={<BookkeepingPage />} />
            <Route path="/uae/payroll" element={<PayrollPage />} />
            <Route path="/uae/taxation" element={<TaxationPage />} />
            <Route path="/uae/fractional-cfo" element={<FractionalCFOPage />} />
            <Route path="/uae/cash-flow" element={<CashFlowPage />} />
            <Route path="/uae/contact" element={<ContactPage />} />
            <Route path="/uae/blog" element={<BlogPage />} />
            <Route path="/uae/success-stories" element={<SuccessStoriesPage />} />
            <Route path="/uae/guide" element={<GuidePage />} />
            <Route path="/uae/achievements" element={<AchievementsPage />} />
            <Route path="/uae/news" element={<NewsPage />} />
            <Route path="/uae/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/uae/terms" element={<TermsPage />} />
            <Route path="/uae/corporate-secretary" element={<CorporateSecretaryPage />} />
            <Route path="/uae/company-incorporation" element={<CompanyIncorporationPage />} />
            
            {/* Australia routes */}
            <Route path="/australia" element={<HomePage />} />
            <Route path="/australia/about" element={<AboutPage />} />
            <Route path="/australia/accounting" element={<AccountingPage />} />
            <Route path="/australia/bookkeeping" element={<BookkeepingPage />} />
            <Route path="/australia/payroll" element={<PayrollPage />} />
            <Route path="/australia/taxation" element={<TaxationPage />} />
            <Route path="/australia/fractional-cfo" element={<FractionalCFOPage />} />
            <Route path="/australia/cash-flow" element={<CashFlowPage />} />
            <Route path="/australia/contact" element={<ContactPage />} />
            <Route path="/australia/blog" element={<BlogPage />} />
            <Route path="/australia/success-stories" element={<SuccessStoriesPage />} />
            <Route path="/australia/guide" element={<GuidePage />} />
            <Route path="/australia/achievements" element={<AchievementsPage />} />
            <Route path="/australia/news" element={<NewsPage />} />
            <Route path="/australia/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/australia/terms" element={<TermsPage />} />
            <Route path="/australia/corporate-secretary" element={<CorporateSecretaryPage />} />
            <Route path="/australia/company-incorporation" element={<CompanyIncorporationPage />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CountryProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
