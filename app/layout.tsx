import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tactil — Inclusive Tactile Robotics Education | Launched by Overtime FTC #33611",
  description:
    "Tactil makes robotics education accessible for blind and low-vision students through the Tactile Ecosystem for FIRST Tech Challenge. Launched by Overtime FTC #33611.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen flex flex-col antialiased font-[family-name:var(--font-inter)]">
        <a
          href="#main-content"
          className="absolute left-[-9999px] w-px h-px overflow-hidden focus:static focus:left-4 focus:top-4 focus:z-50 focus:w-auto focus:h-auto focus:overflow-visible focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1" role="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
