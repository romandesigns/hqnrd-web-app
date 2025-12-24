import { TablerIcon } from '@tabler/icons-react';
import type { ReactNode } from 'react';

// RootLayout Props
// ==========================================
export interface RootLayoutProps {
  children: ReactNode;
  params: Promise<{ lang: Locale }>;
}

// SiteLayout Props
// ==========================================

export interface SiteLayoutProps {
  showNavBar?: boolean;
  showFooter?: boolean;
  children: React.ReactNode;
  lang?: Locale;
  navigationClassNames?: string;
  footerClassNames?: string;
  Header?: React.ComponentType<{ lang: Locale }>;
}

// Content Props
// ==========================================

export interface ContentProps {
  children?: React.ReactNode;
  className?: string;
}

// Menu Item and Menu Props
// ==========================================

export interface ExLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

// Menu Item and Menu Props
// ==========================================

export interface MenuItemProps {
  exLink?: boolean;
  href?: string;
  label?: string;
  Icon?: IconComponent;
  iconSize?: number;
  className?: string;
  children?: React.ReactNode;
}

export interface MenuProps {
  heading?: string;
  items?: MenuItemProps[];
  itemClassName?: string;
  className?: string;
  children?: React.ReactNode;
}

// Card Props
// ==========================================

export interface CardDefaultProps {
  Header?: React.ReactNode;
  children: React.ReactNode;
  Footer?: React.ReactNode;
  className?: string;
  headerClassName?: string;
  footerClassName?: string;
  bodyClassName?: string;
  horizontalPadding?: boolean;
  aroundPadding?: boolean;
  showElevatedSurface?: boolean;
}

// Lottie Player Props
// ==========================================

export interface LottiePlayerProps {
  item: any;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

// Lottie Player Props
// ==========================================

export interface ModalProps<T extends object> {
  title?: string;
  className?: string;
  triggerLabel: string;
  Component: React.ComponentType<T>;
  componentProps: T;
}

// TextAreaProps Props
// ==========================================

export interface TextAreaProps {
  name: string;
  maxLength?: number;
}

// SectionHeading Props
// ==========================================

export interface SectionHeadingProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  showBorders?: boolean;
  className?: string;
  postTitleClassName?: string;
}
