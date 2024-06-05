import type { Metadata } from "next";
import "../styles/app.css";
import { ReactNode } from "react";
import Navbar from "@/components/navbar/Navbar";
import ProviderWrapper from "@/core/ProviderWrapper";
import InfoLabelShowcase from "@/components/_showcases/InfoLabelShowcase";

export const metadata: Metadata = {
  title: "Fancy component showcase and storage",
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
        <body className='font-inter-display'>
          <div className="mx-auto my-auto w-screen h-screen ">
            <div className="flex flex-col max-w-[1200px] mx-auto p-4">
              <Navbar />
              <InfoLabelShowcase />
              {children}
            </div>
            {/* <GridPatternDashed/> */}
          </div>
        </body>
      </ProviderWrapper>
    </html>
  );
}
