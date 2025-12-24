import { MenuItemProps, MenuProps } from '@/types';
import { MenuItem } from './MenuItem';
import { Text } from '@/components/ui/Text';

/**
 * A menu component that displays a list of navigation items with an optional heading.
 *
 * @param props - The menu component props
 * @param props.heading - Optional heading text displayed above the menu items
 * @param props.items - Array of menu item objects to be rendered
 * @param props.itemClassName - Optional CSS class name to apply to each menu item
 * @param props.children - Optional React children to render as custom menu content
 *
 * @returns A styled menu component with navigation items or custom children
 *
 * @remarks
 * - When `children` is provided, it takes precedence over the `items` array
 * - The heading is rendered in uppercase with primary color styling
 * - Menu items have hover effects that change text color to foreground
 * - Uses Tailwind CSS classes for styling
 */

export function Menu({ heading, items, itemClassName, children }: MenuProps) {
  return (
    <div className="text-muted-foreground space-y-4 font-sans">
      {heading && (
        <Text variant="p" size="xs" weight="bold" transform="upper">
          {heading}
        </Text>
      )}
      <ul className="[&>li]:hover:text-foreground cursor-pointer space-y-6">
        {!children &&
          items?.map((item: MenuItemProps) => (
            <MenuItem {...item} key={item.label} className={itemClassName} />
          ))}
        {children && <MenuItem className={itemClassName}>{children}</MenuItem>}
      </ul>
    </div>
  );
}
