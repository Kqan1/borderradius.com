import { HTMLAttributes, forwardRef } from "react"
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputWrapperVariants = cva(
    "relative font-normal"
    , {
    variants: {
        variant: {
            default:
                "rounded bg-white border-2 border-zinc-500/70",
            label: 
                "",
            ghost: 
                "bg-transparent",
        },
        Size: {
            default: "",
        },
    },
    defaultVariants: {
        variant: "default",
        Size: "default",
    },
});

export interface inputWrapperProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof inputWrapperVariants> {}

const InputWrapper = forwardRef<HTMLDivElement, inputWrapperProps>(
    ({ className, children, variant, Size, ...props }, ref) => {

        return (
            <div 
                className={cn(inputWrapperVariants({ variant, Size, className }))} 
                ref={ref}
                {...props}
            >
                { children }
            </div>
        );
    }
);

InputWrapper.displayName = "InputWrapper";

export { InputWrapper, inputWrapperVariants };