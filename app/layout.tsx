import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata: Metadata = {
  title: "dibslist — before you buy new, check if someone nearby already has it",
  description:
    "Dibslist is an object-aware checkout layer for the internet. Before you buy new, check if someone nearby already has it.",
  openGraph: {
    title: "dibslist",
    description:
      "Object-aware checkout. Before you buy new, check if someone nearby already has it.",
    url: "https://dibslist.org",
    siteName: "dibslist",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lexend.variable}>
      <body>{children}</body>
    </html>
  );
}
