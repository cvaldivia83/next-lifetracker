import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
