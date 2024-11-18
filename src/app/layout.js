import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../sections/Navbar"
import Footer from "@/sections/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "AD Hub",
  description: "Talks about all things creative.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
                  <Navbar />
                  {children}
                  <Footer />
      </body>
    </html>
  );
}
