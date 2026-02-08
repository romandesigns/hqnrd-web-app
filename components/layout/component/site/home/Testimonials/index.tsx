import { SectionHeading } from '@/components/features';
import { Content, Section } from '@/components/layout/core';
import { TestimonialsCarousel } from './TestimonialsCarousel';

export function Testimonials() {
  return (
    <Section py>
      <SectionHeading title="Our Guest's Voices" />
      <Content className="flex max-w-350!">
        <p className="mb-2 w-full px-2 text-right text-sm underline">All google reviews</p>
      </Content>
      <Content className="flex max-w-350! items-center justify-center gap-6 overflow-x-auto">
        <TestimonialsCarousel />
      </Content>
    </Section>
  );
}
