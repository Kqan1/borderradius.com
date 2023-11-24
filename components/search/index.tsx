import { useEffect, useRef, useState } from "react";
import SearchMenu from "./SearchMenu";

export default function Search() {
    const [searchMenuOpen, setSearchMenuOpen] = useState(false);

    const searchIconRef = useRef(null);
    const menuRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleOutsideClick(e: MouseEvent) {
            if ( menuRef.current && !menuRef.current.contains(e.target as Node) && searchIconRef.current !== e.target ) {
                setSearchMenuOpen(false);
            };
        };

        window.addEventListener("click", handleOutsideClick);
        return () => window.removeEventListener("click", handleOutsideClick);
    }, [searchIconRef, menuRef]);

    return (
        <div className="h-4/6">
            <svg className="h-full p-0.5 aspect-square cursor-pointer fill-zinc-700/50 hover:fill-zinc-500 dark:fill-zinc-200/50 hover:dark:fill-zinc-300 transition-colors"
                onClick={() => setSearchMenuOpen(!searchMenuOpen)}
                ref={searchIconRef} viewBox="0 0 512 512"><path ref={searchIconRef} d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
            {searchMenuOpen && <SearchMenu ref={menuRef} />}
        </div>
    );
};