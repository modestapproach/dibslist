import type { Metadata } from "next";
import { Stint_Ultra_Expanded } from "next/font/google";
import "./globals.css";

const stint = Stint_Ultra_Expanded({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-stint",
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
    <html lang="en" className={stint.variable}>
      <body>{children}</body>
    </html>
  );
}
