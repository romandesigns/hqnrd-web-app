import clsx from "clsx";
import { Brand, Card } from "@/components/features";
import type { Locale } from "@/i18n-config";
import { Affiliates } from "./Affiliates";
import { Details } from "./Details";
import { GoogleMap } from "./GoogleMap";
import { Help } from "./Help";
import { Social } from "./Social";
import { HQNRD } from "@/constants";

/**
 * Footer component that displays the main footer section of the application.
 *
 * This component renders a footer with the following sections:
 * - Brand/logo header
 * - Four column grid containing: Details, Social, Help, and Affiliates sections
 * - Google Map integration
 * - Development slogan in the footer
 *
 * @param props - The component props
 * @param props.lang - The locale/language setting for internationalization
 * @param props.className - Optional additional CSS classes to apply to the footer element
 *
 * @returns A footer element containing a Card component with nested sections
 *
 * @example
 * ```tsx
 * <Footer lang="en" className="custom-footer" />
 * ```
 */

export const Footer = ({
  lang,
  className,
}: {
  lang: Locale;
  className?: string;
}) => {
  return (
    <footer className={clsx(`px-2 py-10 pb-2`, className)}>
      <Card
        horizontalPadding
        bodyClassName="font-sans [&_ul_li]:hover:underline"
        className="max-w-95rem mx-auto"
        Header={
          <div className="flex items-center justify-start p-2 lg:px-12">
            <Brand lang={lang} />
          </div>
        }
        Footer={
          <div className="py-4 text-center text-[0.5rem] font-bold text-(--brand-warning) uppercase">
            {HQNRD.DEVSLOGAN}
          </div>
        }
      >
        <div className="grid grid-cols-1 gap-y-14 py-8 pb-0 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <Details />
          <Social />
          <Help />
          <Affiliates />
        </div>
        <div className="gap-y-14 py-8 pb-0 lg:px-10">
          <GoogleMap className="w-full md:max-w-md" />
        </div>
      </Card>
    </footer>
  );
};
