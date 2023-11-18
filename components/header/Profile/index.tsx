import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import Badge from "@/components/ui/Badge";
import Dropdown from "@/components/ui/dropdown";
import { useGlobalContext } from "@/app/context/store";
import { faUser, faRightFromBracket, faCircleInfo, faMessage, faGear, faBug } from "@fortawesome/free-solid-svg-icons";

export default function HeaderProfile() {
    const { headerDropdownOpen, setHeaderDropdownOpen } = useGlobalContext();

    //! Get Session Data
    const { data: session } = useSession();
    const name = session?.user?.name;
    // @ts-ignore
    const role = session?.user?.role;
    
    return (
        <div className="static xl:relative">
            <div
                className="cursor-pointer hidden md:flex items-center space-x-2"
                onClick={async () => {
                    if (session === null) {
                        await signIn();
                    } else {
                        setHeaderDropdownOpen(!headerDropdownOpen);
                    }
                }}
            >
                <div className="h-10 relative aspect-square rounded-full flex items-center justify-center overflow-hidden border border-slate-900/30 dark:border-slate-50/30">
                    <Image
                        src={"/pp.svg"}
                        alt="user name"
                        // decoding="async"
                        fill
                    />
                </div>
                <div className="flex items-center">
                    {name ?? "Log in"} <Badge role={role} />
                </div>
            </div>
            <div
                className="grid place-items-center md:hidden fill-slate-700 dark:fill-slate-200 cursor-pointer"
                onClick={()=>setHeaderDropdownOpen(!headerDropdownOpen)}
            >
                <svg className="h-6 -rotate-90" viewBox="0 0 448 512"><path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z" /></svg>
            </div>
            {session && headerDropdownOpen && 
            <Dropdown 
                links={[
                    [
                        {
                            text: "...session_name",
                            href: "/myaccount",
                            icon: faUser
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
                            onClick: ()=>signOut()
                        }
                    ]
                ]}
            />}
        </div>
    );
};