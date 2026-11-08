import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import ThemeProvider from "./theme";
import localFont from "vinext/shims/font-local";
import Footer from "./_common/Footer";
import Head from "vinext/shims/head";

const futura = localFont({
  src: [
    // Light (300)
    {
      path: "/font/FuturaLT-CondensedLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "/font/FuturaLT-CondensedLightObl.woff2",
      weight: "300",
      style: "italic",
    },

    // Medium (500)
    { path: "/font/FuturaLT-Condensed.woff2", weight: "500", style: "normal" },
    {
      path: "/font/FuturaLT-CondensedOblique.woff2",
      weight: "500",
      style: "italic",
    },

    // Bold (700)
    {
      path: "/font/FuturaLT-CondensedBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "/font/FuturaLT-CondensedBoldOblique.woff2",
      weight: "700",
      style: "italic",
    },

    // Extra Bold (800)
    {
      path: "/font/FuturaLT-CondensedExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "/font/FuturaLT-CondExtraBoldObl.woff2",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-futura",
});

export const metadata: Metadata = {
  title: "Plastyk",
  description: "A rave for dykes",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(futura.variable)} suppressHydrationWarning>
      <link rel="icon" href="/public/favicon.ico" sizes="any" />
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
