/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.arsystems.org",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.7,
  trailingSlash: true,
  exclude: ["/404", "/500"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/404", "/500"],
      },
    ],
  },
  additionalPaths: async (config) => [
    {
      loc: "/",
      changefreq: "daily",
      priority: 1.0,
    },
    {
      loc: "/company",
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      loc: "/products",
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      loc: "/automation",
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      loc: "/careers",
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      loc: "/contact",
      changefreq: "monthly",
      priority: 0.5,
    },
    {
      loc: "/privacy-policy",
      changefreq: "yearly",
      priority: 0.3,
    },
    {
      loc: "/blogs",
      changefreq: "weekly",
      priority: 0.7,
    },
  ],
};
