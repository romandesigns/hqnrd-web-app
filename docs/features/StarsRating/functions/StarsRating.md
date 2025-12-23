[**hqnrd-web-app**](../../../README.md)

***

[hqnrd-web-app](../../../README.md) / [features/StarsRating](../README.md) / StarsRating

# Function: StarsRating()

> **StarsRating**(`props`): `Element`

Defined in: components/features/StarsRating/index.tsx:21

A component that displays a star rating visualization.

## Parameters

### props

The component props

#### rating

`number`

The rating value to display (0-5). Supports decimal values for half stars.

## Returns

`Element`

A flex container with star icons representing the rating:
- Full stars for whole numbers
- Half star if decimal part is >= 0.5
- Empty stars to complete a total of 5 stars

## Example

```tsx
<StarsRating rating={3.5} /> // Displays 3 full stars, 1 half star, and 1 empty star
<StarsRating rating={4} />   // Displays 4 full stars and 1 empty star
```
