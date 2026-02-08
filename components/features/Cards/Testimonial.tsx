import { Card, StarsRating } from '@/components/features';
import { Overlay } from '@/components/ui/Overlay';
import Image from 'next/image';

function Footer() {
  return (
    <div className="flex flex-col gap-2 px-3 py-2 pt-3">
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1">
          <p className="font-bold">
            <span className="text-foreground">4.5</span>
          </p>
          <StarsRating rating={4.5} />
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        <h5 className="flex max-w-24 gap-1 rounded-full bg-(--brand-warning)/10 p-1 px-2">
          <span className="font-medium">Service</span>
          <span className="font-semibold text-(--brand-warning)">4.5</span>
        </h5>
        <h5 className="flex max-w-24 gap-1 rounded-full bg-(--brand-warning)/10 p-1 px-2">
          <span className="font-medium">Room</span>
          <span className="font-semibold text-(--brand-warning)">4.5</span>
        </h5>
        <h5 className="flex max-w-24 gap-1 rounded-full bg-(--brand-warning)/10 p-1 px-2">
          <span className="font-medium">Location</span>
          <span className="font-semibold text-(--brand-warning)">4.5</span>
        </h5>
      </div>
    </div>
  );
}

export function Testimonial() {
  return (
    <Card bodyClassName="p-0!" Footer={<Footer />}>
      <figure className="relative aspect-3/3 overflow-hidden rounded-lg">
        <div className="absolute right-2 bottom-2 left-2 z-3 p-1 font-sans text-white">
          <h5 className="font-bold">Roman Feliz</h5>
          <p className="text-[0.70rem]">
            Excellent experience, it's like being at home, very clean, and the service is
            outstanding.
          </p>
        </div>
        <Overlay />
        <Image
          src="https://lh3.googleusercontent.com/a-/ALV-UjWHBG9KKgAAWTU2FzVa_u9WJbLIe_BtVVNY0VO6ZvdDF03lMk1CYA=w500-h500"
          fill
          alt="Testimonial"
          className="object-cover"
        />
      </figure>
    </Card>
  );
}
