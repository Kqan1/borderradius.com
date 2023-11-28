import { LabelHTMLAttributes, forwardRef } from "react"
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const LabelVariants = cva(
    "absolute left-2 top-1/2 pl-1 pointer-events-none text-zinc-700 dark:text-zinc-200 -translate-y-[130%] peer-placeholder-shown:-translate-y-1/2 transition-all"
    , {
    variants: {
        variant: {
            default:
                "bg-white dark:bg-transparent",
            light: 
                "",
            ghost: 
                "bg-transparent",
        },
        size: {
            default: "",
            full: "",
            thin: "",
            xl: "text-xl",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement>, VariantProps<typeof LabelVariants> {}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
    ({ className, children, variant, size, ...props }, ref) => {

        return (
            <label
                className={cn(LabelVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            >
                { children }
            </label>
        );
    }
);

Label.displayName = "Label";

export { Label, LabelVariants };