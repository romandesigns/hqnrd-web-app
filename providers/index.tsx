'use client';

import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { ThemeProvider } from './ThemeProvider';
import { useAuth } from '@clerk/nextjs';
import { ConvexReactClient } from 'convex/react';
import ClerkProvider from './ClerkProvider';
import { Locale } from '@/i18n-config';

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  throw new Error('Missing NEXT_PUBLIC_CONVEX_URL in your .env file');
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

/**
 * Root provider component that wraps the application with authentication, database, and theme providers.
 *
 * This component sets up the following providers in order:
 * - ClerkProvider: Handles user authentication and session management
 * - ConvexProviderWithClerk: Integrates Convex real-time database with Clerk authentication
 * - ThemeProvider: Manages application theming with system preference support
 *
 * @param props - The component props
 * @param props.children - Child components to be wrapped by the providers
 * @param props.lang - The locale/language setting for the Clerk provider
 *
 * @returns A nested provider tree wrapping the children components
 *
 * @example
 * ```tsx
 * <Providers lang="en">
 *   <App />
 * </Providers>
 * ```
 */

function Providers({ children, lang }: { children: React.ReactNode; lang: Locale }) {
  return (
    <ClerkProvider lang={lang}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}

export default Providers;
