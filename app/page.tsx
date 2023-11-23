"use client"
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Home() {    

    const { data: session } = useSession();
    const router = useRouter();
    if ( session === null ) {
        router.push("/landing");
    };

    return (
        <main>
            {/* Page.tsx */}
            {/* <h2>Server Session</h2> */}
            {/* {JSON.stringify(session)} */}
        </main>
    );
};