"use client";
import Image from "next/image";
import Link from "next/link";

import Profile from "@/components/navigationBar/Profile";
import Notifications from "./NotificationsMenu";
import Search from "@/components/search";

export default function RootHeader() {
    return (
        <header className="flex justify-between h-12 w-full px-4 py-2 font-semibold text-sm text-zinc-700/50 dark:text-zinc-200/50 border-b border-zinc-500/10">
            <div className="flex items-center h-full">
                <Link href={"/"} className="relative flex h-full aspect-square mr-6">
                    <Image
                        src={"/logo.svg"}
                        alt="BorderRadius" 
                        fill
                    />
                </Link>
                <nav className="flex pl-6 space-x-6 border-l border-zinc-500/40">
                    <Link href={"/"} className={`hover:text-zinc-500 hover:dark:text-zinc-300 transition-colors active`}>Link1</Link>
                    <Link href={"/"} className={`hover:text-zinc-500 hover:dark:text-zinc-300 transition-colors`}>Link2</Link>
                    <Link href={"/"} className={`hover:text-zinc-500 hover:dark:text-zinc-300 transition-colors`}>Link3</Link>
                    <Link href={"/"} className={`hover:text-zinc-500 hover:dark:text-zinc-300 transition-colors`}>Link4</Link>
                    <Link href={"/"} className={`hover:text-zinc-500 hover:dark:text-zinc-300 transition-colors`}>Link5</Link>
                    <Link href={"/"} className={`hover:text-zinc-500 hover:dark:text-zinc-300 transition-colors`}>Link6</Link>
                    <Link href={"/"} className={`hover:text-zinc-500 hover:dark:text-zinc-300 transition-colors`}>Link7</Link>
                </nav>
            </div>
            <div className="flex items-center h-full relative space-x-3">
                <Search />
                <Notifications />
                <Profile />
            </div>
        </header>
    );
};