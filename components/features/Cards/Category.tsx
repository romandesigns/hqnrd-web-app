import { Card, Views } from '@/components/features';
import { Button } from '@/components/ui/button';
import { Overlay } from '@/components/ui/Overlay';
import { Share } from '@/components/ui/share';
import images from '@/public/assets/hqnrd/images.json';
import { CategoryProps } from '@/types';
import Image from 'next/image';

export function Category({ className, Icon, label }: CategoryProps) {
  return (
    <Card
      Footer={
        <Button size={'block'} variant="secondary" className="shadow shadow-black/20">
          Select
        </Button>
      }
      className={`flex flex-col rounded-lg ${className}`}
      footerClassName="p-4 px-4"
      bodyClassName="flex-1 flex items-end justify-start relative overflow-hidden p-4 relative"
    >
      <div className="absolute top-2 right-2! z-1">
        <Views />
      </div>
      <div className="z-4 flex w-full flex-col justify-between align-bottom">
        <div className="text-muted-foreground flex flex-col items-start text-xs font-semibold">
          <h3 className="translate-y-1.5 text-xl font-black text-(--brand-warning) uppercase">
            {label}
          </h3>
          <div className="flex w-full items-center justify-start gap-3">
            <p>
              <span className="mr-1 text-white">2</span> Max Per Unit
            </p>
            <p>
              <span className="mr-1 text-white">5</span> Units Available
            </p>
            <Share className="text-primary-foreground dark:text-primary ml-auto hover:bg-white/20" />
          </div>
        </div>
      </div>
      <Overlay />
      <Image fill src={images.images[5]} alt={label} className="object-cover" />
    </Card>
  );
}
