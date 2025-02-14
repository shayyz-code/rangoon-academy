import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Head from "next/head"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Rangoon Academy",
  description:
    "Rangoon Academy is Myanmar’s first Burmese-language online learning platform, offering interactive courses, AI-powered learning assistance, and real-world projects to help you master what you want to learn. Whether you're a beginner or looking to advance your skills, we provide an affordable, career-focused learning experience designed for Myanmar learners. 🚀 Start learning today!",
  keywords:
    "Coding, Academic, Academy, Online, Learning, Platform, Myanmar, Burmese, Rangoon",
  authors: [{ name: "Shayy", url: "https://codewithshayy.online/me" }],
  icons: {
    icon: "/favicon.ico", // Path to your favicon
  },
  openGraph: {
    type: "website",
    url: "https://www.rangoon-academy.com",
    title: "Rangoon Academy",
    description:
      "Rangoon Academy is Myanmar’s first Burmese-language online learning platform, offering interactive courses, AI-powered learning assistance, and real-world projects to help you master what you want to learn. Whether you're a beginner or looking to advance your skills, we provide an affordable, career-focused learning experience designed for Myanmar learners. 🚀 Start learning today!",
    images: [
      {
        url: "/logo.png", // Path to Open Graph image
        width: 800,
        height: 600,
        alt: "Rangoon Academy Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@rangoonacademy", // Twitter handle
    title: "Rangoon Academy",
    description:
      "Rangoon Academy is Myanmar’s first Burmese-language online learning platform, offering interactive courses, AI-powered learning assistance, and real-world projects to help you master what you want to learn. Whether you're a beginner or looking to advance your skills, we provide an affordable, career-focused learning experience designed for Myanmar learners. 🚀 Start learning today!",
    images: ["/logo.png"], // Path to Twitter image
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
