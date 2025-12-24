import type React from 'react';
import { cn } from '@/lib/utils';
import { CardDefaultProps } from '@/types';

const PADDING_RATIO = 1.75;

function isHeaderVisible(Header: React.ReactNode) {
  // Only filter out null, undefined, or false
  return Header !== null && Header !== undefined && Header !== false;
}

/**
 * A flexible card component with optional header, footer, and customizable styling.
 *
 * @param {CardDefaultProps} props - The component props
 * @param {React.ReactNode} props.Header - Optional header content for the card
 * @param {React.ReactNode} props.children - Main content to be displayed in the card body
 * @param {React.ReactNode} props.Footer - Optional footer content for the card
 * @param {string} [props.className] - Additional CSS classes for the card container
 * @param {string} [props.headerClassName] - Additional CSS classes for the header element
 * @param {string} [props.footerClassName] - Additional CSS classes for the footer element
 * @param {string} [props.bodyClassName] - Additional CSS classes for the body/article element
 * @param {boolean} [props.horizontalPadding=false] - When true, applies horizontal padding to the card
 * @param {boolean} [props.aroundPadding=false] - When true, applies padding around all sides of the card
 * @param {boolean} [props.showElevatedSurface=true] - When true, applies elevated surface styling to the body
 *
 * @returns {JSX.Element} A card component with configurable sections and styling
 *
 * @example
 * ```tsx
 * <Card
 *   Header={<h2>Card Title</h2>}
 *   Footer={<span>Card footer text</span>}
 *   horizontalPadding={true}
 *   showElevatedSurface={true}
 * >
 *   <p>Card content goes here</p>
 * </Card>
 * ```
 */
export function Card({
  Header,
  children,
  Footer,
  className,
  headerClassName,
  footerClassName,
  bodyClassName,
  horizontalPadding = false,
  aroundPadding = false,
  showElevatedSurface = true,
}: CardDefaultProps) {
  return (
    <div
      className={cn(
        `bg-sidebar/80 dark:bg-popover/50 flex-1 overflow-hidden rounded-lg p-0.75 dark:pb-1 ${horizontalPadding ? `px-${PADDING_RATIO}` : ''} ${aroundPadding ? `p-${PADDING_RATIO}` : ''}`,
        className,
      )}
    >
      {isHeaderVisible(Header) && <header className={cn('p-2', headerClassName)}>{Header}</header>}
      <article className={cn(`${showElevatedSurface ? 'elevated-surface' : ''}`, bodyClassName)}>
        {children}
      </article>
      {Footer && (
        <footer className={cn('text-muted-foreground text-xs', footerClassName)}>{Footer}</footer>
      )}
    </div>
  );
}
