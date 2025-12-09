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

export const metadata = {
  title: "Sahil Sachan",
  description:
    "Software Engineer shaping next-gen digital products with modern web technologies.",
  keywords:
    "Sahil Sachan, Full Stack Developer, Software Engineer, React, Next.js, Node.js, JavaScript, Web Development",
  authors: [{ name: "Sahil Sachan" }],
  creator: "Sahil Sachan",
  openGraph: {
    title: "Sahil Sachan - Full-Stack Developer",
    description:
      "Software Engineer shaping next-gen digital products with modern web technologies.",
    url: "https://sahilachan.me",
    siteName: "Sahil Sachan Portfolio",
    images: [
      {
        url: "/profile-icon.png",
        width: 1200,
        height: 630,
        alt: "Sahil Sachan - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Sachan - Full-Stack Developer",
    description:
      "Software Engineer shaping next-gen digital products with modern web technologies.",
    images: ["/s1.png"],
  },
  icons: {
    icon: "/s1.png",
    shortcut: "/s1.png",
    apple: "/s1.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ff6b35" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Sahil Sachan" />
        <link rel="canonical" href="https://sahilsachan.me" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
