import type { Metadata } from "next";
import { Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Pietro Kucharski — Full Stack Developer",
  description:
    "Desenvolvedor Full Stack com foco em aplicações modernas usando TypeScript, Next.js, Node.js e React. Balneário Camboriú, SC — Brasil.",
  keywords: [
    "Full Stack Developer",
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
    "Pietro Kucharski",
  ],
  authors: [{ name: "Pietro Kucharski" }],
  openGraph: {
    title: "Pietro Kucharski — Full Stack Developer",
    description:
      "Desenvolvedor Full Stack com foco em aplicações modernas usando TypeScript, Next.js, Node.js e React.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${syne.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
