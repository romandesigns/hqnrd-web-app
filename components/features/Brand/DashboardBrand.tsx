import { HQNRD } from "@/constants";
import images from "@/public/assets/hqnrd/images.json";
import type { Locale } from "@/i18n-config";
import Link from "next/link";
import Image from "next/image";

/**
 * Dashboard brand component that displays the hotel logo, name, and slogan.
 *
 * @component
 * @param {Object} props - Component properties
 * @param {Locale} props.lang - The locale/language code used for navigation links
 *
 * @returns {JSX.Element} A link component containing the hotel branding elements including:
 * - Hotel logo image
 * - Hotel long name as heading
 * - Hotel slogan as descriptive text
 *
 * @example
 * ```tsx
 * <DashboardBrand lang="en" />
 * ```
 */

export function DashboardBrand({ lang }: { lang: Locale }) {
  return (
    <Link href={`/${lang}/dashboard`} className="font-sans">
      <Image
        src={images.hotel_logo}
        alt={HQNRD.BRANDING.alt}
        height={20}
        width={20}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <div className="text-base font-semibold">
        <h1 className="truncate pt-1 text-[0.6rem] font-black uppercase">
          {HQNRD.BRANDING.LongName}
        </h1>
        <p className="text-muted-foreground truncate text-[0.65rem] font-normal">
          {HQNRD.BRANDING.slogan}
        </p>
      </div>
    </Link>
  );
}
