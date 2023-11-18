import { LoginForm as Form } from "@/app/(auth)/login/form";

export default function login() {

    return (
        <main className="h-[calc(100vh-8rem)] w-full flex items-center">
            <div className="h-full w-8/12 p-4 flex items-center justify-center">
                <span className="text-login font-black font-mono">
                    LOG IN🤗
                </span>
            </div>
            <div className="h-full w-4/12 p-4 flex items-center justify-center">
                <Form />
            </div>
        </main>
    );
};