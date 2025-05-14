import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Disco Zookeeper",
  description: "A Disco Zoo support app to find all the animals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
