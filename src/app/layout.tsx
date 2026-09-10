import type { Metadata, Viewport } from "next";
import { Amiri, Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  adjustFontFallback: true,
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  variable: "--font-amiri",
  display: "swap",
  weight: ["400", "700"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "صدقة جارية — شريف عزت",
  description:
    "صدقة جارية لشريف عزت رحمه الله. اقرأ القرآن وادعُ له، واجعل هذه الصفحة صدقة جارية تصل إليه.",
  applicationName: "صدقة جارية",
  authors: [{ name: "صدقة جارية" }],
  keywords: [
    "صدقة جارية",
    "شريف عزت",
    "دعاء",
    "قرآن",
    "رحمة",
    "ذكرى",
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "صدقة جارية",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: "صدقة جارية — شريف عزت",
    description:
      "اقرأ آية أو دعاء، وادعُ لشريف عزت رحمه الله، وانشر الصفحة لتعم الفائدة.",
    locale: "ar_AR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "صدقة جارية — شريف عزت",
    description:
      "اقرأ آية أو دعاء، وادعُ لشريف عزت رحمه الله، وانشر الصفحة لتعم الفائدة.",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/icon-192.png", sizes: "192x192" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#3f5c4c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${amiri.variable}`}>
      <body className="min-h-dvh font-sans antialiased">{children}</body>
    </html>
  );
}
