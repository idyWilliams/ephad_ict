import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Switched back to Inter for premium standard tech feel
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { WhatsAppRibbon } from "@/components/ui/WhatsAppRibbon";
import { WhatsAppProvider } from "@/context/WhatsAppContext";
import { SmoothScroll } from "@/components/SmoothScroll";
import { GlobalBackground } from "@/components/ui/GlobalBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ict.ephadinternationalacademy.org"),
  title: {
    default: "Ephad ICT Academy | Best Coding & Tech School in Kubwa, Abuja",
    template: "%s | EPHAD ICT Academy",
  },
  description: "Kickstart your tech career at Ephad ICT Academy in Kubwa, Abuja. Learn practical programming, UI/UX design, and data science from expert mentors. Enroll today!",
 keywords: [
    // --- Brand & Trust ---
    "Ephad ICT Academy",
    "Ephad ICT Academy Kubwa",
    "Ephad ICT Academy fees",

    // --- High-Intent Local Searches ---
    "ICT Academy in Abuja",
    "Coding school in Kubwa",
    "Abuja tech school",
    "IT training centers in Kubwa Abuja",
    "Best computer training school in Kubwa",
    "Where to learn coding in Kubwa",
    "Tech training in Nigeria",
    "Affordable tech schools in Abuja",

    // --- Course-Specific Local Searches (Career Tracks) ---
    "Learn frontend development Abuja",
    "Backend engineering course Abuja",
    "UI/UX design classes Abuja",
    "Software engineering course Abuja",
    "Data science training Abuja",
    "Full stack web development training Abuja",
    "Mobile app development training Abuja",
    "DevOps training in Abuja",
    "IT certification Abuja",

    // --- Kids & Teens Programs ---
    "Kids coding bootcamp Abuja",
    "Coding classes for teens Abuja",
    "Summer coding camp for kids Abuja",
    "Weekend coding classes for kids Kubwa"
  ],  
  authors: [{ name: "EPHAD ICT" }],
  creator: "EPHAD ICT",
  verification: {
    google: "cfyKlGYw4B7pkIhEKbYReleS7-Bx9Esaw5MUS9jvwbQ",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    title: "EPHAD ICT Academy | Kubernetes, Coding, UI/UX in Kubwa",
    description: "Empowering the digital generation through practical tech education in Kubwa, Abuja.",
    siteName: "EPHAD ICT Academy",
    images: [
      {
        url: "/og-image.jpg", // Create this image later or place in public folder
        width: 1200,
        height: 630,
        alt: "EPHAD ICT Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EPHAD ICT Academy | Kubernetes, Coding, UI/UX in Kubwa",
    description: "Empowering the digital generation through practical tech education in Kubwa, Abuja.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Hot-reload trigger for Next.js to re-eval CSS cache
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased transition-colors duration-500`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GlobalBackground />
          <SmoothScroll>
            <WhatsAppProvider>
              <Header />
              <main className="min-h-screen pt-0 relative">{children}</main>
              <Footer />
              <WhatsAppRibbon />
              <Toaster position="bottom-right" />
            </WhatsAppProvider>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
