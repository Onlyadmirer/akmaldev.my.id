import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import Layouts from "@/common/components/layouts/Layouts";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Background from "@/common/components/layouts/background/Background";
import TopLoader from "@/common/components/elements/TopLoader";
import { Toaster } from "@/common/components/ui/sonner";

const fontOnest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_DOMAIN ??
      (process.env.NODE_ENV === "production"
        ? "https://akmal.my.id"
        : "http://localhost:3000")
  ),
  title: {
    default: "Akmaldev",
    template: "%s | Akmaldev",
  },
  description:
    "The personal portfolio of Akmal — a web developer passionate about building clean, modern, and efficient web experiences.",
  keywords: ["Akmal", "Akmaldev", "Web Developer", "Portfolio", "Next.js"],
  creator: "Akmal",
  authors: [{ name: "Akmal", url: process.env.NEXT_PUBLIC_DOMAIN }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: process.env.NEXT_PUBLIC_DOMAIN,
    siteName: "Akmaldev",
    title: "Akmaldev — Web Developer & Designer",
    description:
      "Explore Akmal’s portfolio showcasing projects, achievements, and creative work in web development.",
    images: [
      {
        url: "/pp.jpeg",
        width: 1200,
        height: 630,
        alt: "Akmaldev Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akmaldev — Web Developer & Designer",
    description:
      "Explore Akmal’s portfolio showcasing projects, achievements, and creative work in web development.",
    images: ["/pp.jpeg"],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_DOMAIN,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={` ${fontOnest.className} antialiased`}>
        <TopLoader />
        <Toaster position='bottom-right' />
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Background />
          <Layouts>{children}</Layouts>
        </ThemeProvider>
      </body>
    </html>
  );
}
