import { Search } from 'lucide-react';
import Form from 'next/form';
import { CalendarRange, Card } from '@/components/features';
import { Content } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { InputNumber } from '@/components/ui/InputNumber';
import type { Locale } from '@/i18n-config';
import { Section } from '@/components/layout/core';
import clsx from 'clsx';

export function RoomsFilter({ lang, className }: { lang: Locale; className?: string }) {
  const CardHeader = () => (
    <div className="flex flex-col items-start justify-start gap-1">
      <h2 className="text-md font-semibold">Search Rooms</h2>
    </div>
  );

  return (
    <Section className={clsx(className)}>
      <Content>
        <Card
          aroundPadding
          className="mx-auto max-w-2xl pb-1 font-sans"
          Header={<CardHeader />}
          headerClassName="bg-muted dark:bg-background"
        >
          <Form
            action={`/${lang}/habitaciones`}
            className="grid h-full w-full grid-cols-1 grid-rows-2 items-center justify-center gap-0 rounded-lg sm:grid-cols-2 sm:grid-rows-1 sm:gap-4 lg:grid-cols-2 lg:grid-rows-1 lg:gap-5"
          >
            <div className="flex items-center justify-center gap-4 max-[754px]:gap-8">
              <InputNumber
                name="adultsCount"
                inputNumberLabel="Adults"
                iconName="FaUser"
                iconSize={13}
              />
              <InputNumber
                name="childrensCount"
                inputNumberLabel="Children"
                iconName="FaChild"
                iconSize={16}
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-center sm:gap-4 lg:flex-row lg:gap-4">
              <CalendarRange className="flex-1" />
              <Button className="mt-5 flex p-5 sm:hidden lg:flex lg:p-4.25" type="submit">
                Search
              </Button>
            </div>
          </Form>
        </Card>
      </Content>
    </Section>
  );
}
