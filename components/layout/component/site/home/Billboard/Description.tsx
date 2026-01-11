import { LottiePlayer, StarsRating } from '@/components/features';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/Text';
import { google } from '@/public/assets/icons';

export function Description() {
  return (
    <article className="flex flex-col gap-4 rounded-lg px-2 lg:p-6 lg:py-10">
      <div className="mx-auto flex w-full max-w-md items-center justify-center gap-2">
        <LottiePlayer item={google} autoplay loop className="h-8 w-8" />
        <div>
          <p className="font-black">4.5</p>
          <StarsRating rating={4.5} />
        </div>
      </div>
      <Text variant="p" align="center" transform="capitalize" weight="bold" size="xs">
        En el del Cibao — Salcedo, Provincia Hermanas Mirabal
      </Text>
      <Text variant="h1" align="center" transform="upper" className="mx-auto max-w-3xl py-4">
        Serenidad, comodidad e higiene — todo en un mismo lugar
      </Text>
      <div className="mx-auto flex w-full max-w-md items-center justify-center gap-2">
        <Button className="flex-1">Iniciar Session</Button>
        <Button className="flex-1" variant="outline">
          Habitaciones
        </Button>
      </div>
    </article>
  );
}
