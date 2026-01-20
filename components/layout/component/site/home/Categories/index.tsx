import { Card, SectionHeading } from '@/components/features';
import { Discount } from '@/components/features/Cards';
import { Content, Section } from '@/components/layout/core';
import images from '@/public/assets/hqnrd/images.json';

export function Categories() {
  return (
    <Section py>
      <SectionHeading title="Categories" />
      <Content className="grid max-w-350! grid-cols-1 gap-2 sm:grid-cols-2 md:h-200 md:grid-cols-3 md:grid-rows-3 md:gap-4">
        <Card className="aspect-4/3 rounded-lg bg-red-500 md:row-span-2 md:aspect-auto" />
        <Card className="aspect-4/3 rounded-lg bg-pink-500 md:aspect-auto" />
        <Card className="aspect-4/3 rounded-lg bg-yellow-500 md:row-span-2 md:aspect-auto" />
        <Card className="aspect-4/3 rounded-lg bg-green-500 md:aspect-auto" />
        <Card className="aspect-4/3 rounded-lg bg-blue-500 md:aspect-auto" />
        <Card className="aspect-4/3 rounded-lg bg-purple-500 md:col-start-2 md:col-end-4 md:aspect-auto" />
      </Content>
    </Section>
  );
}
