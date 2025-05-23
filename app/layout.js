import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/navbar";
import { SignerWrapper } from "@/context/signerProvider";
import { GoogleAdSense } from "next-google-adsense";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mentiq",
  description: "All in one web3 solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAdSense publisherId="pub-2855543832746929" />
        <SignerWrapper>
        <Nav />
        <div className=" mx-5 md:mx-10 mt-14">
            {children}
            <Analytics />
        </div>
        </SignerWrapper>
      </body>
    </html>
  );
}
