import { IconBrandAirbnb, IconBuildingSkyscraper } from "@/components/icons";
import { Menu } from "../..";

/**
 * Affiliates component that displays a list of affiliate links for Hotel Quinto Nivel RD.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Optional CSS class name to apply to the article wrapper
 *
 * @returns {JSX.Element} An article element containing a Menu component with affiliate links
 *
 * @example
 * ```tsx
 * <Affiliates className="footer-affiliates" />
 * ```
 */

export function Affiliates({ className }: { className?: string }) {
  const items = [
    {
      href: "#",
      label: "Hotel Quinto Nivel RD - AirB&B",
      isExternal: true,
      Icon: IconBrandAirbnb,
      iconSize: 20,
    },
    {
      href: "https://www.airbnb.com/rooms/plus/23068908",
      label: "Hotel Quinto Nivel RD - Expedia",
      isExternal: true,
      Icon: IconBuildingSkyscraper,
      iconSize: 20,
    },
  ];
  return (
    <article className={className}>
      <Menu items={items} heading="Affiliates" />
    </article>
  );
}
