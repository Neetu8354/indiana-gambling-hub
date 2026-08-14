import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
  canonical: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const SITE = "https://yolo365admin.live";

const SEO = ({ title, description, canonical, image = `${SITE}/og-image.jpg`, type = "website", publishedTime, modifiedTime, keywords, jsonLd }: Props) => {
  const url = canonical.startsWith("http") ? canonical : `${SITE}${canonical}`;
  const imgUrl = image.startsWith("http") ? image : `${SITE}${image}`;
  const ldArray = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:site_name" content="YOLO365" />
      <meta property="og:locale" content="en_IN" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgUrl} />

      {ldArray.map((ld, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(ld)}</script>
      ))}
    </Helmet>
  );
};

export default SEO;
