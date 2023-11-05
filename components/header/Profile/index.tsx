"use client";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Badge from "@/components/header/Badge";
import Dropdown from "@/components/header/Profiledropdown";


export default function HeaderProfile() {
    const [Open, setOpen] = useState(false);

    const { data: session } = useSession();

    const name = session?.user?.name;

    // @ts-ignore
    const role = session?.user?.role

    //! is authorised
    if (session === null) {
        return (
            <Link href={"http://localhost:3000/api/auth/signin"}>
                <div className="relative cursor-pointer flex items-center space-x-2">
                    <div className="h-10 relative aspect-square rounded-full flex items-center justify-center overflow-hidden border border-slate-900/30 dark:border-slate-50/30">
                        <Image
                            src={"/pp.svg"}
                            alt="user name"
                            decoding="async"
                            fill
                        />
                    </div>
                    <div>{name ?? "Log in"}</div>
                </div>
            </Link>
        );
    }

    return (
        <div className="relative">
            <div
                className="cursor-pointer flex items-center space-x-2"
                onClick={() => setOpen(!Open)}
            >
                <div className="h-10 relative aspect-square rounded-full flex items-center justify-center overflow-hidden border border-slate-900/30 dark:border-slate-50/30">
                    <Image
                        src={"/pp.svg"}
                        alt="user name"
                        decoding="async"
                        fill
                    />
                </div>
                <div className="flex items-center">{ name } <Badge role={role}/> </div>
            </div>
            {Open && <Dropdown />}
        </div>
    );
}
