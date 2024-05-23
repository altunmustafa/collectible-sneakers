import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Collectible Sneakers - Mustafa Altun",
  description: "Created by Mustafa Altun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-amber-50 to-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
