import clsx from 'clsx';

/**
 * Main component that renders a semantic HTML `<main>` element.
 *
 * This component serves as a wrapper for the main content area of the application,
 * providing consistent styling through className composition.
 *
 * @param props - The component props
 * @param props.className - Optional additional CSS classes to apply to the main element
 * @param props.children - React nodes to be rendered within the main element
 *
 * @returns A main HTML element containing the provided children with combined class names
 *
 * @example
 * ```tsx
 * <Main className="container">
 *   <h1>Welcome</h1>
 *   <p>Content goes here</p>
 * </Main>
 * ```
 */

export const Main = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <main className={clsx(``, className)}>{children}</main>;
};
