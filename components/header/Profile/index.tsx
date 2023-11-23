import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import Badge from "@/components/ui/Badge";
import { Dropdown } from "@/components/ui/dropdown";
import { faUser, faRightFromBracket, faCircleInfo, faMessage, faGear, faBug } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

export default function HeaderProfile() {

    //! Get Session Data
    const { data: session } = useSession();
    const username = session?.user?.username ?? "Log in";
    const role = session?.user?.role;
    const pp = session?.user?.pp ?? "/pp.svg";


    const [dropdownOpen, setDropdownOpen] = useState<Boolean>(false);
    const ref = useRef(null);
    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if ( ref.current && !(ref.current as HTMLElement).contains(e.target as Node) ) {
                setDropdownOpen(false);
            };
        };

        window.addEventListener("mousedown", handleOutsideClick);

        return () => {
            window.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [setDropdownOpen]);

    return (
        <div className="static xl:relative">
            <div
                className="cursor-pointer hidden lg:flex items-center space-x-2"
                onClick={async () => {
                    if (session === null) {
                        await signIn();
                    } else {
                        setDropdownOpen(!dropdownOpen);
                    }
                }}
            >
                <div className="h-10 relative aspect-square rounded-full flex items-center justify-center overflow-hidden border border-zinc-900/30 dark:border-zinc-50/30">
                    <Image
                        src={pp}
                        alt={username}
                        fill
                    />
                </div>
                <div className="flex items-center">
                    {username ?? "Log in"} <Badge role={role} />
                </div>
            </div>
            <div
                className="grid place-items-center lg:hidden fill-zinc-700 dark:fill-zinc-200 cursor-pointer"
                onClick={async () => {
                    if (session === null) {
                        await signIn();
                    } else {
                        setDropdownOpen(!dropdownOpen);
                    }
                }}
            >
                {session ? 
                <svg width="24" height="24" aria-hidden="true"><path d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                : <p>Log in</p>}
            </div>
            {session && dropdownOpen && 
            <Dropdown 
                ref={ref} 
                state={dropdownOpen}
                setState={setDropdownOpen}
                links={[
                    [
                        {
                            text: "...session_username",
                            href: "/myaccount",
                            icon: faUser,
                        }
                    ],
                    [
                        {
                            text: "Messages",
                            href: "/messages",
                            icon: faMessage
                        },
                        {
                            text: "Settings",
                            href: "/settings",
                            icon: faGear
                        }
                    ],
                    [
                        {
                            text: "Report Bug",
                            href: "/reportbug",
                            icon: faBug
                        },
                        {
                            text: "SSS",
                            href: "/SSS",
                            icon: faCircleInfo
                        },
                        {
                            text: "Sign Out",
                            icon: faRightFromBracket,
                            onClick: () => signOut()
                        }
                    ]
                ]}
            />}
        </div>
    );
};