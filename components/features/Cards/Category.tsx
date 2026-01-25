import { Card } from '@/components/features';
import { CategoryProps } from '@/types';

export function Category({ className, Icon, label }: CategoryProps) {
  return (
    <Card className={`aspect-4/3 rounded-lg ${className}`}>
      <div>{label}</div>
    </Card>
  );
}
