import { IconDeviceMobile, IconZoomQuestion } from "@/components/icons";
import { Menu } from "../../core";

/**
 * Help component that displays a menu with help-related options.
 *
 * @param props - The component props
 * @param props.className - Optional CSS class name to apply to the article wrapper
 *
 * @returns A React component that renders a help menu with FAQ and mobile app download options
 *
 * @example
 * ```tsx
 * <Help className="my-custom-class" />
 * ```
 */

export function Help({ className }: { className?: string }) {
  const items = [
    {
      href: "#",
      label: "Frequently Asked Questions",
      isExternal: true,
      Icon: IconZoomQuestion,
      iconSize: 20,
    },
    {
      href: "#",
      label: "Download Mobile Version",
      isExternal: true,
      Icon: IconDeviceMobile,
      iconSize: 20,
    },
  ];
  return (
    <article className={className}>
      <Menu items={items} heading="Help" />
    </article>
  );
}
