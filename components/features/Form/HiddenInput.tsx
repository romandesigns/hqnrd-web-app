import { Input } from "@/components/ui/input";
import type { Locale } from "@/i18n-config";

/**
 * A hidden input component that renders an invisible, read-only input field.
 *
 * @param props - The component props
 * @param props.name - The name attribute for the input field
 * @param props.defaultValue - The default value for the input field, can be a Locale, string, or number
 *
 * @returns A hidden, read-only Input component
 *
 * @example
 * ```tsx
 * <HiddenInput name="userId" defaultValue="123" />
 * <HiddenInput name="locale" defaultValue={currentLocale} />
 * ```
 */

export function HiddenInput({
  name,
  defaultValue,
}: {
  name: string;
  defaultValue: Locale | string | number;
}) {
  return (
    <Input
      readOnly
      className="hidden"
      type="text"
      name={name}
      defaultValue={defaultValue}
    />
  );
}
