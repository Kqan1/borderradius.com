import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { GlobalContextProvider } from "./context/store";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ResponsiveIndicator from "@/components/responsiveIndicatorForDev";

const fontInter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://www.borderradiusblog.netlify.app/"),
    title: "Border Radius - Web Blog",
    description: "Border Radius - Web Blog",
    generator: "Next.js",
    applicationName: "Border Radius",
    keywords: [],
    openGraph: {
        title: "Border Radius - Web Blog",
        description: "Border Radius - Web Blog",
        url: "https://www.borderradiusblog.netlify.app/",
        siteName: "www.seekvisualartist.com",
        images: [
            {
                url: "./public/metadata.jpg",
                width: 1200,
                height: 630,
                alt: "Border Radius - Web Blog",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${fontInter.className} text-zinc-700 dark:text-zinc-200 antialiased bg-white dark:bg-zinc-900 h-[calc(100vh-7.5rem)] w-screen overflow-x-hidden`}>
                <GlobalContextProvider>
                    <Header />
                    {children}
                    <Footer />

                    {/* For Dev */}
                    <ResponsiveIndicator />
                </GlobalContextProvider>
            </body>
        </html>
    );
};