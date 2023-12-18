const fs = require('fs');
const { create } = require('xmlbuilder2');

// Replace these URLs with the actual URLs of your React app
const siteUrl = 'https://infygain.com';
const pages = [
  '/',
  '/about',
  '/contact',
  '/Iotservice',
  '/ispservice',
  '/ServiceSeo',
  '/mainblogs',
  '/career',
  '/Partner',
  '/contact',
  '/services/networking',
  '/services/laptop&desktop',
  '/services/cctv',
  '/services/Projectors',
  '/services/Accessories',
  '/services/TV',
  '/services/Printer&Scanner',
  '/services/InteractivePanel',
  '/services/UPS',
  '/services/WIFI',
  '/services/Pos',
  '/services/InterCom',
  '/isp-package',
  '/Internet-Leased-Line',
  '/smepackage',
  '/Business-Broadband',
  '/webservices/Websites',
  '/webservices/Seo',
'/webservices/Application',
'/webservices/Designing',
  // Add more pages as needed
];

const generateSitemap = () => {
  const root = create({ version: '1.0', encoding: 'UTF-8' })
    .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

  pages.forEach((page) => {
    root.ele('url').ele('loc').txt(`${siteUrl}${page}`);
  });

  const xml = root.end({ prettyPrint: true });

  fs.writeFileSync('public/sitemap.xml', xml, 'utf8');
};

generateSitemap();
