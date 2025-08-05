
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster as CustomToaster } from "@/components/ui/toaster";
import { CanonicalUpdater } from "@/components/CanonicalUpdater";
import { CountryProvider } from './contexts/CountryContext'
import ScrollToTop from "./components/ui/ScrollToTop";
import FloatingDemoPopup from "@/components/ui/FloatingDemoPopup";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

function Layout() {
  return (
          <CountryProvider>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <div className="App">
            <CanonicalUpdater />
            <ScrollToTop/>
            <Toaster />
            <CustomToaster />
            <FloatingDemoPopup />
            <main>
              {/* Outlet is the placeholder for your page components */}
              <Outlet />
            </main>
          </div>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
    </CountryProvider>
  );
}

export default Layout;
