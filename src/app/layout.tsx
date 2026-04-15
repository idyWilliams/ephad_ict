import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Switched back to Inter for premium standard tech feel
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { WhatsAppRibbon } from "@/components/ui/WhatsAppRibbon";
import { WhatsAppProvider } from "@/context/WhatsAppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EPHAD ICT Academy | Kubernetes, Coding, UI/UX in Kubwa",
  description: "Empowering the digital generation through practical tech education. Offering Frontend, Backend, UI/UX, Data Science and Kids Coding courses in Kubwa, Abuja.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased transition-colors duration-500`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <WhatsAppProvider>
            <Header />
            <main className="min-h-screen pt-0">{children}</main>
            <Footer />
            <WhatsAppRibbon />
            <Toaster position="bottom-right" />
          </WhatsAppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
