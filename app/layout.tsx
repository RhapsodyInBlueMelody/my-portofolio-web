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

const SITE_URL = "https://faizcan.vercel.app/"; // update after you know your real Vercel/domain URL
const TITLE = "Syeddinul Faiz Caniggia — Computer Science Student";
const DESCRIPTION =
    "Portfolio of Syeddinul Faiz Caniggia — full-stack, IoT, and systems projects.";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: TITLE,
    description: DESCRIPTION,
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: SITE_URL,
        siteName: "faiz@portfolio",
        type: "website",
        // images intentionally omitted here — /app/opengraph-image.tsx
        // generates it automatically and Next.js picks it up on its own.
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
    },
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
