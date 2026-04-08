// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Waco Auto | Premium Automotive Concierge",
    description: "We source, inspect, and negotiate the cleanest Tokunbo and Nigerian-used cars.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.className} bg-waco-dark text-white antialiased`}>
                {/* Navigation Bar */}
                <nav className="sticky top-0 z-40 bg-waco-dark/90 backdrop-blur-md border-b border-gray-800 p-4">
                    <div className="max-w-6xl mx-auto flex justify-between items-center">
                        <div className="text-2xl font-black tracking-tighter">
                            WACO <span className="text-waco-red">AUTO</span>
                        </div>
                        <button className="text-white hover:text-waco-red transition-colors">
                            ☰ Menu
                        </button>
                    </div>
                </nav>

                <main>{children}</main>

                {/* Global Sticky WhatsApp Button (Replace with your actual business number starting with 234) */}
                <WhatsAppButton phoneNumber="2348000000000" isSticky={true} />

            </body>
        </html>
    );
}