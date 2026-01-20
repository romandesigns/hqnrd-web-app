import { SectionHeading } from '@/components/features';
import { Discount } from '@/components/features/Cards';
import { Content, Section } from '@/components/layout/core';
import images from '@/public/assets/hqnrd/images.json';

export function Discounts() {
  const discounts = {
    shortStay: 5,
    longStay: 20,
  };

  return (
    <Section py>
      <SectionHeading title="Our Discounts" />
      <Content className="flex flex-col items-stretch justify-center gap-8 p-4 py-2 md:flex-row">
        <Discount
          discountPercent={discounts.shortStay}
          ctaText={`Available when booking ${discounts.shortStay} days or more`}
          src={images.images[0]}
        />
        <Discount
          discountPercent={discounts.longStay}
          ctaText={`Available when booking ${discounts.longStay} days or more`}
          src={images.images[1]}
          blurDataURL={images.images[-2]}
        />
      </Content>
    </Section>
  );
}
