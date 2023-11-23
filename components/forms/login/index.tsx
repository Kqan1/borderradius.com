// @ts-nocheck
"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
        <form
            onSubmit={onSubmit}
            className="flex flex-col justify-center h-full w-full px-8 space-y-3"
        >
            <Input 
                variant={"default"} 
                Size={"full"} 
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder=""
                required
                LabelText="email"
            />

            <Input 
                variant={"default"} 
                Size={"full"} 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder=""
                required
                autoComplete=""
                LabelText="password"
            />

            <Button type="submit">Submit</Button>
            <Button variant={"destructive"}>Log in with Google</Button>
            <Button variant={"subtle"}>Log in with Google</Button>
        </form>
    );
};