import { IconStarFilled, IconStarHalfFilled, IconStarOff } from '@tabler/icons-react';

/**
 * A component that displays a star rating visualization.
 *
 * @param props - The component props
 * @param props.rating - The rating value to display (0-5). Supports decimal values for half stars.
 *
 * @returns A flex container with star icons representing the rating:
 * - Full stars for whole numbers
 * - Half star if decimal part is >= 0.5
 * - Empty stars to complete a total of 5 stars
 *
 * @example
 * ```tsx
 * <StarsRating rating={3.5} /> // Displays 3 full stars, 1 half star, and 1 empty star
 * <StarsRating rating={4} />   // Displays 4 full stars and 1 empty star
 * ```
 */

export function StarsRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {Array.from({ length: fullStars }).map((_, index) => (
        <IconStarFilled key={`full-${index}`} className="text-(--brand-warning)" size={15} />
      ))}
      {hasHalfStar && <IconStarHalfFilled size={15} className="text-(--brand-warning)" />}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <IconStarOff size={15} key={`empty-${index}`} className="text-(--brand-warning)" />
      ))}
    </div>
  );
}
