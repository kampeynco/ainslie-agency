import { JsonLd } from "./JsonLd";
import { SITE } from "@/lib/constants";

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: SITE.name,
        description: SITE.description,
        url: SITE.url,
        email: SITE.email,
        areaServed: "US",
        serviceType: [
          "Generative Engine Optimization",
          "AI Search Optimization",
          "Schema Markup",
          "AI Citability Optimization",
          "Technical SEO",
        ],
        knowsAbout: [
          "Generative Engine Optimization",
          "AI Search",
          "ChatGPT",
          "Google AI Overviews",
          "Perplexity AI",
          "Schema Markup",
          "Structured Data",
          "AI Citability",
        ],
      }}
    />
  );
}
