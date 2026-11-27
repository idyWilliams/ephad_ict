import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://ict.ephadinternationalacademy.org'
  ).replace(/\/$/, '');

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/kids-teens`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/techy-december`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Add other relevant pages here
  ];
}
