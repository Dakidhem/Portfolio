import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mehdi Kadiri | Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link></link>
      </Head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-main">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
