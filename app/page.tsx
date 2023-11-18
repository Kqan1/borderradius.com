import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {    

    const session = await getServerSession(authOptions);

    return (
        <main>
            Page.tsx
            <h2>Server Session</h2>
            {JSON.stringify(session)}
        </main>
    );
};