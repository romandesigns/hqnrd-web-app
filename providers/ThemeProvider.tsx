"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * ThemeProvider component that wraps the NextThemesProvider to provide theme functionality.
 *
 * @param {React.ComponentProps<typeof NextThemesProvider>} props - All props accepted by NextThemesProvider
 * @param {React.ReactNode} props.children - The child components to be wrapped by the theme provider
 * @returns {JSX.Element} The NextThemesProvider component with the provided children and props
 *
 * @example
 * ```tsx
 * <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
 *   <App />
 * </ThemeProvider>
 * ```
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
