import { Menu } from "../../core";

/**
 * A component that displays an embedded Google Maps iframe showing the location of Hotel Quinto Nivel RD.
 *
 * @component
 * @param {Object} props - The component props
 * @param {string} [props.className] - Optional CSS class name to apply to the article wrapper element
 *
 * @returns {JSX.Element} An article element containing a Menu component with an embedded Google Maps iframe
 *
 * @example
 * ```tsx
 * <GoogleMap className="my-custom-class" />
 * ```
 */

export function GoogleMap({ className }: { className?: string }) {
  return (
    <article className={className}>
      <Menu
        heading="Find Us in Google Maps"
        itemClassName="mt-4 h-52 w-full overflow-hidden rounded-md"
      >
        <iframe
          title="Hotel Quinto Nivel RD Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.735731141567!2d-70.4231043!3d19.3805922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eae296e50e06303%3A0x4141e3bda5d73fec!2sHotel%20Quinto%20Nivel%20RD!5e0!3m2!1sen!2sus!4v1712705679198!5m2!1sen!2sus"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen={true}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Menu>
    </article>
  );
}
