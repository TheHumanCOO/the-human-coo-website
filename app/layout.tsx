import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thehumancoo.com"),
  title: "The Human COO | Making business easier to run",
  description:
    "Practical operations support for founders, growing teams and established organisations. Simplify processes, connect systems and spend less time on admin.",
  openGraph: {
    title: "The Human COO | Making business easier to run",
    description:
      "Practical operations support, smarter systems and less admin for founders, growing teams and established organisations.",
    type: "website",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
