
'use client'
import localFont from "next/font/local";
import "../globals.css";
import TopBar from "@/components/TopBar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const router = useRouter()
  useEffect(()=>{
    const user = localStorage.getItem('User')
    if(!user){
    router.push(`/Login`)
  }
  },[])
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <TopBar/>
          {children}
      </body>
    </html>
  );
}
