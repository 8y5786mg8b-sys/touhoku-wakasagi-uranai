import type { Metadata } from "next";
import "./globals.css";
import "./card-images.css";
import "./maker-filters.css";

export const metadata: Metadata = {
  title: "東北ワカサギ占い",
  description: "実際の釣り場情報とタロットを組み合わせた、東北のワカサギ釣り占い。",
  manifest: "/manifest.webmanifest",
  applicationName: "東北ワカサギ占い",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ワカサギ占い",
  },
  themeColor: "#061429",
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/icons/icon-192.png",
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
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
