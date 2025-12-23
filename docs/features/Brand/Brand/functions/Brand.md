[**hqnrd-web-app**](../../../../README.md)

***

[hqnrd-web-app](../../../../README.md) / [features/Brand/Brand](../README.md) / Brand

# Function: Brand()

> **Brand**(`props`): `Element`

Defined in: components/features/Brand/Brand.tsx:26

Brand component that displays the hotel logo, name, and slogan as a link to the home page.

## Parameters

### props

Component props

#### className?

`string` = `''`

Additional CSS classes to apply to the root element

#### headingLevel?

`"h2"` \| `"h3"` \| `"h1"` \| `"h4"` \| `"h5"` \| `"h6"` = `'h1'`

HTML heading tag level for the brand name

#### height?

`number` = `26`

Height of the logo image in pixels

#### lang

`string` = `'en'`

Language/locale code for the link destination

#### width?

`number` = `26`

Width of the logo image in pixels

## Returns

`Element`

A clickable brand component containing logo, hotel name, and slogan

## Example

```tsx
<Brand lang="en" headingLevel="h2" width={32} height={32} />
```
