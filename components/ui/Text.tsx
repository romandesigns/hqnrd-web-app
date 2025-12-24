import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const textVariants = tv({
  base: 'text-foreground font-sans',
  variants: {
    variant: {
      p: 'text-base leading-7',
      h1: 'text-4xl leading-17 !font-extrabold tracking-tight lg:text-5xl',
      h2: 'text-3xl !font-semibold tracking-tight',
      h3: 'text-2xl !font-semibold tracking-tight',
      h4: 'text-xl !font-semibold',
      h5: 'text-lg !font-medium',
      h6: 'text-base !font-medium uppercase tracking-wide',
      small: 'text-xs',
      muted: 'text-sm text-muted-foreground',
      lead: 'text-xl text-muted-foreground',
      caption: 'text-xs text-muted-foreground',
    },
    accent: {
      muted: 'text-muted',
      cool: 'text-(--brand-primary)',
      warm: 'text-(--brand-warning)',
      hot: 'text-(--brand-danger)',
      default: 'text-foreground',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      black: 'font-black',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
    },
    theme: {
      flat: '',
      badge:
        'inline-flex items-center rounded-full bg-current/10 px-2.5 py-0.5 text-xs font-medium',
      'badge-outline':
        'inline-flex items-center rounded-full border bg-current/10 border-current/40 px-2.5 py-0.5 text-xs font-medium',
      outline: 'rounded-md border border-current/30 px-3 py-1',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    transform: {
      upper: 'uppercase',
      lower: 'lowercase',
      capitalize: 'capitalize',
      normal: 'normal-case',
    },
  },
  defaultVariants: {
    size: 'base',
    variant: 'p',
    weight: 'normal',
    align: 'left',
    transform: 'normal',
    theme: 'flat',
  },
});

type TextVariants = VariantProps<typeof textVariants>;

interface TextProps extends React.HTMLAttributes<HTMLElement>, TextVariants {
  as?: keyof React.JSX.IntrinsicElements;
}

export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    { as, size, theme, accent, variant, weight, align, transform, className, children, ...props },
    ref,
  ) => {
    const Component = as ?? (variant?.startsWith('h') ? (variant as any) : 'p');

    return (
      <Component
        ref={ref}
        className={textVariants({
          size,
          theme,
          variant,
          accent,
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

Text.displayName = 'Text';
