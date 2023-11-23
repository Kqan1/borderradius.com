export default function ResponsiveMeter() {
    if (process.env.NODE_ENV !== 'production') {
        return (
            <div className="px-3 py-1 rounded bg-white dark:bg-zinc-700 fixed top-0 left-0 z-50">
                <p className="block md:hidden">sm</p>
                <p className="hidden md:max-lg:block">md</p>
                <p className="hidden lg:max-xl:block">lg</p>
                <p className="hidden xl:max-2xl:block">xl</p>
                <p className="hidden 2xl:block">2xl</p>
            </div>
        );
    };
};