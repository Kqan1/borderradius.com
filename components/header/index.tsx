"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Profile from "@/components/header/Profile";
import ThemeSwitcher from "@/components/header/ThemeSwitcher";
import Notifications from "@/components/header/NotificationsMenu";

export default function RootHeader() {
    //! Set scrollPosition
    const [scrollPosition, setScrollPosition] = useState(0);

    //! Set classNames
    const [lightBg, setLightBg] = useState("60");
    const [darkBg, setDarkBg] = useState("transparent");

    const headerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const scrollHandler = () => {
            if (headerRef.current) {
                const currentPosition =
                    headerRef.current.getBoundingClientRect().top + 80;
                setScrollPosition(currentPosition);

                if (window.scrollY <= currentPosition) {
                    setLightBg("60");
                    setDarkBg("transparent");
                }

                if (window.scrollY >= currentPosition) {
                    setLightBg("95");
                    setDarkBg("slate-900/70");
                }
            }
        };

        window.addEventListener("scroll", scrollHandler, true);

        return () => {
            window.removeEventListener("scroll", scrollHandler, true);
        };
    }, [scrollPosition]);

    return (
        <header
            className={`sticky top-0 z-40 w-full h-10 lg:h-16 transition-colors duration-500 leading-6 backdrop-blur-sm border-b border-slate-900/10 dark:border-slate-50/[0.06]  bg-white/${lightBg}  dark:bg-${darkBg}`}
            ref={headerRef}
        >
            <div className="hidden bg-white/95 dark:bg-slate-900/70"></div>
            <div className="2xl:max-w-[90rem] xl:max-w-6xl px-4 flex items-center justify-between h-full mx-auto">
                <Link href={"/"} className="relative h-5/6 w-16 lg:w-24" >
                    <Image src={"/"} alt="Logo" fill />
                </Link>
                <div className="flex items-center space-x-4 font-semibold text-sm text-slate-700 dark:text-slate-200">
                    <nav className="space-x-4 pr-4 border-r border-slate-900/10 dark:border-slate-50/[0.06] lg:flex hidden">
                        <Link href={"/"} className="hover:text-red-700 dark:hover:text-red-500">
                            Link 1
                        </Link>
                        <Link href={"/"} className="hover:text-red-700 dark:hover:text-red-500" >
                            Link 2
                        </Link>
                        <Link href={"/"} className="hover:text-red-700 dark:hover:text-red-500" >
                            Link 3
                        </Link>
                        <Link href={"/"} className="hover:text-red-700 dark:hover:text-red-500" >
                            Link 4
                        </Link>
                    </nav>
                    <Notifications />
                    <ThemeSwitcher />
                    <Profile />
                </div>
            </div>
        </header>
    );
};