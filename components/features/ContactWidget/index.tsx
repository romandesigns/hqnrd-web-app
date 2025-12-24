import { ExLink } from "@/components/features/ExLink";
import { LocaleDialog } from "@/components/features/LocaleDialog";
import { Button } from "@/components/ui/button";
import { HQNRD } from "@/constants";
import type { Locale } from "@/i18n-config";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import { Mail, Map, MessageCircle } from "lucide-react";

/**
 * A contact widget component that displays multiple contact method buttons.
 *
 * @param props - The component props
 * @param props.lang - The locale for the component
 * @param props.direction - The layout direction of the contact buttons. Can be 'horizontal' or 'vertical'. Defaults to 'horizontal'
 * @param props.showBorders - Whether to show decorative borders at the top and bottom of the widget
 * @param props.className - Additional CSS classes to apply to the root container
 * @param props.btnVariant - The visual variant to apply to all buttons
 * @param props.btnClassNames - Additional CSS classes to apply to all buttons
 *
 * @returns A contact widget with buttons for Google Maps, WhatsApp, locale selection, and email
 */

export function ContactWidget({
  lang,
  direction = "horizontal",
  showBorders,
  className,
  btnVariant,
  btnClassNames,
}: {
  lang: Locale;
  direction?: "horizontal" | "vertical";
  showBorders?: boolean;
  className?: string;
  btnVariant?: VariantProps<typeof Button>["variant"];
  btnClassNames?: string;
}) {
  return (
    <div className={cn("flex w-full flex-col", className)}>
      {showBorders && <div className="bg-secondary h-0.5 w-full" />}
      <ul
        className={cn(
          `flex items-center justify-center gap-2 space-x-0.5 ${
            direction === "horizontal" ? "flex-row" : "flex-col"
          }`,
        )}
      >
        <li className="block">
          <Button
            size="icon"
            variant={btnVariant}
            className={cn(btnClassNames)}
            asChild
          >
            <ExLink href={HQNRD.CONTACT.googleMap}>
              <Map />
            </ExLink>
          </Button>
        </li>
        <li className="block">
          <Button
            size="icon"
            variant={btnVariant}
            className={cn(btnClassNames)}
          >
            <ExLink href={HQNRD.CONTACT.whatsapp}>
              <MessageCircle />
            </ExLink>
          </Button>
        </li>
        <li className="block">
          <LocaleDialog
            lang={lang}
            btnVariant={btnVariant}
            className={cn(btnClassNames)}
          />
        </li>
        <li className="block">
          <Button
            size="icon"
            variant={btnVariant}
            className={cn(btnClassNames)}
          >
            <ExLink href={HQNRD.CONTACT.email}>
              <Mail />
            </ExLink>
          </Button>
        </li>
      </ul>
      {showBorders && <div className="bg-secondary h-0.5 w-full" />}
    </div>
  );
}
