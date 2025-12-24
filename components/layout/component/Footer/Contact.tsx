import { IconBrandWhatsapp, IconMail, IconMapPin } from '@/components/icons';
import { HQNRD } from '@/constants';
import { Menu } from '../..';

/**
 * Contact component that displays contact information for HQNRD.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.className] - Optional CSS class name for styling the article container
 *
 * @returns {JSX.Element} An article element containing a Menu component with contact details including:
 * - WhatsApp phone number
 * - Email address
 * - Physical address with Google Maps link
 *
 * @example
 * ```tsx
 * <Contact className="footer-details" />
 * ```
 */

export function Contact({ className }: { className?: string }) {
  const items = [
    {
      href: HQNRD.CONTACT.WHATSAPP.URL,
      label: HQNRD.CONTACT.WHATSAPP.LABEL,
      exLink: true,
      Icon: IconBrandWhatsapp,
      iconSize: 20,
    },
    {
      href: HQNRD.CONTACT.EMAIL.URL,
      label: HQNRD.CONTACT.EMAIL.LABEL,
      exLink: true,
      Icon: IconMail,
      iconSize: 20,
    },
    {
      href: HQNRD.CONTACT.GOOGLE_MAP.URL,
      label: HQNRD.CONTACT.ADDRESS.LABEL,
      exLink: true,
      Icon: IconMapPin,
      iconSize: 20,
    },
  ];
  return (
    <article className={className}>
      <Menu items={items} heading="Contact" />
    </article>
  );
}
