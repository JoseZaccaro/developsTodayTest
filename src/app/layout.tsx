import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Filter cars",
  description: "DevelopsToday Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex items-center justify-between pt-2 px-4">
          <Link href="/">
            <Image src="/next-uwu-logo.avif" width={64} height={32} alt="logo" className="w-16 h-8 object-contain" />
          </Link>
          <nav>
            <Link href="/">Home</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
