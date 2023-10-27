import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import PageWrapper from "@/components/PageWrapper";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen overflow-hidden p-6">
            <PageWrapper>{children}</PageWrapper>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
