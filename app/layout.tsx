import type { Metadata } from "next";
import "./globals.css";
import "./card-images.css";

export const metadata: Metadata = {
  title: "東北ワカサギ占い",
  description: "実際の釣り場情報とタロットを組み合わせた、東北のワカサギ釣り占い。",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
