import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CloneUrOwn — 3D Replica Photo Capture",
  description:
    "Transform yourself into a stunning 3D replica with guided photo capture. Review and approve your model in the app.",
  metadataBase: new URL("https://spicycantaloupe.com"),
  icons: {
    icon: "/cloneurown-icon.jpg",
    apple: "/cloneurown-icon.jpg",
  },
  openGraph: {
    title: "CloneUrOwn — 3D Replica App",
    description:
      "Guided photo scanning, interactive 3D preview, and one-tap approval for your custom replica.",
    url: "https://spicycantaloupe.com",
    siteName: "CloneUrOwn",
    type: "website",
    images: [{ url: "/cloneurown-icon.jpg", width: 512, height: 512 }],
  },
  twitter: {
    card: "summary",
    title: "CloneUrOwn — 3D Replica App",
    description:
      "Guided photo capture and 3D model approval on iPhone.",
    images: ["/cloneurown-icon.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Syne:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
