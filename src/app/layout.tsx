import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pokemon Explorer - Discover the World of Pokemon",
  description: "Explore and discover Pokemon with detailed information, stats, abilities, and moves. Built with Next.js and PokeAPI.",
  keywords: ["Pokemon", "PokeAPI", "Next.js", "React", "TypeScript", "Tailwind CSS"],
  authors: [{ name: "Pokemon Explorer" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Pokemon Explorer",
    description: "Discover and explore the amazing world of Pokemon",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokemon Explorer",
    description: "Discover and explore the amazing world of Pokemon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-white dark:bg-gray-900 transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
