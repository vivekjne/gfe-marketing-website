import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/layouts/Navbar";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const notoSansMono = Noto_Sans_Mono({
  variable: "--font-noto-sans-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abstractly",
  description: "Well crafted abstract images",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} ${notoSansMono.variable} antialiased`}
      >
        <div className="flex flex-col bg-gradient-to-b from-gray-50 to-[#d2d6db] min-h-screen">
          <Navbar />
          <div className="p-4 md:p-8">
            <div className="max-w-[1440px] bg-white rounded shadow-md mx-auto w-full mb-8 px-3">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
