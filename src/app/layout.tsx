import type { Metadata } from "next";
import "./globals.css";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});
const calistoga = Calistoga({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif"
})
export const metadata: Metadata = {
  title: "Shivam Saklani",
  description: "Software Developer",
  icons:{
    icon:"/favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable)}>{children}</body>
    </html>
  );
}
