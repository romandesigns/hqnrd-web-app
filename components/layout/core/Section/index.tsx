import clsx from 'clsx';

/**
 * A reusable section component that wraps content in a semantic HTML `<section>` element.
 *
 * @param props - The component props
 * @param props.className - Optional CSS class name(s) to apply to the section element
 * @param props.children - React nodes to be rendered inside the section
 *
 * @returns A section element containing the provided children with optional styling
 *
 * @example
 * ```tsx
 * <Section className="my-custom-class">
 *   <h2>Section Title</h2>
 *   <p>Section content goes here</p>
 * </Section>
 * ```
 */

export const Section = ({
  className,
  children,
  py = false,
}: {
  className?: string;
  children: React.ReactNode;
  py?: boolean;
}) => {
  return <section className={clsx(`${py ? 'py-14' : ''}`, className)}>{children}</section>;
};
