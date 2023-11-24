import { forwardRef } from "react";

const SearchMenu = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div className="fixed inset-0 h-screen w-screen z-40 flex items-center justify-center bg-zinc-700/80">
            <div className="h-5/6 w-5/6 flex space-x-4" ref={ref} {...props} >
                
                {/* 2 horizontonal Parts */}
                <div className="h-full w-4/12 space-y-4">
                    {/* 2 vertical parts */}
                
                    <div className="h-1/6 rounded bg-zinc-200 border-2 border-zinc-500/70">
                        test1
                    </div>
                    
                    <div className="h-[calc(83.333333%-1rem)] rounded bg-zinc-200 border-2 border-zinc-500/70">
                        test2
                    </div>
                
                </div>
                
                <div className="h-full w-8/12 rounded bg-zinc-200 border-2 border-zinc-500/70">
                    test3
                </div>
            
            </div>
        </div>
    );
});

SearchMenu.displayName = "SearchMenu";

export default SearchMenu;