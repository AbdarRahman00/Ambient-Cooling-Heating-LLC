import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingCallBtn from "@/components/floating-call-btn";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ambient Cooling & Heating LLC | Annapolis HVAC Services",
    template: "%s | Ambient Cooling & Heating LLC"
  },
  description: "Trusted local Annapolis HVAC contractor. We offer honest pricing, fast emergency response times, and premium residential & commercial air conditioning, furnace, heat pump, and tankless water heater services.",
  keywords: [
    "HVAC Annapolis MD",
    "AC Repair Annapolis",
    "Heating Services Annapolis",
    "Furnace Repair Near Me",
    "Heat Pumps Maryland",
    "Local HVAC Annapolis"
  ],
  authors: [{ name: "Ambient Cooling & Heating LLC" }],
  creator: "Ambient Cooling & Heating LLC",
  publisher: "Ambient Cooling & Heating LLC",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://ambientcoolingandheating.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ambient Cooling & Heating LLC | Annapolis HVAC Services",
    description: "Annapolis's trusted local heating and cooling specialists. Rapid response, flat-rate pricing, and NATE-certified experts.",
    url: "https://ambientcoolingandheating.com",
    siteName: "Ambient Cooling & Heating LLC",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="antialiased bg-cool text-primary selection:bg-brand selection:text-white">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingCallBtn />
      </body>
    </html>
  );
}
