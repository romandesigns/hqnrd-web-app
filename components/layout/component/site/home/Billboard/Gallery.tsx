import Image from 'next/image';
import { images } from '@/public/assets/hqnrd/images.json';
import { getDominantPaletteFromPublicPath } from '@/lib/getDominantPaletteFromPublicPath ';

export async function Gallery() {
  //   const publicPath = images[15];
  //   const colors = await getDominantPaletteFromPublicPath(publicPath, 5);

  return (
    <article className="mx-auto grid h-86 w-full grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-lg p-2 py-8 sm:h-120 lg:aspect-video lg:h-10/12 lg:max-w-380 lg:gap-4 lg:p-4 dark:border-gray-800">
      {/* Left tall */}
      <div className="relative col-span-2 col-start-1 row-span-2 row-start-1 overflow-hidden rounded-tl-lg rounded-bl-lg lg:col-span-1 lg:row-span-2">
        <Image src={images[15]} alt="Sample 1" fill className="h-full w-full object-cover" />
      </div>
      {/* Top middle */}
      <div className="relative col-span-2 col-start-3 overflow-hidden max-lg:rounded-tr-lg lg:col-span-1">
        <Image src={images[4]} alt="Sample 1" fill className="h-full w-full object-cover" />
      </div>
      {/* Right big */}
      <div className="relative col-span-full col-start-3 overflow-hidden max-lg:rounded-br-lg lg:col-span-2 lg:row-span-2 lg:rounded-tr-lg lg:rounded-br-lg">
        <Image src={images[5]} alt="Sample 1" fill className="h-full w-full object-cover" />
      </div>
      {/* Bottom middle */}
      <div className="relative hidden overflow-hidden max-lg:col-span-full max-lg:col-start-2 max-lg:row-start-2 lg:col-span-1 lg:block">
        <Image src={images[13]} alt="Sample 1" fill className="h-full w-full object-cover" />
      </div>
    </article>
  );
}
