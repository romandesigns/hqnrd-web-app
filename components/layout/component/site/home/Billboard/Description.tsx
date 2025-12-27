import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/Text';

export function Description() {
  return (
    <article className="flex flex-col gap-6 rounded-lg px-2 lg:p-6">
      <Text variant="p" align="center" transform="capitalize" weight="bold" size="xs">
        En el del Cibao — Salcedo, Provincia Hermanas Mirabal
      </Text>
      <Text variant="h1" align="center" transform="upper" className="mx-auto max-w-3xl">
        Serenidad, comodidad e higiene — todo en un mismo lugar
      </Text>
      <Text
        variant="small"
        align="center"
        transform="capitalize"
        className="text-muted-foreground"
        size="xs"
      >
        De viaje o de paseo, nuestras unidades cuentan con todo lo necesario para ofrecerte una
        experiencia única.
      </Text>
      <div className="mx-auto flex w-full max-w-md items-center justify-center gap-2">
        <Button className="flex-1">Login</Button>
        <Button className="flex-1" variant="outline">
          Habitaciones
        </Button>
      </div>
    </article>
  );
}
