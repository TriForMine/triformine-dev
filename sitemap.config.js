/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.triformine.dev',
    generateRobotsTxt: true,
    sitemapSize: 7000,
}
