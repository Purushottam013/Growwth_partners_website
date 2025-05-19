
import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
}

export const Seo = ({ title, description }: SeoProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
);
