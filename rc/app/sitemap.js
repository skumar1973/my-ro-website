// 1. Import your dataset of societies (or define the array here matching your dynamic pages)
const societySlugs = [
  "gaur-city-noida",
  "dlf-phase-5-gurgaon",
  "ats-pristine-noida",
  "subham-apartments-dwarka"
];

export default async function sitemap() {
  // Replace this with your actual production URL after buying your domain
  const baseUrl = "https://pureaquancr.in";

  // 2. Base static pages of your website
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/book-service`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // 3. Automatically map through your society slugs to generate local URLs
  const societyPages = societySlugs.map((slug) => ({
    url: `${baseUrl}/societies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9, // Higher priority to rank heavily in search results
  }));

  // Combine both sets of URLs together
  return [...staticPages, ...societyPages];
}
