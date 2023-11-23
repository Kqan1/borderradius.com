"use client"
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { signIn } from "next-auth/react";

export default function DevTools() {
    async function ADMIN() {
        await signIn("credentials", {
            redirect: false,
            email: "test@admin.com",
            password: "test",
        });
    }

    async function USER() {
        await signIn("credentials", {
            redirect: false,
            email: "test@user.com",
            password: "test",
        });
    }

    if (process.env.NODE_ENV !== 'production') {
        return (
            <div className="fixed bottom-0 right-0 flex items-center pr-3 pl-1 py-1 z-[9999] space-x-3 rounded transition-colors bg-white hover:bg-zinc-200 dark:bg-transparent hover:dark:bg-zinc-900">
                <div className="space-x-1">
                    <button type="button" onClick={ADMIN} className="py-0.5 px-1 rounded border border-zinc-700 dark:border-zinc-200">ADMIN</button>
                    <button type="button" onClick={USER} className="py-0.5 px-1 rounded border border-zinc-700 dark:border-zinc-200">USER</button>
                </div>
                <ThemeSwitcher />
                <p className="block md:hidden">sm</p>
                <p className="hidden md:max-lg:block">md</p>
                <p className="hidden lg:max-xl:block">lg</p>
                <p className="hidden xl:max-2xl:block">xl</p>
                <p className="hidden 2xl:block">2xl</p>
            </div>
        );
    };
};