/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || 'https://amankumar.ai',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    sitemapSize: 1000,
}

export default config
