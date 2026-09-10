import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";

const stenz = localFont({
  src: [
    { path: "../fonts/StenzGraxonPro-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/StenzGraxonPro-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/StenzGraxonPro-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../fonts/StenzGraxonPro-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/StenzGraxonPro-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-stenz",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Artemis — Modern Designer Portfolio",
  description:
    "Artemis is a refined portfolio for modern designers, artists, agencies, and studios. Clean editorial layout with smooth animations.",
  icons: {
    icon: [{ url: "/favicon.jpg", type: "image/jpeg" }],
    apple: [{ url: "/favicon.jpg", type: "image/jpeg" }],
    shortcut: "/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${stenz.variable} ${stenz.className} cursor-none-desktop antialiased`}
      >
        <div className="grain" aria-hidden />
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
