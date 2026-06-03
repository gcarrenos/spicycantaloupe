import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spicy Cantaloupe — 3D Scanning with LiDAR & Photogrammetry",
  description:
    "Turn anything into a shareable 3D model. Spicy Cantaloupe combines iPhone LiDAR and photogrammetry for fast, accurate captures.",
  metadataBase: new URL("https://spicycantaloupe.com"),
  openGraph: {
    title: "Spicy Cantaloupe — 3D Scanning App",
    description:
      "LiDAR + photogrammetry in your pocket. Scan objects, spaces, and products in minutes.",
    url: "https://spicycantaloupe.com",
    siteName: "Spicy Cantaloupe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spicy Cantaloupe — 3D Scanning App",
    description: "Create 3D models of anything with LiDAR and photogrammetry.",
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
