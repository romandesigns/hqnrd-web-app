export interface SiteLayoutProps {
    showNavBar?: boolean;
    showFooter?: boolean;
    children: React.ReactNode;
    lang?: Locale;
    navigationClassNames?: string;
    footerClassNames?: string;
    Header?: React.ComponentType<{ lang: Locale }>;
}

export interface ContentProps {
    children?: React.ReactNode;
    className?: string;
}
