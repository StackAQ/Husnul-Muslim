import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dua Daily by Abdulqudus",
  description: "Explore authentic Duas for every occasion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cyan-100`}
      >
        <div className="flex">
          <aside className="hidden lg:block w-64 shadow-lg">
            <Sidebar />
          </aside>
          <main className="p-6 flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
