import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kids & Teens Tech Bootcamp',
  description: 'Engaging coding and tech programs designed specifically for kids and teens aged 7–17 in Abuja. Turn screen time into creative time.',
  keywords: ['Kids coding Abuja', 'Teens tech bootcamp', 'Youth ICT training', 'Learn to code for kids', 'Tech summer camp Abuja'],
  openGraph: {
    title: 'Kids & Teens Tech Bootcamp | EPHAD ICT Academy',
    description: 'Engaging coding and tech programs designed specifically for kids and teens aged 7–17 in Abuja.',
    url: '/kids-teens',
  },
};

export default function KidsTeensLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
