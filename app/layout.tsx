import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
