import { ClerkProvider as ClerkNextProvider } from '@clerk/nextjs';
import { shadcn } from '@clerk/themes';
import { enUS, esES } from '@clerk/localizations';
import { Locale } from '@/i18n-config';

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  throw new Error('Missing NEXT_PUBLIC_CONVEX_URL in your .env file');
}

/**
 * A wrapper component that configures Clerk authentication provider with localization and theming.
 *
 * @param props - The component props
 * @param props.children - The child components to be wrapped by the Clerk provider
 * @param props.lang - The locale/language setting for the Clerk UI ('en' or other supported locales)
 *
 * @returns A configured ClerkNextProvider component wrapping the children
 *
 * @remarks
 * This component applies:
 * - Localization based on the provided language (English or Spanish)
 * - Custom shadcn theme
 * - Poppins font family from CSS variables
 * - Logo placement outside the authentication forms
 */

function ClerkProvider({ children, lang }: { children: React.ReactNode; lang: Locale }) {
  return (
    <ClerkNextProvider
      localization={lang === 'en' ? enUS : esES}
      appearance={{
        baseTheme: shadcn,
        variables: {
          fontFamily: 'var(--font-poppins-sans)',
        },
        layout: {
          logoPlacement: 'outside',
        },
      }}
    >
      {children}
    </ClerkNextProvider>
  );
}

export default ClerkProvider;
