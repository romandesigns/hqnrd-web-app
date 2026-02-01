import { Card } from '@/components/features';
import { Button } from '@/components/ui/button';
import { CategoryProps } from '@/types';
import Image from 'next/image';
import images from '@/public/assets/hqnrd/images.json';
import { Overlay } from '@/components/ui/Overlay';
import { Badge } from '@/components/ui/badge';

export function Category({ className, Icon, label }: CategoryProps) {
  return (
    <Card
      Footer={<Button size={'block'}>Select</Button>}
      className={`flex flex-col rounded-lg ${className}`}
      footerClassName="p-4 px-4"
      bodyClassName="flex-1 flex items-end justify-start relative overflow-hidden p-4"
    >
      <div className="z-4 flex w-full flex-col justify-between align-bottom">
        <h3 className="mb-1 text-xl font-black uppercase">{label}</h3>
        <div className="flex w-full items-center justify-between font-semibold">
          <p className="text-muted-foreground text-xs">
            <Badge>2</Badge> Max Guests Per Unit
          </p>
          <p className="text-muted-foreground text-xs">
            <Badge>5</Badge> Units Available
          </p>
        </div>
      </div>
      <Overlay />
      <Image fill src={images.images[5]} alt={label} className="object-cover" />
    </Card>
  );
}
