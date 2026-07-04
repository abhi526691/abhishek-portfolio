import type { Metadata } from "next";
import { instrumentSerif, inter, jetbrainsMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhishek Pandey — AI Engineer",
  description:
    "I took the long way to AI — through a biology textbook I never wanted, and a question I couldn't put down. The story, and the work, of an AI Engineer in Toronto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
