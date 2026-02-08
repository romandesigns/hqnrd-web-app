import { Card, SectionHeading } from '@/components/features';
import { Category } from '@/components/features/Cards';
import { Content, Section } from '@/components/layout/core';
import images from '@/public/assets/hqnrd/images.json';
import {
  IconBed,
  IconBriefcase,
  IconHome,
  IconUsers,
  IconHotelService,
  IconBuilding,
} from '@/components/icons';
import { CategoryProps } from '@/types';

export function Categories() {
  const categories: CategoryProps[] = [
    { label: 'Basicas', Icon: IconBed },
    { label: 'Doble Camas', Icon: IconBriefcase },
    { label: 'Standards', Icon: IconHome },
    { label: 'Familiares', Icon: IconUsers },
    { label: 'Ejecutivas', Icon: IconHotelService },
    {
      label: 'Habitacion Doble',
      Icon: IconBuilding,
    },
  ];

  return (
    <Section py>
      <SectionHeading title="Categorías" />
      <Content className="grid max-w-350! grid-cols-1 gap-2 sm:grid-cols-2 md:h-150 md:grid-cols-3 md:grid-rows-2 md:gap-4">
        {categories.map(({ label, Icon, className }, index) => (
          <Category key={index} className={className} Icon={Icon} label={label} />
        ))}
      </Content>
    </Section>
  );
}
