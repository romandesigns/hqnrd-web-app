import { Locale } from '@/i18n-config';
import { Content } from '../Content';
import { Brand, ThemeToggle } from '@/components/features';
import { Text } from '@/components/ui/Text';
import Link from 'next/link';
import { IconHouse, IconLayoutDashboard } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/Icon';

export function Navigation({ lang, className }: { lang: Locale; className?: string }) {
  return (
    <nav className="bg-background/75 sticky top-0 z-50 backdrop-blur-sm">
      <Content className="flex items-center">
        <Brand lang={lang} />
        <ul className="ml-auto flex items-center gap-8 py-2">
          <li>
            <Link href={`/${lang}`}>
              <Button asChild size={'sm'} variant={'ghost'}>
                <Text size="sm" className="flex items-center gap-2">
                  <IconHouse size={16} />
                  Inicio
                </Text>
              </Button>
            </Link>
          </li>
          <li>
            <Link href={`/${lang}/panel`}>
              <Button asChild size={'sm'} variant={'ghost'}>
                <Text size="sm" className="flex items-center gap-2">
                  <IconLayoutDashboard size={16} />
                  Panel
                </Text>
              </Button>
            </Link>
          </li>
          <li>
            <Link href={`/${lang}/dashboard`}>
              <Text size="sm">Portal</Text>
            </Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </Content>
    </nav>
  );
}
