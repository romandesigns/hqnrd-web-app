import { Card, StarsRating } from '@/components/features';
import Image from 'next/image';

function Footer() {
  return (
    <div className="flex flex-col gap-2 px-3 py-2 pt-3">
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1">
          <span className="font-bold">4.5</span>
          <StarsRating rating={4.5} />
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        <h5 className="bg-secondary dark:bg-secondary/50 light:border flex max-w-24 gap-1 rounded-full p-1 px-2">
          <span>Service</span>
          <span className="font-semibold">4.5</span>
        </h5>
        <h5 className="bg-secondary dark:bg-secondary/50 light:border flex max-w-24 gap-1 rounded-full p-1 px-2">
          <span>Room</span>
          <span className="font-semibold">4.5</span>
        </h5>
        <h5 className="bg-secondary dark:bg-secondary/50 light:border flex max-w-24 gap-1 rounded-full p-1 px-2">
          <span>Location</span>
          <span className="font-semibold">4.5</span>
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
          <h5>Roman Feliz</h5>
          <p className="text-[0.75rem]">
            Excellent experience, it's like being at home, very clean, and the service is
            outstanding.
          </p>
        </div>
        <div className="absolute inset-0 z-2 bg-linear-to-b from-transparent via-transparent to-black/85" />
        <div className="absolute inset-0 z-1 bg-black/50" />
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
