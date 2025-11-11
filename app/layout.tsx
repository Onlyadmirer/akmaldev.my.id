import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import Layouts from "@/common/components/layouts/Layouts";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Background from "@/common/components/layouts/background/Background";
import TopLoader from "@/common/components/elements/TopLoader";

const fontOnest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.DOMAIN || ""
  ),
  description: "Personal website portofolio",
  keywords: "akmal, akmaldev",
  creator: "Akmal",
  authors: {
    name: "Akmal",
    url: process.env.DOMAIN,
  },
  openGraph: {
    images: "/pp.jpg",
    url: process.env.DOMAIN,
    siteName: "Akmaldev",
    locale: "id-ID",
    type: "website",
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
