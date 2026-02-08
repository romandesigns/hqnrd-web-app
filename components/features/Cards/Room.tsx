import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Locale } from '@/i18n-config';
import images from '@/public/assets/hqnrd/images.json';
import { Card } from './Default';
import { FeaturedList } from '@/components/layout/core';
import { Share } from '@/components/ui/share';
import {
  IconAirConditioning,
  IconTeapot,
  IconPropeller,
  IconToolsKitchen3,
  IconWheelchair,
} from '@/components/icons';

function ItemsCounter({ count, label }: { count?: number; label?: string }) {
  return (
    <div className="flex items-center justify-between gap-2 font-sans text-xs">
      <div className="flex text-[0.6rem]">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-(--brand-warning)/6 font-bold text-(--brand-warning)">
          {count}
        </span>
        <span className="flex items-center rounded-full bg-(--brand-warning)/4 p-0.5 px-2 font-semibold text-(--brand-warning)">
          {label}
        </span>
      </div>
    </div>
  );
}

function CategoryFooter({
  title,
  pricePerNight,
  amenities,
  totalAmenities,
  lang,
  slug,
  unitNumber,
}: {
  title: string;
  pricePerNight: number;
  lang: Locale;
  unitNumber?: string;
  slug: string;
  amenities: {
    label: string;
    Icon: React.ComponentType<{ size?: number }>;
    iconSize?: number;
  }[];
  totalAmenities: number;
}) {
  const features = [
    {
      label: 'Private Bathroom',
    },
    {
      label: 'Intercom',
    },
    {
      label: 'Kitchen',
    },
    {
      label: '24.50 SQF',
    },
    {
      label: 'Balcony',
    },
  ];

  return (
    <>
      <div className="relative z-2 flex flex-col gap-1 pb-2">
        <div className="flex items-center justify-between">
          <h3 className="text-md flex flex-col font-bold text-(--brand-warning) uppercase lg:text-sm">
            {title}
          </h3>
          <p className="text-primary text-sm font-bold lg:text-xs">
            {pricePerNight}
            /Night
          </p>
        </div>
        <div className="flex items-center gap-2 py-2">
          <FeaturedList items={amenities} />
          <span className="inline-block font-semibold">
            ..{totalAmenities - amenities.length} +
          </span>
        </div>
        <FeaturedList
          gap={1}
          theme="label-badge"
          accent="muted"
          items={features}
          showLabel
          itemClassName="p-0.5 px-1.5 [&_span[data-label]]:text-[0.6rem] bg-muted backdrop-blur-2xl rounded-full"
        />
      </div>
      <Button
        size="block"
        asChild
        className="border-brand-primary font-sans font-bold uppercase shadow"
      >
        <Link href={`/${lang}/habitacion/${slug}/${String(unitNumber)}`}>Explore</Link>
      </Button>
    </>
  );
}

export async function Room({ lang }: { lang: Locale }) {
  const amenityItems = [
    {
      label: 'Air Conditioning',
      Icon: IconAirConditioning,
    },
    {
      label: 'Coffee Maker',
      Icon: IconTeapot,
    },
    {
      label: 'Ceiling Fan',
      Icon: IconPropeller,
    },
    {
      label: 'Kitchenette',
      Icon: IconToolsKitchen3,
    },
    {
      label: 'Wheelchair Accessible',
      Icon: IconWheelchair,
    },
  ];
  return (
    <Card
      bodyClassName="p-0! overflow-hidden"
      className="keen-slider__slide p-1 font-sans"
      Footer={
        <CategoryFooter
          lang={lang}
          pricePerNight={1200}
          title={'Doble Cama'}
          amenities={amenityItems}
          totalAmenities={amenityItems.length}
          slug={'doble-cama'}
          unitNumber={'205'}
        />
      }
      footerClassName="p-2"
      aroundPadding
    >
      <div>
        <figure className="relative flex h-52 items-end justify-start overflow-hidden rounded-sm">
          <div className="absolute inset-0 z-1 bg-linear-0 from-neutral-950/85 via-neutral-950/50 to-neutral-950/20" />
          <Share className="text-primary-foreground dark:text-primary absolute top-2 right-2 z-10 hover:bg-white/20" />
          <Image src={images.images[2]} alt="Category" className="object-cover" fill />
        </figure>
      </div>
    </Card>
  );
}
