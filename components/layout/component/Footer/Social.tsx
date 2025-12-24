import { IconBrandFacebook, IconBrandInstagram } from '@/components/icons';
import { Menu } from '../../core';
import { HQNRD } from '@/constants';

/**
 * Social component that displays social media links in a menu format.
 *
 * @component
 * @param {Object} props - The component props
 * @param {string} [props.className] - Optional CSS class name to apply to the root article element
 *
 * @returns {JSX.Element} An article element containing a Menu component with Facebook and Instagram links
 *
 * @example
 * ```tsx
 * <Social className="footer-social" />
 * ```
 */

export function Social({ className }: { className?: string }) {
  const items = [
    {
      href: HQNRD.SOCIAL.FACEBOOK.URL,
      label: HQNRD.SOCIAL.FACEBOOK.LABEL,
      isExternal: true,
      Icon: IconBrandFacebook,
      iconSize: 20,
    },
    {
      href: HQNRD.SOCIAL.INSTAGRAM.URL,
      label: HQNRD.SOCIAL.INSTAGRAM.LABEL,
      isExternal: true,
      Icon: IconBrandInstagram,
      iconSize: 20,
    },
  ];
  return (
    <article className={className}>
      <Menu items={items} heading="Social" />
    </article>
  );
}
