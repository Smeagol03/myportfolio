import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Alpian Tabrani - Jasa Pembuatan Website Profesional & Cepat",
  description = "Solusi pembuatan website modern, responsif, dan SEO-friendly untuk UMKM dan Personal Branding. Hubungi Alpian untuk konsultasi gratis.",
  image = "/og-default.png",
  url = window.location.href,
  type = "website",
  schema = null,
}) => {
  const siteName = "Alpian Portfolio & Services";

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph tags (Facebook, LinkedIn, etc.) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (Schema.org) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
