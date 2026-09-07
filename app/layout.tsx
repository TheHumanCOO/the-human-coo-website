import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thehumancoo.com"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "EvJHbuunVR-hSowyDA-XVcbtRUMr6EamNTBkT_KpaH4",
  },
  title: "The Human COO | Making business easier to run",
  description:
    "Practical operations support for founders, growing teams and established organisations. Simplify processes, connect systems and spend less time on admin.",
  openGraph: {
    title: "The Human COO | Making business easier to run",
    description:
      "Practical operations support, smarter systems and less admin for founders, growing teams and established organisations.",
    type: "website",
    url: "https://thehumancoo.com/",
    siteName: "The Human COO",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "The Human COO. Making business easier to run.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Human COO | Making business easier to run",
    description:
      "Practical operations support, smarter systems and less admin for founders, growing teams and established organisations.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/human-coo-icon.png",
    shortcut: "/human-coo-icon.png",
    apple: "/human-coo-icon.png",
  },
};

const organisationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Human COO",
  url: "https://thehumancoo.com/",
  logo: "https://thehumancoo.com/human-coo-logo.png",
  description:
    "Practical operations support for founders, growing teams and established organisations. Simplify processes, connect systems and spend less time on admin.",
  email: "hello@thehumancoo.com",
  founder: {
    "@type": "Person",
    name: "Jemma Williams",
  },
  sameAs: [
    "https://www.instagram.com/thehumancoo",
    "https://www.tiktok.com/@thehumancoo",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          id="organisation-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organisationStructuredData),
          }}
        />
        <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
