import type { Metadata } from "next";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "@fontsource/ibm-plex-mono/700.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syeddinul Faiz Caniggia — Computer Science Student",
  description:
    "Portfolio of Syeddinul Faiz Caniggia — full-stack, IoT, and systems projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gv-bg0 text-gv-fg1 font-sans antialiased selection:bg-gv-yellow selection:text-gv-bg0">
        {children}
      </body>
    </html>
  );
}
