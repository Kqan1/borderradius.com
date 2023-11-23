"use client"
import { FC, LinkHTMLAttributes, MouseEvent, useEffect, useRef } from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalContext } from "@/app/context/store";
import { useSession } from "next-auth/react";

interface Props extends LinkHTMLAttributes<HTMLLinkElement> {
    text: string;
    href?: string;
    icon: IconDefinition;
    onClick?: (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement | HTMLLinkElement>) => void | any;
}

export const DropdownLink: FC<Props> = ({ text, href, icon, onClick, ...rest }: Props) => {

    // custom codes
    const { data: session } = useSession();
    const session_username = session?.user?.username;

    let incomingText;
    switch (text) {
        case "...session_username":
            incomingText = session_username
            break;
    
        default:
            incomingText = text  
            break;
    }

    // When clicked the link close the dropdown
    const { setHeaderDropdownOpen } = useGlobalContext();
    const dropdownRef = useRef(null);
    useEffect(() => {
        const handleClick = (e: Event) => {
            if (e.target === dropdownRef.current) {
                setHeaderDropdownOpen(false);
            };
        };
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, [setHeaderDropdownOpen]);

    if (href) {
        return (
            // @ts-ignore
            <></>
        );
    } else {
        return (
            // @ts-ignore
            <button
                onClick={onClick}
                ref={dropdownRef}
                className="cursor-pointer flex items-center px-0 lg:px-2 py-2 lg:text-base text-3xl text-slate-500 dark:text-slate-300 hover:bg-slate-400/10"
                {...rest}
            >
                <FontAwesomeIcon className="mx-8 lg:ml-1 lg:mr-2" icon={icon} size="1x" />
                {incomingText}
            </button>
        );
    };
};