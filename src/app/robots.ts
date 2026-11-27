import { MetadataRoute } from 'next';

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://ict.ephadinternationalacademy.org'
).replace(/\/$/, '');

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
