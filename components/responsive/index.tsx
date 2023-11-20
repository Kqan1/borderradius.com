export default function ResponsiveMeter() {
    if (process.env.NODE_ENV !== 'production') {
        return (
            <div className="px-2 py-1 rounded bg-white dark:bg-slate-700 fixed top-16 left-6">
                <p className="block md:hidden">sm</p>
                <p className="hidden md:max-lg:block">md</p>
                <p className="hidden lg:max-xl:block">lg</p>
                <p className="hidden xl:max-2xl:block">xl</p>
                <p className="hidden 2xl:block">2xl</p>
            </div>
        );
    };
};