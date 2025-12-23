[**hqnrd-web-app**](../../../../README.md)

***

[hqnrd-web-app](../../../../README.md) / [features/Cards/Default](../README.md) / Card

# Function: Card()

> **Card**(`props`): `Element`

Defined in: components/features/Cards/Default.tsx:41

A flexible card component with optional header, footer, and customizable styling.

## Parameters

### props

`CardDefaultProps`

The component props

## Returns

`Element`

A card component with configurable sections and styling

## Example

```tsx
<Card
  Header={<h2>Card Title</h2>}
  Footer={<span>Card footer text</span>}
  horizontalPadding={true}
  showElevatedSurface={true}
>
  <p>Card content goes here</p>
</Card>
```
