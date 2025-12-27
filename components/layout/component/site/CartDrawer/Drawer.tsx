import { auth, currentUser } from '@clerk/nextjs/server';
import { IconMenuDeep } from '@tabler/icons-react';
import clsx from 'clsx';
import Link from 'next/link';
import { ContactWidget } from '@/components/features';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import type { Locale } from '@/i18n-config';
import { SignOutButton } from '@/components/ui/signOut';

export async function DrawerMenu({ lang, className }: { lang: Locale; className?: string }) {
  const { isAuthenticated } = await auth();
  const user = await currentUser();
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size={'icon'} variant={'bordered'} className="text-md relative">
          <IconMenuDeep />
        </Button>
      </DrawerTrigger>
      <DrawerContent className={clsx(`h-100vh max-h-100vh! m-0 px-4 font-sans`, className)}>
        <DrawerHeader className="flex items-center justify-center">
          <div>
            <div className="my-4 rounded-md p-1 shadow dark:shadow-black">
              <Avatar className="h-20 w-20 rounded-sm">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>
                  <DrawerTitle>CN</DrawerTitle>
                </AvatarFallback>
              </Avatar>
            </div>
            <p className="text-muted-foreground text-sm">
              {isAuthenticated ? `${user?.firstName} ${user?.lastName}` : 'Web Visitor'}{' '}
            </p>
          </div>
        </DrawerHeader>
        <DrawerFooter className="mt-0 h-full w-full">
          <ul className="flex h-full flex-col items-stretch justify-center gap-4 px-4 py-4">
            <li>
              <DrawerClose className="w-full" asChild>
                <Link
                  href={`/${lang}`}
                  className={clsx(buttonVariants({ variant: 'outline', size: 'block' }))}
                >
                  Inicio
                </Link>
              </DrawerClose>
            </li>
            <li>
              <DrawerClose className="w-full" asChild>
                <Link
                  href={`/${lang}/habitaciones`}
                  className={clsx(buttonVariants({ variant: 'outline', size: 'block' }))}
                >
                  Habitaciones
                </Link>
              </DrawerClose>
            </li>
            {isAuthenticated && (
              <li>
                <DrawerClose className="w-full" asChild>
                  <Link
                    href={`/${lang}/dashboard`}
                    className={clsx(buttonVariants({ variant: 'outline', size: 'block' }))}
                  >
                    Dashboard
                  </Link>
                </DrawerClose>
              </li>
            )}
            <li className="py-4">
              <ContactWidget lang={lang} btnVariant={'bordered'} />
            </li>
            {isAuthenticated ? (
              <li className="mt-auto">
                <SignOutButton lang={lang} btnVariant="default">
                  Cerrar Sesión
                </SignOutButton>
              </li>
            ) : (
              <>
                <li className="mt-auto">
                  <Button size="block" asChild>
                    <Link href={`/${lang}/iniciar-sesion`}>Iniciar Sesión</Link>
                  </Button>
                </li>
                <li>
                  <Button size="block" asChild variant={'link'} className="text-xs font-normal">
                    <Link href={`/${lang}/crear-cuenta`}>
                      No tienes cuenta aun?{' '}
                      <span className="font-semibold underline">Registrate</span>
                    </Link>
                  </Button>
                </li>
              </>
            )}
          </ul>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
