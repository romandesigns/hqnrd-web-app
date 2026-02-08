import { SectionHeading } from '@/components/features';
import { Discount, Room } from '@/components/features/Cards';
import { Content, Section } from '@/components/layout/core';
import images from '@/public/assets/hqnrd/images.json';

export function Trending() {
  return (
    <Section py>
      <SectionHeading title="Our Discounts" />
      <Content className="flex flex-col items-stretch justify-center gap-8 p-4 py-2 md:flex-row">
        <Room lang="en" />
        <Room lang="en" />
        <Room lang="en" />
        <Room lang="en" />
      </Content>
    </Section>
  );
}
