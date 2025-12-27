import clsx from 'clsx';

/**
 * Header component that renders a semantic HTML `<header>` element.
 *
 * This component serves as a wrapper for the header content area of the application,
 * providing consistent styling through className composition.
 *
 * @param props - The component props
 * @param props.className - Optional additional CSS classes to apply to the header element
 * @param props.children - React nodes to be rendered within the header element
 *
 * @returns A header HTML element containing the provided children with combined class names
 *
 * @example
 * ```tsx
 * <Header className="container">
 *   <h1>Welcome</h1>
 *   <p>Content goes here</p>
 * </Header>
 * ```
 */

export const Header = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <header className={clsx(``, className)}>{children}</header>;
};
