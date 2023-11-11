import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { GlobalContextProvider } from "./context/store";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://www.borderradiusblog.netlify.app/"),
    title: "Border Radius - Web Blog",
    description:
    "Border Radius - Web Blog",
    generator: "Next.js",
    applicationName: "Border Radius",
    keywords: [
        
    ],
    openGraph: {
        title: "Border Radius - Web Blog",
        description:
        "Border Radius - Web Blog",
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
    twitter: {
        card: "summary_large_image",
        title: "Border Radius - Web Blog",
        description:
        "Border Radius - Web Blog",
        creator: "Kqan",
        creatorId: "0000000000",
        images: ["./public/metadata.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {

    let h: string = "";
    if (process.env.NODE_ENV === 'development') {
        h = " h-[500vh]";
    };

    return (
        <html lang="en" className="antialiased">
            <body className={`${inter.className} antialiased bg-white dark:bg-slate-900${h} w-screen overflow-x-hidden light`}>
                <GlobalContextProvider>
                    <Header />
                    {children}
                    <Footer />
                </GlobalContextProvider>            
            </body>
        </html>
    );
};