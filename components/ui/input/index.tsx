import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
    "pl-1 peer"
    , {
    variants: {
        variant: {
            default:
                "rounded border-2 outline-none bg-transparent border-zinc-900/20 dark:border-zinc-50/30",
        },
        Size: {
            default: "w-64 h-10",
            full: "w-full h-10",
        },
    },
    defaultVariants: {
        variant: "default",
        Size: "default",
    },
});

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
    LabelText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, children, variant, Size, LabelText, ...props }, ref) => {

        return (
            <div className={"relative pt-2"} ref={ref}>
                <input
                    className={cn(inputVariants({ variant, Size, className }))}
                    {...props}
                />
                <label className={"absolute left-2 top-1/2 px-1 pointer-events-none text-zinc-700 dark:text-zinc-200 bg-white dark:bg-transparent -translate-y-[120%] peer-placeholder-shown:-translate-y-1/3 transition-all"}>{LabelText}</label>
            </div>
        );
    }
);

Input.displayName = "Input";

export { Input, inputVariants };