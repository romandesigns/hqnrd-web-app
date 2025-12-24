import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const textVariants = tv({
  base: "text-foreground font-sans",
  variants: {
    variant: {
      p: "text-base leading-7",
      h1: "text-4xl leading-17 !font-extrabold tracking-tight lg:text-5xl",
      h2: "text-3xl !font-semibold tracking-tight",
      h3: "text-2xl !font-semibold tracking-tight",
      h4: "text-xl !font-semibold",
      h5: "text-lg !font-medium",
      h6: "text-base !font-medium uppercase tracking-wide",
      small: "text-sm",
      muted: "text-sm text-muted-foreground",
      lead: "text-xl text-muted-foreground",
      caption: "text-xs text-muted-foreground",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    transform: {
      upper: "uppercase",
      lower: "lowercase",
      capitalize: "capitalize",
      normal: "normal-case",
    },
  },
  defaultVariants: {
    variant: "p",
    weight: "normal",
    align: "left",
    transform: "normal",
  },
});

type TextVariants = VariantProps<typeof textVariants>;

interface TextProps extends React.HTMLAttributes<HTMLElement>, TextVariants {
  as?: keyof React.JSX.IntrinsicElements;
}

export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    { as, variant, weight, align, transform, className, children, ...props },
    ref,
  ) => {
    const Component = as ?? (variant?.startsWith("h") ? (variant as any) : "p");

    return (
      <Component
        ref={ref}
        className={textVariants({
          variant,
          weight,
          align,
          transform,
          className,
        })}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Text.displayName = "Text";
