import type { Icon as TablerIcon } from '@tabler/icons-react';
import clsx from 'clsx';

interface ItemProps {
  label?: string;
  Icon?: TablerIcon;
  iconSize?: number;
  className?: string;
  count?: number;
}

interface FeaturedListProps {
  heading?: string;
  items?: ItemProps[];
  itemClassName?: string;
  className?: string;
  theme?: 'label-badge' | 'label' | 'icon-label';
  accent?: 'primary' | 'secondary' | 'muted';
  showLabel?: boolean;
  gap?: number;
}

export function Item({
  Icon,
  label,
  className,
  iconSize = 18,
  showLabel,
}: ItemProps & { showLabel?: boolean }) {
  return (
    <li className={clsx('flex items-center space-x-2 text-xs lg:text-xs', className)}>
      {Icon && (
        <span data-icon>
          <Icon size={iconSize} aria-hidden="true" />
        </span>
      )}
      {label && showLabel && <span data-label>{label}</span>}
    </li>
  );
}

export function FeaturedList({
  items,
  heading,
  itemClassName,
  theme,
  accent,
  showLabel,
  gap = 2,
}: FeaturedListProps) {
  return (
    <div className="text-muted-foreground space-y-4 font-sans">
      {heading && <h4 className="text-primary mb-6 text-xs font-bold uppercase">{heading}</h4>}
      <ul
        className={clsx(`flex gap-${gap}`, {
          '[&_li]:bg-muted': accent === 'muted' && theme === 'label-badge',
          'text-(--brand-primary) [&_li]:bg-(--brand-primary)/5':
            accent === 'primary' && theme === 'label-badge',
          'text-(--brand-warning) [&_li]:bg-(--brand-warning)/5':
            accent === 'secondary' && theme === 'label-badge',
        })}
      >
        {items?.map((item) => (
          <Item {...item} className={itemClassName} key={item.label} showLabel={showLabel} />
        ))}
      </ul>
    </div>
  );
}
