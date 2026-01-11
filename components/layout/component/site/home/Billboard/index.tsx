import { Content, Header } from '@/components/layout/core';
import { Gallery } from './Gallery';
import { Description } from './Description';
import { ContactWidget, RoomsFilter } from '@/components/features';
import { Locale } from '@/i18n-config';

export function Billboard({ lang }: { lang: Locale }) {
  return (
    <Header>
      <Content className="relative grid pt-6">
        {/* Aspect-ratio wrapper */}
        <div className="py-4">
          <Description />
          {/* CONTACT WIDGET */}
          <ContactWidget className="hidden md:block" lang={lang} btnVariant={'outline'} />
        </div>
        {/* GALLERY ROW */}
        <Gallery />
        <RoomsFilter lang={lang} className="relative z-1 md:-mt-14 lg:-mt-34 xl:-mt-48" />
      </Content>
    </Header>
  );
}
