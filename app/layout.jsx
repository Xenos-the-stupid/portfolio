import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GriddyBackground from "@/components/ui/GriddyBackground";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata = {
  title: "Xenos | Portfolio",
  description: "Xenos-the-stupid portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`dark:bg-black dark:text-white ${poppins.className}`}>
        <Navbar />
        {children}
        <GriddyBackground />
      </body>
    </html>
  );
}
