// import { useGlobalContext } from "@/app/context/store";

// type DropdownProps = {
//     links: any;
// };

// type LinkProps = {
//     text: string,
//     href: string,
//     icon: IconDefinition,
//     onClick: () => void
// }

// const Dropdown = ({ links }: DropdownProps) => {

//     const { headerDropdownOpen, setHeaderDropdownOpen } = useGlobalContext();
//         return (
//             <div
//                 className="flex flex-col justify-center fixed pt-1 rounded top-0 left-0 px-6 pb-52 w-screen h-screen
//                 lg:h-auto lg:w-60 lg:left-auto lg:right-2 lg:top-[4.5rem] xl:top-14 xl:-left-2 lg:border-solid lg:justify-start lg:absolute lg:p-0 lg:py-0
//                 border-2 border-zinc-300 bg-white text-zinc-500
//                 dark:text-zinc-400 dark:bg-zinc-800 dark:border-zinc-700 border-none">
//                 <div
//                     className="fixed lg:hidden cursor-pointer top-8 right-8"
//                     onClick={() => setHeaderDropdownOpen(false)}
//                 >
//                     <svg className="h-12 fill-zinc-600 dark:fill-zinc-500"viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
//                 </div>
//                 <div className="divide-none divide-y-2 divide-zinc-300 lg:divide-solid dark:divide-zinc-700">
//                     {links.map((linkGroup: any, index: any) => (
//                         <div className="flex flex-col p-0 lg:py-1" key={index}>
//                             {linkGroup.map((link: LinkProps, linkIndex: number) => (
//                                 <DropdownLink
//                                     key={linkIndex}
//                                     text={link.text}
//                                     href={link.href}
//                                     icon={link.icon}
//                                     onClick={link.onClick}
//                                 />
//                             ))}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         );
//     };
//
// export default Dropdown;

"use client"
import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

import { useSession } from "next-auth/react";

import { cn } from "@/lib/utils";

const DropdownVariants = cva(
    "flex flex-col justify-center fixed pt-1 rounded top-0 left-0 px-6 pb-52 w-screen h-screen lg:h-auto lg:w-60 lg:left-auto lg:right-2 lg:top-[4.5rem] xl:top-14 xl:-left-2 lg:border-solid lg:justify-start lg:absolute lg:p-0 lg:py-0 border-2 border-zinc-300 bg-white text-zinc-500 dark:text-zinc-400 dark:bg-zinc-800 dark:border-zinc-500 border-none",
    {
        variants: {
            variant: {
                default: "",
                destructive: "",
            },
            size: {
                default: "",
                sm: "",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface DropdownProps extends React.LinkHTMLAttributes<HTMLLinkElement>, VariantProps<typeof DropdownVariants> {
    links: LinkTypes;
    text: string
    icon?: IconDefinition;
    onClick?: () => void;
}

interface Link {
    text: string;
    href?: string;
    icon: any;
    onClick?: any;

}

type LinkTypes = Array<Array<Link>>;

const Dropdown = React.forwardRef<HTMLAnchorElement, DropdownProps>(
    ({ className, children, links, variant, size, ...props }, ref) => {

        // custom codes
        const { data: session } = useSession();
        const session_username = session?.user?.username ?? "`Username`";
        
        links.forEach(element => {
            element.forEach(innerElement => {
                if (innerElement.text === "...session_username") {
                    innerElement.text = session_username;
                }
            })
        });

        return (
            <div className={cn(DropdownVariants({ variant, size }))}>
                <div className="fixed lg:hidden cursor-pointer top-8 right-8">
                    <svg className="h-12 fill-zinc-600 dark:fill-zinc-500" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </div>
                <div className="divide-none divide-y-2 divide-zinc-300 lg:divide-solid dark:divide-zinc-500">
                    {links.map((linkGroup: any, index: any) => (
                        <div className="flex flex-col p-0 lg:py-1" key={index}>
                            {linkGroup.map((link: DropdownProps, linkIndex: number) => (
                                    <Link
                                        key={linkIndex}
                                        href={link.href ?? "/"}
                                        onClick={link.onClick}
                                        ref={ref}
                                        className="cursor-pointer flex items-center px-0 lg:px-2 py-2 lg:text-base text-3xl text-zinc-500 dark:text-zinc-300 hover:bg-zinc-400/10"
                                        // {...props}
                                    >
                                        <FontAwesomeIcon
                                            className="mx-8 lg:ml-1 lg:mr-2"
                                            icon={link.icon ?? "0"}
                                            size="1x"
                                        />
                                        {link.text}
                                    </Link>
                                )
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
);

Dropdown.displayName = "Dropdown";

export { Dropdown, DropdownVariants };