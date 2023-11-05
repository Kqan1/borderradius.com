import Image from "next/image";
import Link from "next/link";
import Profile from "@/components/header/Profile";
import ThemeSwitcher from "@/components/header/ThemeSwitcher";
import Notifications from "@/components/header/NotificationsMenu";

export default function RootHeader() {

    return (
        <header className="w-full h-16 px-40 transition-colors duration-500 leading-6 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
            <div className="max-w-[100rem] flex items-center justify-between h-full mx-auto">
                <Image 
                    src={"/"}
                    alt="Logo"
                    width={25}
                    height={25}
                />
                <div className="flex items-center space-x-4 font-semibold text-sm text-slate-700 dark:text-slate-200">
                    <nav className="space-x-4 pr-4 border-r border-slate-900/10 dark:border-slate-50/[0.06]">
                        <Link href={"/"} className="hover:text-red-700 dark:hover:text-red-500">Link 1</Link>
                        <Link href={"/"} className="hover:text-red-700 dark:hover:text-red-500">Link 2</Link>
                        <Link href={"/"} className="hover:text-red-700 dark:hover:text-red-500">Link 3</Link>
                        <Link href={"/"} className="hover:text-red-700 dark:hover:text-red-500">Link 4</Link>
                    </nav>
                    <Notifications />
                    <ThemeSwitcher />
                    <Profile />
                </div>
            </div>
        </header>
    );
};