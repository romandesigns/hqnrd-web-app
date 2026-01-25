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
    { label: 'Bed', Icon: IconBed, className: 'md:row-span-2 md:aspect-auto' },
    { label: 'Briefcase', Icon: IconBriefcase, className: 'md:aspect-auto' },
    { label: 'Home', Icon: IconHome, className: 'md:row-span-2 md:aspect-auto' },
    { label: 'Users', Icon: IconUsers, className: 'md:aspect-auto' },
    { label: 'Hotel Service', Icon: IconHotelService, className: 'md:aspect-auto' },
    {
      label: 'Building',
      Icon: IconBuilding,
      className: 'md:col-start-2 md:col-end-4 md:aspect-auto',
    },
  ];

  return (
    <Section py>
      <SectionHeading title="Categories" />
      <Content className="grid max-w-350! grid-cols-1 gap-2 sm:grid-cols-2 md:h-200 md:grid-cols-3 md:grid-rows-3 md:gap-4">
        {categories.map(({ label, Icon, className }, index) => (
          <Category key={index} className={className} Icon={Icon} label={label} />
        ))}
      </Content>
    </Section>
  );
}
