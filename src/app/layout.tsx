
// import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import { CartProvider } from "./Context/context";
import Footer from "@/components/Footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title> RestaurantWebsite</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Navbar />
        <CartProvider>{children}</CartProvider> 
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        <Footer/>
      </body>
    </html>
  );
}
