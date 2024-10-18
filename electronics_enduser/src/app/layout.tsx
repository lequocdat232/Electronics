import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./globals.css";
import HeaderApp from "@/components/HeaderApp";
import FooterApp from '@/components/FooterApp';
import React from "react";
import Script from "next/script";

// import "@/script";
export const metadata: Metadata = {
  title: "Electronics",
  description: "Siêu thị điện máy",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container-fluid padding-unset-h">
            <HeaderApp />
            {children}
            <FooterApp />
        </div>
        <Script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" />
      </body>
    </html>
  );
}
