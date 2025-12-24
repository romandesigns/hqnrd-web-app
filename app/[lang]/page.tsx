import { SiteLayout } from '@/components/layout';
import { Text } from '@/components/ui/Text';
import { Locale } from '@/i18n-config';
import Image from 'next/image';

export default async function Home({ params }: { params: { lang: Locale } }) {
  const { lang } = await params;

  return (
    <SiteLayout lang={lang} showFooter>
      <div className="flex min-h-screen items-center justify-center font-sans">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between px-16 py-32 sm:items-start">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <Text as="h1" variant="h1" transform="upper">
              To get started, edit the page.tsx file.
            </Text>
            <Text as="p" variant="small" transform="capitalize">
              Looking for a starting
              <Text as="small" variant="muted" className="mx-2">
                point or more
              </Text>
              instructions? Head over to
            </Text>
          </div>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <a
              className="bg-foreground text-background md:w-158px flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={16}
                height={16}
              />
              Deploy Now
            </a>
            <a
              className="border-black/.08 hover:bg-black/.04 md:w-158px flex h-12 w-full items-center justify-center rounded-full border border-solid px-5 transition-colors hover:border-transparent dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
        </main>
      </div>
    </SiteLayout>
  );
}
