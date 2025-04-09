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
          "relative min-h-screen bg-gradient-to-br from-white via-blue-100 to-white dark:from-gray-900 dark:via-blue-950 dark:to-gray-900 text-gray-900 dark:text-white font-sans antialiased scroll-smooth transition-colors duration-500",
          fontSans.variable,
        )}
      >
        {/* Animated background elements */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Gradient background */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-950/30 opacity-70 dark:opacity-60 transition-colors duration-500"
            style={{
              backgroundSize: "200% 200%",
              animation: "gradientShift 15s ease infinite",
            }}
          />

          {/* Modern grid background */}
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-500 dark:opacity-60 opacity-70"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(79, 70, 229, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(79, 70, 229, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "clamp(20px, 3vw, 30px) clamp(20px, 3vw, 30px)",
            }}
          />


          {/* Subtle gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-56 h-56 bg-blue-300/20 dark:bg-blue-700/10 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-[100px] animate-pulse-slow" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-300/20 dark:bg-purple-700/10 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-[100px] animate-pulse-slower" />
          <div className="absolute top-2/3 right-1/3 w-48 h-48 bg-cyan-300/20 dark:bg-cyan-700/10 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-[100px] animate-pulse-slowest" />
        </div>

        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col min-h-screen z-10">
            {/* Enhanced Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="container mx-auto max-w-7xl px-6 flex-grow relative z-10">
              {children}
            </main>

            {/* Enhanced Footer */}
            <footer className="py-10 relative z-10 border-t border-gray-200 dark:border-gray-800 mt-10">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Brand */}
                  <div className="md:col-span-1">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                      TriForMine
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Freelance developer passionate about creating elegant
                      solutions to complex problems.
                    </p>
                    <div className="flex space-x-3">
                      <a
                        aria-label="GitHub"
                        className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
                        href={siteConfig.links.github}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            clipRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </a>
                      <a
                        aria-label="Twitter"
                        className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
                        href={siteConfig.links.twitter}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a
                        aria-label="LinkedIn"
                        className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
                        href={siteConfig.links.linkedin}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="md:col-span-1">
                    <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider mb-4">
                      Navigation
                    </h3>
                    <ul className="space-y-2">
                      {siteConfig.navItems.map((item, index) => (
                        <li key={index}>
                          <a
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                            href={item.href}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Resources */}
                  <div className="md:col-span-1">
                    <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider mb-4">
                      Resources
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                          href={siteConfig.links.github}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          GitHub
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                          href={siteConfig.links.sponsor}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Sponsor
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    © {new Date().getFullYear()} TriForMine. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
