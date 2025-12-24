import { MenuItemProps } from "@/types";
import Link from "next/link";
import clsx from "clsx";
import { ExLink } from "@/components/features";

/**
 * A menu list item component that renders a navigation link with optional icon and custom content.
 *
 * @param props - The component props
 * @param props.exLink - If true, renders an external link component instead of internal Link. Defaults to false.
 * @param props.iconSize - Size of the icon in pixels. Defaults to 18.
 * @param props.href - The URL the link points to. Defaults to '#'.
 * @param props.Icon - Optional icon component to display before the label.
 * @param props.label - The text label to display for the menu item.
 * @param props.className - Additional CSS classes to apply to the list item.
 * @param props.children - Optional children elements to render inside the list item.
 *
 * @returns A list item element with icon, label, and optional children
 *
 * @example
 * ```tsx
 * <MenuItem
 *   Icon={HomeIcon}
 *   label="Home"
 *   href="/home"
 * />
 * ```
 */

export function MenuItem({
  exLink = false,
  iconSize = 18,
  href = "#",
  Icon,
  label,
  className,
  children,
}: MenuItemProps) {
  return (
    <li
      className={clsx(
        "flex items-center space-x-2 text-xs lg:text-xs",
        className,
      )}
    >
      {Icon && (
        <span data-icon>
          <Icon size={iconSize} aria-hidden="true" />
        </span>
      )}
      {label && href && exLink && <ExLink href={href}>{label}</ExLink>}
      {label && href && !exLink && <Link href={href}>{label}</Link>}
      <p data-label>{label}</p>
      {children ? children : null}
    </li>
  );
}
