import { ExLinkProps } from '@/types';

/**
 * ExLink component that renders an anchor tag with target="_blank" and security attributes.
 *
 * @param props - The component props
 * @param props.href - The URL to link to
 * @param props.children - The content to display inside the link
 * @param props.className - Optional CSS class name(s) to apply to the anchor element
 *
 * @returns A React anchor element that opens in a new tab with security measures (noopener noreferrer)
 *
 * @example
 * ```tsx
 * <ExLink href="https://example.com" className="text-blue-500">
 *   Visit Example
 * </ExLink>
 * ```
 */

export function ExLink({ href, children, className }: ExLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
