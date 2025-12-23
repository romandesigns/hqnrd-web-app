import { ContentProps } from '@/types';
import clsx from 'clsx';

/**
 * Content component that wraps children with consistent layout constraints and spacing.
 *
 * Provides a centered container with maximum width, horizontal padding that adjusts
 * responsively (smaller on mobile, larger on desktop screens).
 *
 * @param {ContentProps} props - The component props
 * @param {React.ReactNode} props.children - The child elements to be rendered within the content container
 * @param {string} [props.className] - Optional additional CSS classes to merge with the default styles
 *
 * @returns {JSX.Element} A div element with responsive layout classes and the provided children
 *
 * @example
 * ```tsx
 * <Content className="my-custom-class">
 *   <p>Your content here</p>
 * </Content>
 * ```
 */

export function Content({ children, className }: ContentProps) {
  return <div className={clsx('max-width mx-auto px-2 lg:px-20', className)}>{children}</div>;
}
