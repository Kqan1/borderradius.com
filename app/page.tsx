import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { User } from "@/app/User";

export default async function Home() {    

    const session = await getServerSession(authOptions);

    return (
        <main>
            Page.tsx
            <h2>Server Session</h2>
            <pre>{JSON.stringify(session)}</pre>
            <h2>Client Session</h2>
            <User />
        </main>
    );
}