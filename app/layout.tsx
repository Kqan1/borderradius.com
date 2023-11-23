import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { GlobalContextProvider } from "./context/store";
import Nav from "@/components/navigationBar";
import Footer from "@/components/footer";
import DevTools from "@/components/devTools";

const fontInter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://www.borderradiusblog.netlify.app/"),
    title: "Border Radius - Web Blog",
    description: "Border Radius - Web Blog",
    generator: "Next.js",
    applicationName: "Border Radius",
    keywords: [],
    category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="min-h-screen">
            <body className={`${fontInter.className} text-zinc-700 dark:text-zinc-200 antialiased bg-light h-[calc(100vh-7.5rem)] w-screen min-h-screen overflow-x-hidden`}>
                <GlobalContextProvider>
                    <Nav />
                    {children}
                    <Footer />

                    {/* For Dev */}
                    <DevTools />
                </GlobalContextProvider>
            </body>
        </html>
    );
};