import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { HQNRD } from "@/constants";
import type { Locale } from "@/i18n-config";
import images from "@/public/assets/hqnrd/images.json";

/**
 * Brand component that displays the hotel logo, name, and slogan as a link to the home page.
 *
 * @param {Object} props - Component props
 * @param {number} [props.width=26] - Width of the logo image in pixels
 * @param {number} [props.height=26] - Height of the logo image in pixels
 * @param {Locale} props.lang - Language/locale code for the link destination
 * @param {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} [props.headingLevel='h1'] - HTML heading tag level for the brand name
 * @param {string} [props.className=''] - Additional CSS classes to apply to the root element
 *
 * @returns {JSX.Element} A clickable brand component containing logo, hotel name, and slogan
 *
 * @example
 * ```tsx
 * <Brand lang="en" headingLevel="h2" width={32} height={32} />
 * ```
 */

export function Brand({
  width = 26,
  height = 26,
  lang = "en",
  headingLevel = "h1",
  className = "",
}: {
  width?: number;
  height?: number;
  lang: Locale;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}) {
  const HeadingTag = headingLevel;
  return (
    <Link
      href={`/${lang}`}
      className={clsx("flex items-center space-x-2 font-sans", className)}
    >
      <Image
        width={width}
        height={height}
        src={images.hotel_logo}
        alt={HQNRD.BRANDING.alt}
      />
      <div>
        <HeadingTag className="pt-1 text-[0.6rem] font-black uppercase">
          {HQNRD.BRANDING.LongName}
        </HeadingTag>
        <p className="text-muted-foreground text-[0.65rem] font-normal">
          {HQNRD.BRANDING.slogan}
        </p>
      </div>
    </Link>
  );
}
