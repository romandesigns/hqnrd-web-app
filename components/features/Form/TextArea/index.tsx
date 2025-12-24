"use client";

import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { TextAreaProps } from "@/types";

/**
 * A textarea component with character count validation and display.
 *
 * @param {TextAreaProps} props - The component props
 * @param {string} props.name - The name and id attribute for the textarea element
 * @param {number} [props.maxLength=150] - Maximum number of characters allowed (default: 150)
 *
 * @returns {JSX.Element} A textarea with a character counter that shows current/max length
 *
 * @example
 * ```tsx
 * <TextArea name="description" maxLength={200} />
 * ```
 *
 * @remarks
 * - The component maintains internal state for the textarea value
 * - Input is prevented once maxLength is reached
 * - Counter text turns to danger color when limit is reached
 * - The counter is linked to the textarea via aria-describedby for accessibility
 */

export function TextArea({ name, maxLength = 150 }: TextAreaProps) {
  const [value, setValue] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= maxLength) {
      setValue(newValue);
    }
  };

  return (
    <div className="flex flex-col space-y-2 font-sans">
      <Textarea
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className="min-h-24"
        aria-describedby={`${name}-counter`}
      />

      <div
        id={`${name}-counter`}
        className={`text-right text-xs ${
          value.length === maxLength
            ? "text-(--brand-danger)"
            : "text-muted-foreground"
        }`}
      >
        {value.length} / {maxLength}
      </div>
    </div>
  );
}
