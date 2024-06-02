import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fancy component showcase",
  description: "Showcase and storage for easily reusable components which I plan on using in the future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <div className="mx-autto my-auto w-screen h-screen bg-black">
          {children}
        </div>
      </body>
    </html>
  );
}
