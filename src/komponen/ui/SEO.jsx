import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Alpian Tabrani - Jasa Pembuatan Website Profesional & Cepat",
  description = "Solusi website modern untuk UMKM, Personal Branding, dan Sistem Manajemen Data. Website cepat, responsif, dan SEO-friendly. Mulai dari 1 Juta Rupiah.",
  image = "/og-default.png",
  url = "https://alpiant.my.id",
  type = "website",
  schema = null,
  keywords = "",
}) => {
  const siteName = "Alpian Portfolio & Services";
  const fullUrl = url.startsWith("http") ? url : `https://alpiant.my.id${url}`;
  
  const defaultKeywords = "Jasa Pembuatan Website Lombok, Web Developer Lombok, Freelancer Website Lombok, Jasa Website UMKM, Pembuatan Landing Page, Jasa Admin Freelancer, Web Developer Freelancer Lombok NTB, Jasa Desain Web Profesional";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords} />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image.startsWith("http") ? image : `https://alpiant.my.id${image}`} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="id_ID" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.startsWith("http") ? image : `https://alpiant.my.id${image}`} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
