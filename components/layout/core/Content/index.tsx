import { ContentProps } from "@/types";
import clsx from "clsx";


export function Content({ children, className }: ContentProps) {
    return (
        <div className={clsx("max-width mx-auto px-2 lg:px-20", className)}>
            {children}
        </div>
    );
}
