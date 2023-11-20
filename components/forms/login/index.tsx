"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const LoginForm = () => {
    const router = useRouter();

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/myaccount";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await signIn("credentials", {
                redirect: false,
                email,
                password,
                callbackUrl,
            });
            if (!res?.error) {
                router.push(callbackUrl);
            } else {
                setError("error");
            }
        } catch (error: any) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={onSubmit} className="flex flex-col justify-center h-full w-full px-8 space-y-8">
            <div className="relative">
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder=""
                    required
                    className="rounded w-full h-8 placeholder-shown:"
                />
                <span className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none">Email</span>
            </div>

            <div className="relative">
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder=""
                    required
                    className="rounded w-full h-8 peer"
                />
                <span className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none peer-placeholder-shown:translate-x-1/2">password</span>
            </div>

            <button type="submit">submit</button>
            <button>Log in with Google</button>
            <button>Log in with Github</button>
        </form>
    );
};