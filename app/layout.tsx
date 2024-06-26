import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const clashDisplay = localFont({
  src: '../public/fonts/ClashDisplay-Variable.ttf',
  variable: '--font-clash-display'
});

export const metadata: Metadata = {
  title: "Someone should make",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clashDisplay.className + " bg-background-light text-primary-light"}>
        <div className="container mx-auto h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
