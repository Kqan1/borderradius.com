import { LoginForm as Form } from "@/components/forms/login";

export default function login() {

    return (
        <main className="h-[calc(100vh-7.5rem)] w-full flex items-center justify-center">
            <div className="flex w-7/12 p-4 h-4/6 rounded border border-slate-900/30 dark:border-slate-50/10 ">
                <div className="w-5/12">
                    <Form />
                </div>
                <div className="w-7/12">
                    test
                </div>
            </div>
        </main>
    );
};