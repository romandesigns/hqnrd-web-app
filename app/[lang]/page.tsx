import { SiteLayout } from '@/components/layout';
import { Billboard } from '@/components/layout/component';
import { Main } from '@/components/layout/core';
import { HomePageProps } from '@/types';

export default async function Home({ params }: HomePageProps) {
  const { lang } = await params;

  return (
    <SiteLayout lang={lang} Header={Billboard} showFooter showNavBar>
      <Main className="">
        <h2>Main Content</h2>
        <section>
          <div>
            <div>Card</div>
          </div>
        </section>
      </Main>
    </SiteLayout>
  );
}
