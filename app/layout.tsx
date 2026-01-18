import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "F.U.N. - Factorio Unified Network",
    description: "Industrial Exchange & Logistics Network",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
