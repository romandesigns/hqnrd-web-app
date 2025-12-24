import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Locale } from "@/i18n-config";
import { cx, VariantProps } from "class-variance-authority";
import { Languages } from "lucide-react";
import { LocaleSwitcher } from "../LocaleSwitcher";

/**
 * A dialog component that allows users to switch between different locales/languages.
 *
 * @param props - The component props
 * @param props.lang - The current locale/language setting
 * @param props.btnVariant - The visual variant style for the trigger button
 * @param props.className - Optional additional CSS classes to apply to the button
 *
 * @returns A Dialog component with a language switcher button trigger that opens
 * a modal containing locale selection options
 *
 * @example
 * ```tsx
 * <LocaleDialog
 *   lang="en"
 *   btnVariant="outline"
 *   className="custom-class"
 * />
 * ```
 */

export function LocaleDialog({
  lang,
  btnVariant,
  className,
}: {
  lang: Locale;
  btnVariant: VariantProps<typeof Button>["variant"];
  className?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild className="font-sans">
        <Button variant={btnVariant} size="icon" className={cx(className)}>
          <Languages />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-425px">
        <DialogHeader>
          <DialogTitle>Select Idiom</DialogTitle>
        </DialogHeader>
        <LocaleSwitcher lang={lang} />
      </DialogContent>
    </Dialog>
  );
}
