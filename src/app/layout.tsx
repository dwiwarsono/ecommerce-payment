import type { Metadata } from "next";
import { Inter } from "next/font/google";
 
import Provider from "@/provider";
 
import "./globals.css";
 
const inter = Inter({ subsets: ["latin"] });
 
export const metadata: Metadata = {
  title: "E-Commerce Payment",
  description: "Modern E-Commerce with latest stack",
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div className="text-black/80">{children}</div>
        </Provider>
      </body>
    </html>
  );
}