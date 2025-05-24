
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Seo } from "./Seo";

// Default fallback SEO content if page forgot it (should rarely be visible!).
const FALLBACK_SEO_PROPS = {
  title: "Growwth Partners | Financial & Accounting Advisory",
  description:
    "Explore Growwth Partners for world-class accounting, CFO, bookkeeping, and financial strategy services tailored for Singapore, UAE, and Australia.",
};

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Layout wrapper for all pages.
 * Includes a fallback Seo in case a page omits it. 
 * (SEO WARNING: This should only show on error or developer-missed pages!)
 * 
 * This is NOT a replacement for page-level dedicated <Seo />. Each page must render its own.
 */
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Fallback Seo for dev safety—should NOT be only Seo on a page */}
      <Seo {...FALLBACK_SEO_PROPS} />
      <Navbar />
      <main className="flex-grow w-full">{children}</main>
      <Footer />
    </div>
  );
};

