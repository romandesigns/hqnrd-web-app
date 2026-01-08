import { Locale } from '@/i18n-config';
import Link from 'next/link';

export function RoomMenuItem({
  title,
  href,
  description,
  lang,
}: {
  title: Record<Locale, string>;
  href: string;
  description: Record<Locale, string>;
  lang: Locale;
}) {
  return (
    <Link href={href} className="hover:bg-accent m-2 flex gap-2 rounded-md p-2 font-sans">
      <figure className="relative h-22 w-full rounded-sm bg-red-500" />
      <div className="flex h-full w-full flex-col justify-start">
        {/* title */}
        <p className="text-xs font-bold uppercase">{title[lang]}</p>
        {/* description */}
        <p className="text-muted-foreground mt-1 text-xs leading-relaxed font-normal">
          {description[lang]}
        </p>
      </div>
    </Link>
  );
}
