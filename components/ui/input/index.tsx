import { InputHTMLAttributes, forwardRef } from "react"
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
    "peer p-2 placeholder:px-1 placeholder:font-semibold placeholder-zinc-700/80 text-zinc-700 dark:text-zinc-200"
    , {
    variants: {
        variant: {
            default:
                "rounded border outline-none bg-transparent border-zinc-900/60 dark:border-zinc-50/20",
            light:
                "rounded border-2 outline-none bg-transparent border-zinc-900/20 dark:border-zinc-50/30",
            ghost: 
                "outline-none bg-transparent",
        },
        Size: {
            default: "w-full h-10",
            thin: "w-full h-7",
            xl: "w-full h-auto text-2xl px-4",
        },
    },
    defaultVariants: {
        variant: "default",
        Size: "default",
    },
});

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, children, variant, Size, ...props }, ref) => {

        return (
            <input
                className={cn(inputVariants({ variant, Size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);

Input.displayName = "Input";

export { Input, inputVariants };