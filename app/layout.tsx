import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Saptanova Technologies",
    template: "%s | Saptanova Technologies",
  },
  description:
    "Saptanova Technologies designs, builds, and scales modern cloud architectures, enterprise software, AI automation, and full-stack digital platforms.",
  keywords: [
    "Saptanova",
    "Saptanova Technologies",
    "Cloud Computing",
    "DevOps",
    "AI Automation",
    "Enterprise Software",
    "Bengaluru Software Company",
  ],
  authors: [{ name: "Saptanova Technologies" }],
  openGraph: {
    title: "Saptanova Technologies | Digital Innovation & Enterprise Engineering",
    description:
      "Transforming business capabilities through cloud modernization, custom web platforms, and intelligent automation.",
    url: "https://www.saptanova.in",
    siteName: "Saptanova Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saptanova Technologies",
    description: "Cloud, AI & Custom Enterprise Software Engineering.",
  },
  verification: {
    google: "SGUgzXXYBFNlQXCgZOOjrWp2rhXUnbagpHxW-GfWDK8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-white dark:bg-[#070e1e] text-slate-900 dark:text-white transition-colors duration-300">
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}