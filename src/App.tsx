
import React from 'react';
import { ClientOnly } from 'vite-react-ssg'
import type { RouteRecord } from 'vite-react-ssg';
import { Navigate } from "react-router-dom";
import Layout from './Layout';
import { supabase } from "@/integrations/supabase/client";
import { CountryProvider } from "./contexts/CountryContext";

// We need to lazy-load the BlogAdminPage component to ensure it's not eagerly imported on the server
const BlogAdminPage = React.lazy(() => import('./pages/admin/BlogAdmin'));

async function getBlogSlugs() {
  try {
    const { data: posts, error } = await supabase
      .from('blog_post')
      .select('slug')
      .not('slug', 'is', null);
      
    if (error) {
      console.error('SSG slug fetch error', error);
      return [];
    }

    return posts.map(post => `/blog/${post.slug}`);
  } catch (error) {
    console.error('Error fetching blog slugs:', error);
    return [];
  }
}

// --- Static imports for non-lazy routes ---
import NotFound from './pages/NotFound';
import BlogPost from './pages/BlogPost';
import Index from './pages/Index';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
       {
        index: true,         
        element: <Index/>
      },
       { 
        path: 'index', 
        element: <Index /> 
      },
      {
        path: 'about',
        async lazy() { const { default: Component } = await import('./pages/About'); return { Component }; },
      },
      {
        path: 'contact-us',
        async lazy() { const { default: Component } = await import('./pages/Contact'); return { Component }; },
      },
      {
        path: 'blog',
        async lazy() { const { default: Component } = await import('./pages/Blog'); return { Component }; },
      },
      {
        path: 'accounting-services-in-singapore',
        async lazy() { const { default: Component } = await import('./pages/Accounting'); return { Component }; },
      },
      {
        path: 'bookkeeping-services-in-singapore',
        async lazy() { const { default: Component } = await import('./pages/Bookkeeping'); return { Component }; },
      },
      {
        path: 'payroll-services-in-singapore',
        async lazy() { const { default: Component } = await import('./pages/Payroll'); return { Component }; },
      },
      {
        path: 'cash-flow-services-in-singapore',
        async lazy() { const { default: Component } = await import('./pages/CashFlow'); return { Component }; },
      },
      {
        path: 'company-incorporation-services-in-singapore',
        async lazy() { const { default: Component } = await import('./pages/CompanyIncorporation'); return { Component }; },
      },
      {
        path: 'corporate-secretary-services-in-singapore',
        async lazy() { const { default: Component } = await import('./pages/CorporateSecretary'); return { Component }; },
      },
      {
        path: 'part-time-cfo',
        async lazy() { const { default: Component } = await import('./pages/FractionalCFO'); return { Component }; },
      },
      {
        path: 'privacy-policy',
        async lazy() { const { default: Component } = await import('./pages/PrivacyPolicy'); return { Component }; },
      },
      {
        path: 'terms',
        async lazy() { const { default: Component } = await import('./pages/Terms'); return { Component }; },
      },
      {
        path: 'success-stories',
        async lazy() { const { default: Component } = await import('./pages/SuccessStories'); return { Component }; },
      },
      {
        path: 'taxation',
        async lazy() { const { default: Component } = await import('./pages/Taxation'); return { Component }; },
      },
      {
        path: 'achievements',
        async lazy() { const { default: Component } = await import('./pages/Achievements'); return { Component }; },
      },
      {
        path: 'guide',
        async lazy() { const { default: Component } = await import('./pages/Guide'); return { Component }; },
      },
      {
        path: 'guide/:slug',
        async lazy() { const { default: Component } = await import('./pages/GuideSingle'); return { Component }; },
      },
      {
        path: 'guide/financial-reporting-standards-singapore',
        async lazy() { const { default: Component } = await import('./pages/FinancialReportingGuide'); return { Component }; },
      },
      {
        path: 'news',
        async lazy() { const { default: Component } = await import('./pages/News'); return { Component }; },
      },
      {
        path: 'resources',
        element: <Navigate to="/achievements/" replace />
      },
      // UAE Routes
      {
        path: 'uae',
        async lazy() { const { default: Component } = await import('./pages/HomeUAE'); return { Component }; },
      },
      {
        path: 'uae/about',
        async lazy() { const { default: Component } = await import('./pages/About'); return { Component }; },
      },
      {
        path: 'uae/blog',
        async lazy() { const { default: Component } = await import('./pages/Blog'); return { Component }; },
      },
      {
        path: 'uae/blog/:slug',
        async lazy() { const { default: Component } = await import('./pages/BlogPost'); return { Component }; },
      },
      {
        path: 'uae/contact-us',
        async lazy() { const { default: Component } = await import('./pages/Contact'); return { Component }; },
      },
      {
        path: 'accounting-services-in-uae',
        async lazy() { const { default: Component } = await import('./pages/Accounting'); return { Component }; },
      },
      {
        path: 'bookkeeping-services-in-uae',
        async lazy() { const { default: Component } = await import('./pages/Bookkeeping'); return { Component }; },
      },
      {
        path: 'payroll-services-in-uae',
        async lazy() { const { default: Component } = await import('./pages/Payroll'); return { Component }; },
      },
      {
        path: 'cash-flow-services-in-uae',
        async lazy() { const { default: Component } = await import('./pages/CashFlow'); return { Component }; },
      },
      {
        path: 'company-incorporation-services-in-uae',
        async lazy() { const { default: Component } = await import('./pages/CompanyIncorporation'); return { Component }; },
      },
      {
        path: 'corporate-secretary-services-in-uae',
        async lazy() { const { default: Component } = await import('./pages/CorporateSecretary'); return { Component }; },
      },
      {
        path: 'part-time-cfo-uae',
        async lazy() { const { default: Component } = await import('./pages/FractionalCFO'); return { Component }; },
      },
      // Australia Routes
      {
        path: 'australia',
        async lazy() { const { default: Component } = await import('./pages/HomeAustralia'); return { Component }; },
      },
      {
        path: 'australia/about',
        async lazy() { const { default: Component } = await import('./pages/About'); return { Component }; },
      },
      {
        path: 'australia/blog',
        async lazy() { const { default: Component } = await import('./pages/Blog'); return { Component }; },
      },
      {
        path: 'australia/blog/:slug',
        async lazy() { const { default: Component } = await import('./pages/BlogPost'); return { Component }; },
      },
      {
        path: 'australia/contact-us',
        async lazy() { const { default: Component } = await import('./pages/Contact'); return { Component }; },
      },
      {
        path: 'accounting-services-in-australia',
        async lazy() { const { default: Component } = await import('./pages/Accounting'); return { Component }; },
      },
      {
        path: 'bookkeeping-services-in-australia',
        async lazy() { const { default: Component } = await import('./pages/Bookkeeping'); return { Component }; },
      },
      {
        path: 'payroll-services-in-australia',
        async lazy() { const { default: Component } = await import('./pages/Payroll'); return { Component }; },
      },
      {
        path: 'cash-flow-services-in-australia',
        async lazy() { const { default: Component } = await import('./pages/CashFlow'); return { Component }; },
      },
      {
        path: 'company-incorporation-services-in-australia',
        async lazy() { const { default: Component } = await import('./pages/CompanyIncorporation'); return { Component }; },
      },
      {
        path: 'corporate-secretary-services-in-australia',
        async lazy() { const { default: Component } = await import('./pages/CorporateSecretary'); return { Component }; },
      },
      {
        path: 'part-time-cfo-australia',
        async lazy() { const { default: Component } = await import('./pages/FractionalCFO'); return { Component }; },
      },
      // Case Studies
      {
        path: 'case-studies/healthcare',
        async lazy() { const { default: Component } = await import('./pages/case-studies/HealthcareCaseStudy'); return { Component }; },
      },
      {
        path: 'case-studies/ecommerce',
        async lazy() { const { default: Component } = await import('./pages/case-studies/EcommerceCaseStudy'); return { Component }; },
      },
      {
        path: 'case-studies/food-tech',
        async lazy() { const { default: Component } = await import('./pages/case-studies/FoodTechCaseStudy'); return { Component }; },
      },
      {
        path: 'case-studies/online-consumer-goods',
        async lazy() { const { default: Component } = await import('./pages/case-studies/OnlineConsumerGoodsCaseStudy'); return { Component }; },
      },
      {
        path: 'case-studies/data-driven-success',
        async lazy() { const { default: Component } = await import('./pages/case-studies/DataDrivenSuccessCaseStudy'); return { Component }; },
      },
      {
        path: 'case-studies/gaming-industry',
        async lazy() { const { default: Component } = await import('./pages/case-studies/GamingIndustryCaseStudy'); return { Component }; },
      },
      // Admin Routes
      { 
        path: 'admin/blog', 
        element: (
          <ClientOnly>
            {() => (
              <React.Suspense fallback={<div>Loading editor...</div>}>
                <BlogAdminPage />
              </React.Suspense>
            )}
          </ClientOnly>
        ),
        getStaticPaths: () => [],
      },
      {
        path: 'admin/login',
        async lazy() { const { default: Component } = await import('./pages/admin/BlogAdminLogin'); return { Component }; },
        getStaticPaths: () => [],
      },
      // Legacy redirects
      {
        path: 'uae/accounting-services-in-singapore',
        element: <Navigate to="/accounting-services-in-uae/" replace />
      },
      {
        path: 'uae/bookkeeping-services-in-singapore',
        element: <Navigate to="/bookkeeping-services-in-uae/" replace />
      },
      {
        path: 'uae/payroll-services-in-singapore',
        element: <Navigate to="/payroll-services-in-uae/" replace />
      },
      {
        path: 'uae/cash-flow-services-in-singapore',
        element: <Navigate to="/cash-flow-services-in-uae/" replace />
      },
      {
        path: 'uae/company-incorporation-services-in-singapore',
        element: <Navigate to="/company-incorporation-services-in-uae/" replace />
      },
      {
        path: 'uae/corporate-secretary-services-in-singapore',
        element: <Navigate to="/corporate-secretary-services-in-uae/" replace />
      },
      {
        path: 'uae/part-time-cfo',
        element: <Navigate to="/part-time-cfo-uae/" replace />
      },
      {
        path: 'australia/accounting-services-in-singapore',
        element: <Navigate to="/accounting-services-in-australia/" replace />
      },
      {
        path: 'australia/bookkeeping-services-in-singapore',
        element: <Navigate to="/bookkeeping-services-in-australia/" replace />
      },
      {
        path: 'australia/payroll-services-in-singapore',
        element: <Navigate to="/payroll-services-in-australia/" replace />
      },
      {
        path: 'australia/cash-flow-services-in-singapore',
        element: <Navigate to="/cash-flow-services-in-australia/" replace />
      },
      {
        path: 'australia/company-incorporation-services-in-singapore',
        element: <Navigate to="/company-incorporation-services-in-australia/" replace />
      },
      {
        path: 'australia/corporate-secretary-services-in-singapore',
        element: <Navigate to="/corporate-secretary-services-in-australia/" replace />
      },
      {
        path: 'australia/part-time-cfo',
        element: <Navigate to="/part-time-cfo-australia/" replace />
      },

      //  {
      //   path: 'blog/:slug',
      //   element: <BlogPost />,
      //   getStaticPaths: getBlogSlugs,
      // },

      // Dynamic blog post route
      {
        path: 'blog/:slug',
        lazy: async () => {
          const { default: Component } = await import('./pages/BlogPost')
          return { Component }
        },
        entry: 'src/pages/BlogPost.tsx',
        getStaticPaths: async () => {
          const { data: posts, error } = await supabase
            .from('blog_post')
            .select('slug');
            

          if (error) {
            console.error('SSG slug fetch error', error)
            return []
          }

          return posts!.map((p) => `blog/${p.slug}`)
        }
      },
      { 
        path: '*', 
        element: <NotFound /> 
      },
    ],
  },
];
