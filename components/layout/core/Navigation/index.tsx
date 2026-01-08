import { Locale } from '@/i18n-config';
import { Content } from '../Content';
import { Brand, Cart, MobileMenu, ThemeToggle } from '@/components/features';
import { Text } from '@/components/ui/Text';
import Link from 'next/link';
import { IconHouse, IconLayoutDashboard, IconDoor } from '@/components/icons';
import { Button } from '@/components/ui/button';

export function Navigation({ lang, className }: { lang: Locale; className?: string }) {
  return (
    <nav className="bg-background/75 sticky top-0 z-50 backdrop-blur-sm">
      <Content className="flex items-center">
        <Brand lang={lang} />
        <ul className="ml-auto flex items-center gap-4 py-2">
          <li className="block lg:hidden">
            <ThemeToggle btnVariant="ghost" />
          </li>
          <li className="hidden lg:block">
            <Link href={`/${lang}`}>
              <Button asChild size={'sm'} variant={'ghost'}>
                <Text size="sm" className="flex items-center gap-2">
                  <IconHouse size={16} />
                  Inicio
                </Text>
              </Button>
            </Link>
          </li>
          <li className="hidden lg:block">
            <Link href={`/${lang}/panel`}>
              <Button asChild size={'sm'} variant={'ghost'}>
                <Text size="sm" className="flex items-center gap-2">
                  <IconLayoutDashboard size={16} />
                  Panel
                </Text>
              </Button>
            </Link>
          </li>
          <li className="hidden lg:block">
            <Link href={`/${lang}/habitaciones`}>
              <Button asChild size={'sm'} variant={'ghost'}>
                <Text size="sm" className="flex items-center gap-2">
                  <IconDoor size={16} />
                  Habitaciones
                </Text>
              </Button>
            </Link>
          </li>
          <li className="pointer lg:mr-3">
            <Cart lang={lang} />
          </li>
          <li className="lg:hidden">
            <MobileMenu lang={lang} />
          </li>
          <li className="hidden lg:block">
            <div className="mr-2 block h-full w-2 bg-red-500" />
            <ThemeToggle />
          </li>
        </ul>
      </Content>
    </nav>
  );
}
