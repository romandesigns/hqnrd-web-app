[**hqnrd-web-app**](../../../../README.md)

***

[hqnrd-web-app](../../../../README.md) / [layout/core/Menu](../README.md) / Menu

# Function: Menu()

> **Menu**(`props`): `Element`

Defined in: components/layout/core/Menu/index.tsx:22

A menu component that displays a list of navigation items with an optional heading.

## Parameters

### props

`MenuProps`

The menu component props

## Returns

`Element`

A styled menu component with navigation items or custom children

## Remarks

- When `children` is provided, it takes precedence over the `items` array
- The heading is rendered in uppercase with primary color styling
- Menu items have hover effects that change text color to foreground
- Uses Tailwind CSS classes for styling
