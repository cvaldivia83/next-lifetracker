import type { Metadata } from "next";
import "./globals.css";
import { Lato } from "next/font/google"

export const lato = Lato({
  weight: ['400', '700'], 
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "LifeTracker",
  description: "LifeTracker is a workspace where you can manage your entire life in one click",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        {children}
      </body>
    </html>
  );
}
