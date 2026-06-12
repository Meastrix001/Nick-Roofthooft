/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://nick-roofthooft.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "monthly",
  priority: 0.8,
};
