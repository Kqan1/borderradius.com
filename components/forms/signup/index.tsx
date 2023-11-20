"use client"
import { useState } from "react";

export function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await fetch(`/api/registration/?name=${name}&password=${password}&email=${email}`);
    }


    return (
        <form onSubmit={onSubmit} className="flex flex-col">
            <label htmlFor="name">name</label>
            <input 
                type="text"
                id="name"
                value={name}
            />
            <label htmlFor="email">email</label>
            <input 
                type="email" 
                id="email" 
            />
            <label htmlFor="password">password</label>
            <input 
                type="password" 
                id="password"
                value={password}
            />
            <button type="submit">submit</button>
        </form>
    );
}
