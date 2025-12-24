import { cn } from '@/lib/utils';
import { SectionHeadingProps } from '@/types';

/**
 * A component that renders a section with a title and an optional description.
 * It can also display borders around the title.
 *
 * @param {Object} props - The properties object.
 * @param {string} [props.title] - The title to display in the section.
 * @param {string} [props.description] - The optional description to display below the title.
 * @param {boolean} [props.showBorders=false] - Whether to show borders around the title.
 *
 * @returns {JSX.Element} The rendered section component.
 */

export function SectionHeading({
  title,
  description,
  showBorders = false,
  className,
  postTitleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn('flex w-full flex-col items-center justify-center pb-20 font-sans', className)}
    >
      {title && (
        <div className="flex w-full items-center justify-center">
          {showBorders && <div className="bg-muted/25 h-[0.15rem] w-1/5" />}
          <div>
            <div className="bg-muted/90 text-primary-muted mx-2 rounded-full px-6 py-1 text-center">
              <p className="text-[0.73rem] font-bold lg:text-sm">{title}</p>
            </div>
          </div>
          {showBorders && <div className="bg-muted/25 h-[0.15rem] w-1/5" />}
        </div>
      )}

      {description && (
        <small
          className={cn(
            `post_title text-muted-foreground mt-3 text-center text-sm font-medium`,
            postTitleClassName,
          )}
        >
          {description}
        </small>
      )}
    </div>
  );
}
