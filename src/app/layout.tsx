"use client";
import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
import BackgroundAnimation from "@/app/components/misc/backgroundAnimation";
import BackgroundHover from "@/app/components/misc/backgroundHover";
import { motion } from "framer-motion";
import LeftBar from "./components/shared/leftBar";
import RightBar from "./components/shared/rightBar";

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
        <BackgroundAnimation color={"white"} />
        <BackgroundHover />
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:flex w-32 h-full fixed left-0 bottom-0"
        >
          <LeftBar />
        </motion.div>
        <main className="min-h-main max-w-[80%] mx-auto">{children}</main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:flex w-32 h-full fixed right-0 bottom-0"
        >
          <RightBar />
        </motion.div>
        <Footer />
      </body>
    </html>
  );
}
