// src/components/SEO.tsx
import { Head } from 'vite-react-ssg'
import { useLocation } from 'react-router-dom'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  canonicalUrl?: string          
  ogImage?: string
  ogType?: 'website' | 'article'
  twitterCard?: 'summary' | 'summary_large_image'
  structuredData?: object
  noindex?: boolean
  alternateUrls?: { hreflang: string; href: string }[]
}

const SEOhelper: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = '/lovable-uploads/5f2bc1cf-2bab-424d-8245-eb52af504603.png',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  alternateUrls = [],
}) => {
  const { pathname } = useLocation()
  const fullTitle = title.includes('Growwth Partners') ? title : `${title} | Growwth Partners`
  const canon = canonicalUrl ?? `https://growwthpartners.com${pathname}`
  const img   = ogImage.startsWith('http') ? ogImage : `https://growwthpartners.com${ogImage}`
  const descr =
    description.length > 160 ? `${description.slice(0, 157)}…` : description

  return (
    <Head>
      {/* basic */}
      <title>{fullTitle}</title>
      <meta name="description" content={descr} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Growwth Partners" />
      <meta name="publisher" content="Growwth Partners" />

      {/* robots */}
      <meta
        name="robots"
        content={
          noindex
            ? 'noindex, nofollow'
            : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        }
      />

      {/* canonical / i18n */}
      <link rel="canonical" href={canon} />
      <link rel="alternate" hrefLang="en" href={canon} />
      <link rel="alternate" hrefLang="x-default" href={canon} />
      {alternateUrls.map((alt) => (
        <link
          key={alt.hreflang}
          rel="alternate"
          hrefLang={alt.hreflang}
          href={alt.href}
        />
      ))}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={descr} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canon} />
      <meta property="og:image" content={img} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={descr} />
      <meta name="twitter:image" content={img} />

      {/* optional structured data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Head>
  )
}

export default SEOhelper
