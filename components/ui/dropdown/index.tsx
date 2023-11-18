import { useGlobalContext } from "@/app/context/store";
import { DropdownLink } from "@/components/ui/dropdown/link";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type DropdownProps = {
    links: Array<Object | any>;
};

type LinkProps = {
    text: string,
    href: string,
    icon: IconDefinition,
    onClick: () => void
}

const Dropdown = ({ links }: DropdownProps) => {

    const { headerDropdownOpen, setHeaderDropdownOpen } = useGlobalContext();
        return (
            <div
                className="flex flex-col justify-center fixed pt-1 rounded top-0 left-0 px-6 pb-52 w-screen h-screen
                lg:h-auto lg:w-60 lg:left-auto lg:right-2 lg:top-[4.5rem] xl:top-14 xl:-left-2 lg:border-solid lg:justify-start lg:absolute lg:p-0 lg:py-0
                border-2 border-slate-300 bg-white text-slate-500 
                dark:text-slate-400 dark:bg-slate-800 dark:border-slate-700 border-none">
                <div 
                    className="fixed lg:hidden cursor-pointer top-8 right-8"
                    onClick={() => setHeaderDropdownOpen(false)}
                >
                    <svg className="h-12 fill-slate-600 dark:fill-slate-500"viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </div>
                <div className="divide-none divide-y-2 divide-slate-300 lg:divide-solid dark:divide-slate-700">
                    {links.map((linkGroup, index) => (
                        <div className="flex flex-col p-0 lg:py-1" key={index}>
                            {linkGroup.map((link: LinkProps, linkIndex: number) => (
                                <DropdownLink
                                    key={linkIndex}
                                    text={link.text}
                                    href={link.href}
                                    icon={link.icon}
                                    onClick={link.onClick}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

export default Dropdown;