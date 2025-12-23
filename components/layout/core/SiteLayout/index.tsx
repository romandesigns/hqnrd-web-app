import type React from 'react';
import { Footer } from '../..';
import { SiteLayoutProps } from '@/types';

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
      {/* {showNavBar && <Navigation lang={lang} className={navigationClassNames} />} */}
      {/* {Header && <Header lang={lang} />} */}
      {children}
      {showFooter && <Footer lang={lang} className={footerClassNames} />}
    </>
  );
}
