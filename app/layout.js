import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import bgDark from "../public/images/bg-desktop-dark.jpg";
import Link from "next/link";
import Navigation from "./_components/Navigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-very-dark-blue`}>
        <Navigation />
        <Image
          src={bgDark}
          alt="background"
          className="absolute top-0 left-0 object-cover w-full -z-20 h-72 "
        />

        {children}
      </body>
    </html>
  );
}
