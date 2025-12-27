'use client';

import { useClerk } from '@clerk/nextjs';
import type { Locale } from '@/i18n-config';
import { Button } from './button';

export const SignOutButton = ({
  lang,
  children,
  className,
}: {
  lang: Locale;
  children?: React.ReactNode;
  className?: string;
  btnVariant?: 'ghost' | 'primary' | 'secondary' | 'bordered' | 'default';
}) => {
  const { signOut } = useClerk();

  return (
    <Button
      size={'block'}
      onClick={() => signOut({ redirectUrl: `/${lang}` })}
      className={`${className}`}
    >
      {children}
    </Button>
  );
};
