import { Content, Header } from '@/components/layout/core';
import { Gallery } from './Gallery';
import { Description } from './Description';
import { ContactWidget } from '@/components/features';
import { Locale } from '@/i18n-config';

export function Billboard({ lang }: { lang: Locale }) {
  return (
    <Header>
      <Content className="relative p-6 md:p-10">
        {/* Aspect-ratio wrapper */}
        <div className="mx-auto">
          {/* Scales proportionally */}
          <div className="grid w-full grid-rows-[auto_auto_2fr] gap-4">
            {/* TEXT ROW */}
            <Description />
            <ContactWidget className="hidden md:block" lang={lang} btnVariant={'outline'} />
            {/* GALLERY ROW */}
            <Gallery />
          </div>
        </div>
      </Content>
    </Header>
  );
}
