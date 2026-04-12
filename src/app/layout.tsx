import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Switched back to Inter for premium standard tech feel
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "sonner";

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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
