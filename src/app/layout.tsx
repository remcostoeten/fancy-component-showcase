import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../styles/app.css";
import { ReactNode } from "react";
import Navbar from "@/components/navbar/Navbar";
import ProviderWrapper from "@/core/ProviderWrapper";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fancy component showcase",
  description:
    "Showcase and storage for easily reusable components which I plan on using in the future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <ProviderWrapper>
        <body className={manrope.className}>
          <div className="mx-auto my-auto w-screen h-screen ">
            <div className="flex flex-col max-w-[1200px] mx-auto p-4">
              <Navbar />
              {children}
            </div>
            {/* <GridPatternDashed/> */}
          </div>
        </body>
      </ProviderWrapper>
    </html>
  );
}
