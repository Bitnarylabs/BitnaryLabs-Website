import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Business Software & Website Development | BitnaryLabs",
  description: "Practical business software and high-performing websites for Indian companies. Simplify daily work, serve customers better, and grow with technology that fits your needs.",
  keywords: ["Inventory Software India", "HR Payroll Software India", "Website Development Noida", "E-commerce Website Agency India", "StockSense", "PeopleDesk", "BitnaryLabs"],
  authors: [{ name: "BitnaryLabs" }],
};

import { SiteShell } from "@/components/SiteShell";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#07090e] text-slate-100 selection:bg-blue-600 selection:text-white">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
