import type { Metadata } from "next";
  
import Navbar from "@/Component/Navbar"
import Footer from "@/Component/Footer";
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar/>
      <body  >{children}</body>
      <Footer/>
    </html>
  );
}
