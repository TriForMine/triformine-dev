import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "relative min-h-screen bg-gradient-to-br from-white via-blue-100 to-white dark:from-gray-900 dark:via-black dark:to-gray-900 text-gray-900 dark:text-white font-sans antialiased scroll-smooth transition-colors duration-500",
          fontSans.variable,
        )}
      >
        {/* Dotted pattern overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-10
            dark:opacity-20
            transition-opacity duration-500
            z-0
          "
          style={{
            backgroundImage: `
              radial-gradient(#ccc 1px, transparent 1px),
              radial-gradient(#ccc 1px, transparent 1px)
            `,
            backgroundPosition: "0 0, 25px 25px",
            backgroundSize: "50px 50px",
          }}
        />

        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col min-h-screen z-10">
            {/* Enhanced Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="container mx-auto max-w-7xl px-6 flex-grow relative z-10">
              {children}
            </main>

            {/* Optional Global Footer */}
            <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 relative z-10">
              © {new Date().getFullYear()} TriForMine. All rights reserved.
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
