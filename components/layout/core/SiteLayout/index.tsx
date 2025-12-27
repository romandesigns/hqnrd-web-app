import { SiteLayoutProps } from '@/types';
import { Footer, Navigation } from '../';

export function SiteLayout({
  showNavBar = false,
  showFooter = false,
  children,
  lang = 'en',
  navigationClassNames,
  footerClassNames,
  Header,
}: SiteLayoutProps) {
  return (
    <>
      {showNavBar && <Navigation lang={lang} className={navigationClassNames} />}
      {Header && <Header lang={lang} />}
      {children}
      {showFooter && <Footer lang={lang} className={footerClassNames} />}
    </>
  );
}
