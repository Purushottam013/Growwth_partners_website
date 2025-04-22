import React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CountryProvider } from "./contexts/CountryContext";

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
import BlogPostPage from "./pages/BlogPost";
import SuccessStoriesPage from "./pages/SuccessStories";
import GuidePage from "./pages/Guide";
import AchievementsPage from "./pages/Achievements";
import NewsPage from "./pages/News";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import TermsPage from "./pages/Terms";
import CorporateSecretaryPage from "./pages/CorporateSecretary";
import CompanyIncorporationPage from "./pages/CompanyIncorporation";
import NotFound from "./pages/NotFound";
import BlogAdminPage from "./pages/admin/BlogAdmin";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <CountryProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/accounting" element={<AccountingPage />} />
              <Route path="/bookkeeping" element={<BookkeepingPage />} />
              <Route path="/payroll" element={<PayrollPage />} />
              <Route path="/taxation" element={<TaxationPage />} />
              <Route path="/fractional-cfo" element={<FractionalCFOPage />} />
              <Route path="/cash-flow" element={<CashFlowPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/success-stories" element={<SuccessStoriesPage />} />
              <Route path="/guide" element={<GuidePage />} />
              <Route path="/achievements" element={<AchievementsPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/corporate-secretary" element={<CorporateSecretaryPage />} />
              <Route path="/company-incorporation" element={<CompanyIncorporationPage />} />
              
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
              <Route path="/uae/blog/:slug" element={<BlogPostPage />} />
              <Route path="/uae/success-stories" element={<SuccessStoriesPage />} />
              <Route path="/uae/guide" element={<GuidePage />} />
              <Route path="/uae/achievements" element={<AchievementsPage />} />
              <Route path="/uae/news" element={<NewsPage />} />
              <Route path="/uae/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/uae/terms" element={<TermsPage />} />
              <Route path="/uae/corporate-secretary" element={<CorporateSecretaryPage />} />
              <Route path="/uae/company-incorporation" element={<CompanyIncorporationPage />} />
              
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
              <Route path="/australia/blog/:slug" element={<BlogPostPage />} />
              <Route path="/australia/success-stories" element={<SuccessStoriesPage />} />
              <Route path="/australia/guide" element={<GuidePage />} />
              <Route path="/australia/achievements" element={<AchievementsPage />} />
              <Route path="/australia/news" element={<NewsPage />} />
              <Route path="/australia/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/australia/terms" element={<TermsPage />} />
              <Route path="/australia/corporate-secretary" element={<CorporateSecretaryPage />} />
              <Route path="/australia/company-incorporation" element={<CompanyIncorporationPage />} />
              
              <Route path="/admin/blog" element={<BlogAdminPage />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CountryProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
