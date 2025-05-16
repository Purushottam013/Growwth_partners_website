
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * This component updates the canonical <link rel="canonical"> tag in <head>
 * to reflect the current route, which improves SEO and prevents duplicate content indexing.
 * This component is safe and has no effect on site functionality or UI.
 */
export function CanonicalUpdater() {
  const location = useLocation();

  useEffect(() => {
    // Get canonical link element by id (set in index.html)
    let canonicalEl = document.getElementById("canonical-link");
    // Construct canonical href: includes pathname and search (ignore hash)
    const url = window.location.origin + location.pathname + location.search;
    if (canonicalEl) {
      canonicalEl.setAttribute("href", url);
    } else {
      // Fallback: create if missing (not expected for normal operation)
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      canonicalEl.setAttribute("href", url);
      canonicalEl.id = "canonical-link";
      document.head.appendChild(canonicalEl);
    }
  }, [location.pathname, location.search]);

  return null;
}
