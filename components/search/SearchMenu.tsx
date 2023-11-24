import { forwardRef } from "react";

const SearchMenu = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div className="fixed inset-0 h-screen w-screen flex items-center justify-center bg-zinc-600/30">
            <div
                className="h-5/6 w-4/6 border-2
                border-black"
                ref={ref}
                {...props}
            >
                
            </div>
        </div>
    );
});

SearchMenu.displayName = "SearchMenu";

export default SearchMenu;