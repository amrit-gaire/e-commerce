import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared-component/navbar";
import Footer from "@/components/shared-component/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahegao",
  description: "Shopping platform for you baby.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div>
            <Navbar />
          </div>
          {children}
          <div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
