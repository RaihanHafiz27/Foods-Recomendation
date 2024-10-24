"use client";

import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/fragments/footer/Footer";
import Navbar from "@/components/fragments/navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
// import { SessionProvider } from "next-auth/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const disableNavbar = ["/login", "/register"];

const disableFooter = ["/login", "/register"];

const bgSlatePages = ["/login", "/register"];

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  useEffect(() => {
    AOS.init();
  });
  return (
    <html lang="id">
      <body
        className={` ${poppins.className} ${
          bgSlatePages.includes(pathname) ? "bg-slate-200" : "bg-[#5F3B22]"
        }`}
      >
        <SessionProvider>
          {!disableNavbar.includes(pathname) && <Navbar />}
          {children}
          {!disableFooter.includes(pathname) && <Footer />}
        </SessionProvider>
      </body>
    </html>
  );
}
