"use client";
import React, { useEffect, useRef } from "react";
import {
    faUser,
    faRightFromBracket,
    faTruckMedical,
    faMessage,
    faGear,
    faBug,
} from "@fortawesome/free-solid-svg-icons";
import DropdownLink from "@/components/header/ProfileDropdownlink";
import { useSession } from "next-auth/react";
import { useGlobalContext } from "@/app/context/store";

export default function HeaderDropdown() {
    const { data: session } = useSession();
    // @ts-ignore
    let userId = session?.user?.id;

    const { setHeaderDropdownOpen } = useGlobalContext();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node)
            ) {
                setHeaderDropdownOpen(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [setHeaderDropdownOpen]);

    return (
        <>
            <div
                className="flex flex-col justify-center fixed pt-1 rounded top-0 left-0 px-6 pb-52 w-screen h-screen
                lg:h-auto lg:w-60 lg:left-auto lg:right-2 lg:top-[4.5rem] xl:top-14 xl:-left-2 lg:border-solid lg:justify-start lg:absolute lg:p-0 lg:py-0
                border-2 border-slate-300 bg-white text-slate-500 
                dark:text-slate-400 dark:bg-slate-800 dark:border-slate-700 border-none
                "
                ref={dropdownRef}
            >
                <div
                    className="fixed lg:hidden top-8 right-8"
                    onClick={() => setHeaderDropdownOpen(false)}
                >
                    <svg
                        className="h-12 fill-slate-600 dark:fill-slate-500"
                        viewBox="0 0 384 512"
                    >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </div>
                <div className="divide-none divide-y-2 divide-slate-300 lg:divide-solid dark:divide-slate-700">
                    <DropdownLink
                        linkName="My Accound"
                        linkHref={`/accound?a=${userId}`}
                        linkIcon={faUser}
                        linkType="logged as"
                    />

                    <div className="flex flex-col p-0 lg:py-1">
                        <DropdownLink
                            linkName="My Accound"
                            linkHref={`/accound?a=${userId}`}
                            linkIcon={faUser}
                        />
                    </div>

                    <div className="flex flex-col p-0 lg:py-1">
                        <DropdownLink
                            linkName="Messages"
                            linkHref={"messages"}
                            linkIcon={faMessage}
                        />
                        <DropdownLink 
                            linkName="Settings"
                            linkHref="settings"
                            linkIcon={faGear}
                        />
                    </div>

                    <div className="flex flex-col p-0 lg:py-1">
                        <DropdownLink 
                            linkName="Report Bug"
                            linkHref="reportbug"
                            linkIcon={faBug}
                        />
                        <DropdownLink
                            linkName="SSS"
                            linkHref={`/SSS`}
                            linkIcon={faTruckMedical}
                        />
                        <DropdownLink
                            linkName="Log out"
                            linkHref={`/`}
                            linkIcon={faRightFromBracket}
                            linkType="Log Out"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
