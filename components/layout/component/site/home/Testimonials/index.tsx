import { SectionHeading } from '@/components/features';
import { Testimonial } from '@/components/features/Cards';
import { Content, Section } from '@/components/layout/core';

export function Testimonials() {
  return (
    <Section py>
      <SectionHeading title="Our Guest's Voices" />

      <Content className="flex max-w-350!">
        <p className="w-full text-right text-sm underline">All google reviews</p>
      </Content>
      <Content className="flex max-w-350! gap-6 overflow-x-auto">
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </Content>
    </Section>
  );
}
