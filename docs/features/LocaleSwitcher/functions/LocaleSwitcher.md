[**hqnrd-web-app**](../../../README.md)

***

[hqnrd-web-app](../../../README.md) / [features/LocaleSwitcher](../README.md) / LocaleSwitcher

# Function: LocaleSwitcher()

> **LocaleSwitcher**(`props`): `Element`

Defined in: components/features/LocaleSwitcher/index.tsx:39

A locale switcher component that displays available language options as a grid of clickable cards.

## Parameters

### props

The component props

#### lang

`string`

The currently active language/locale code

## Returns

`Element`

A grid of locale options with flags and labels, where the active locale is highlighted

## Component

## Example

```tsx
<LocaleSwitcher lang="en" />
```

## Remarks

- Displays flags for US (English) and DO (Spanish) locales
- Active locale is highlighted with brand primary color and border
- Each locale option is clickable and redirects to the corresponding localized path
- Uses a 2-column grid layout with hover effects
