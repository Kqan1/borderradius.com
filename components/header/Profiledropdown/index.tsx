"use client"
import React from "react";
import { faUser, faRightFromBracket, faTruckMedical, faMessage  } from '@fortawesome/free-solid-svg-icons'
import HeaderLink from "@/components/header/ProfileDropdownlink"
import { useSession } from 'next-auth/react';

export default function HeaderDropdown() {

    const { data: session } = useSession();

    // @ts-ignore
    let userId = session?.user?.id;

    return (
        <div className="flex flex-col absolute pt-1 top-12 w-60 rounded divide-y-2 dark:divide-slate-700 border-2 border-slate-300 bg-white text-slate-500 dark:text-slate-400 dark:bg-slate-800 dark:border-slate-700">
                <HeaderLink linkName="My Accound" linkHref={`/accound?a=${userId}`} linkIcon={faUser} linkType="logged as"/>
            <div className="flex flex-col py-2">
                <HeaderLink linkName="My Accound" linkHref={`/accound?a=${userId}`} linkIcon={faUser} />
            </div>
            <div className="flex flex-col py-2">
                <HeaderLink linkName="Messages" linkHref={"messages"} linkIcon={faMessage} />
            </div>
            <div className="flex flex-col py-2">
                <HeaderLink linkName="SSS" linkHref={`/SSS`} linkIcon={faTruckMedical} />
                <HeaderLink linkName="Log out" linkHref={`/`} linkIcon={faRightFromBracket} linkType="Log Out"/>
            </div>
        </div>
    );
}