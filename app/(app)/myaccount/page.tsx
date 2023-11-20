import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function myaccound() {

    const session = await getServerSession(authOptions);

    const pp = session?.user?.pp ?? "/pp.svg";
    const ppalt = session?.user?.username ?? "cannot find the image";

    const banner = session?.user?.banner ?? "/banner.jpg"; 
    const banneralt = session?.user?.username ?? "cannot find the banner";

    return (
        <main className="h-full w-full flex">
            <div className="h-full w-5/12 flex items-center flex-col py-16
            border-r border-slate-700 dark:border-slate-200
            ">
                <div className="w-11/12 h-1/2">
                    <Image 
                        src={pp}
                        alt={ppalt}
                        width={100}
                        height={100}
                        className="aspect-square h-56 w-56 ml-4 rounded-full"
                    />
                    <div className="-z-50 relative bottom-1/2 h-32 w-full">
                        <Image 
                            src={banner}
                            alt={banneralt}
                            fill
                            className="rounded-xl"
                        />
                    </div>
                </div>
                <div className="w-11/12 h-1/2 shadow-xl">
                    test
                </div>
            </div>
            <div className="h-full w-7/12 flex">
                test
            </div>
        </main>
    );
};