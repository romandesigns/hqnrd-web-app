'use client';

import { i18n, Locale } from '@/i18n-config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import clsx from 'clsx';
import { HQNRD } from '@/constants';

export const redirectedPathName = (locale: Locale, pathName: string) => {
  if (!pathName) return '/';
  const segments = pathName.split('/');
  segments[1] = locale;
  return segments.join('/');
};

/**
 * A locale switcher component that displays available language options as a grid of clickable cards.
 *
 * @component
 * @param {Object} props - The component props
 * @param {string} props.lang - The currently active language/locale code
 *
 * @returns {JSX.Element} A grid of locale options with flags and labels, where the active locale is highlighted
 *
 * @example
 * ```tsx
 * <LocaleSwitcher lang="en" />
 * ```
 *
 * @remarks
 * - Displays flags for US (English) and DO (Spanish) locales
 * - Active locale is highlighted with brand primary color and border
 * - Each locale option is clickable and redirects to the corresponding localized path
 * - Uses a 2-column grid layout with hover effects
 */

export function LocaleSwitcher({ lang }: { lang: string }) {
  const pathName = usePathname();
  return (
    <ul className="grid grid-cols-2 grid-rows-[10rem] gap-6 py-6">
      {i18n.locales.map((locale) => {
        return (
          <li
            key={locale}
            className={twMerge(
              `h-full w-full rounded-md hover:border`,
              clsx({
                'text-(--brand-primary)': locale === lang,
                'border border-(--brand-primary) bg-(--brand-primary)/10': locale === lang,
              }),
            )}
          >
            <Link href={redirectedPathName(locale, pathName)}>
              <div className="flex h-full w-full flex-col items-center justify-center space-y-2.5 font-sans">
                <div className="flex w-full flex-col items-center justify-center rounded-md border border-transparent px-4 transition-all duration-200 ease-in-out">
                  <Image
                    src={`/${HQNRD.LOCALEFLAGS}/${locale === 'en' ? 'us' : 'do'}.svg`}
                    width={120}
                    height={120}
                    alt="Image"
                    className="object-cover"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                </div>
                <p className="font-medium">{locale === 'en' ? 'English' : 'Spanish'}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
