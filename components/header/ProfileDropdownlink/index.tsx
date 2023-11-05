import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { signOut, useSession } from "next-auth/react";

type Props = {
    linkName: string;
    linkHref: string;
    linkIcon: IconDefinition;
    linkType?: string;
};

export default function HeaderLink({ linkName, linkHref, linkIcon, linkType }: Props) {
    const { data: session } = useSession();

    const name = session?.user?.name;
    
    const email = session?.user?.email;
    // @ts-ignore
    const userId = session?.user?.id;

    if ( linkType === "logged as" ) {
        return (
            <div className="px-2 mb-2">
                <p className="mb-2 text-slate-400 text-xs select-none">
                    Logged as
                </p>
                <Link href={`/account?a=${userId}`}>
                    <div className="flex">
                        <div className="relative aspect-square h-8 mr-2">
                            <Image src={"/pp.svg"} alt="" fill />
                        </div>
                        <div className="flex flex-col justify-center h-8">
                            <p className="leading-4 text-slate-600 dark:text-slate-300">
                                {name}
                            </p>
                            <p className="leading-4 text-xs text-slate-500 dark:text-slate-400">
                                {email}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        );
    } else if ( linkType === "Log Out" ) {
        return (
            <Link
                href={linkHref}
                onClick={async () => { await signOut() }}
                className="flex px-2 py-2 text-sm text-slate-500 dark:text-slate-300 hover:bg-slate-400/10"
            >
                <div className="mr-2">
                    <FontAwesomeIcon icon={linkIcon} />
                </div>
                <div className="">{linkName}</div>
            </Link>
        );
    } else if ( linkType === undefined ) {
        return (
            <Link
                href={linkHref}
                className="flex px-2 py-2 text-sm text-slate-500 dark:text-slate-300 hover:bg-slate-400/10"
            >
                <div className="mr-2">
                    <FontAwesomeIcon icon={linkIcon} />
                </div>
                <div className="">{linkName}</div>
            </Link>
        );
    }
}