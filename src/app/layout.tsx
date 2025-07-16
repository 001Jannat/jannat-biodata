import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jannat Khatoon - Biodata",
  description: "Professional biodata of Jannat Khatoon - Full Stack Developer with 2+ years experience",
  keywords: "biodata, Jannat Khatoon, full stack developer, resume, portfolio",
  authors: [{ name: "Jannat Khatoon" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Jannat Khatoon - Biodata",
    description: "Professional biodata of Jannat Khatoon - Full Stack Developer",
    type: "profile",
    images: ["/og-image.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
