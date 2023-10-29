import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import Prev from "@/components/Prev";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bens",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <meta
        property="og:image"
        content="https://i.imgur.com/XkFO7NT.png"
      ></meta>
      <meta property="description" content="Elevate User Experiences." />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen overflow-hidden p-6">
            <Prev />
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <ScrollToTop />
      </body>
    </html>
  );
}
