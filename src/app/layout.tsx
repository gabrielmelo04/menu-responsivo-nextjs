import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Menu Lateral",
  description: "Criar uma menu lateral com Next JS e usando tailwind css",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
