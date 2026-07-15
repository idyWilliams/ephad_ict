import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coding Classes for Kids & Teens in Kubwa, Abuja | Ephad',
  description: 'Interactive weekend coding classes and summer bootcamps for kids and teens in Abuja. We teach game design, Python, and web development in a fun environment!',
  keywords: [
    'Kids coding Abuja',
    'Teens tech bootcamp',
    'Youth ICT training',
    'Learn to code for kids',
    'Tech summer camp Abuja',
    'Robotics for kids Abuja',
    'Programming for children',
    'STEM education Abuja',
    'Kids web development',
    'Abuja coding classes for teens',
    'Ephad kids bootcamp'
  ],
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
