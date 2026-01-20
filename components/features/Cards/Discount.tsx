import Image from 'next/image';
import { HQNRD } from '@/constants';
import { Card } from '@/components/features';

export function Discount({
  discountPercent,
  ctaText,
  src,
  blurDataURL,
}: {
  discountPercent?: number;
  ctaText?: string;
  src: string;
  blurDataURL?: string;
}) {
  return (
    <Card
      aroundPadding
      Header={
        <h3 className="p-4 py-2 text-center text-sm! font-black uppercase">Discount Available</h3>
      }
      Footer={
        <p className="w-full py-4 text-center text-xs font-semibold text-(--brand-warning)">
          {ctaText}
        </p>
      }
      bodyClassName="p-0!"
      className="w-full max-w-lg"
    >
      <div className="aspect-4/3 flex-1">
        <div className="relative h-full flex-1 p-2 lg:p-4">
          <div className="bg-background/40 relative z-2 flex h-full w-full items-center justify-center overflow-hidden rounded-md backdrop-blur-xl">
            <p className="z-1 text-9xl font-black">{discountPercent ?? 0}%</p>
          </div>
          <Image
            src={src}
            fill
            alt={`${HQNRD.BRANDING.LongName}-Discount`}
            className="relative z-1 rounded-md"
            placeholder={blurDataURL ? 'blur' : 'empty'}
            blurDataURL={blurDataURL}
          />
          <div className="from-sidebar bg-sidebar/20 to-sidebar absolute inset-0 overflow-hidden rounded-md bg-linear-to-t" />
        </div>
      </div>
    </Card>
  );
}
