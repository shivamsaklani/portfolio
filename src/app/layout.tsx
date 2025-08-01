import type { Metadata } from "next";
import "./globals.css";
import {Inter,Calistoga} from "next/font/google";
import {twMerge} from "tailwind-merge";
const inter = Inter({
  subsets:["latin"],
  variable:"--font-sans"
});
const calistoga = Calistoga({
  subsets:["latin"],
  weight:["400"],
  variable:"--font-serif"
})
export const metadata: Metadata = {
  title: "Shivam Saklani",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable,calistoga.variable,"bg-gray-900 text-white antialised font-sans")}>{children}</body>
    </html>
  );
}
