import { SiteLayout } from '@/components/layout';
import { Billboard } from '@/components/layout/component';
import { Testimonials, Discounts } from '@/components/layout/component/site/home';
import { Main } from '@/components/layout/core';
import { HomePageProps } from '@/types';

export default async function Home({ params }: HomePageProps) {
  const { lang } = await params;

  return (
    <SiteLayout lang={lang} Header={Billboard} showFooter showNavBar>
      <Main className="">
        <Testimonials />
        <Discounts />
      </Main>
    </SiteLayout>
  );
}
