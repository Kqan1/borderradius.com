"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const LoginForm = () => {
    const router = useRouter();

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/myaccound";

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
        } catch (error: any) {}
    };

    return (
        <form onSubmit={onSubmit} className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
                className=""
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
            />
            <label htmlFor="password">password</label>
            <input
                className=""
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                autoComplete=""
            />
            <span>error: {error}</span>
            <button type="submit">submit</button>
        </form>
    );
};