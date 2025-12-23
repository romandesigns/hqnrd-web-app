[**hqnrd-web-app**](../../../../README.md)

***

[hqnrd-web-app](../../../../README.md) / [layout/core/Content](../README.md) / Content

# Function: Content()

> **Content**(`props`): `Element`

Defined in: [components/layout/core/Content/index.tsx:24](https://github.com/romandesigns/hqnrd-web-app/blob/9960762438cf342b568f1b2b910a9d9c85c36413/components/layout/core/Content/index.tsx#L24)

Content component that wraps children with consistent layout constraints and spacing.

Provides a centered container with maximum width, horizontal padding that adjusts
responsively (smaller on mobile, larger on desktop screens).

## Parameters

### props

`ContentProps`

The component props

## Returns

`Element`

A div element with responsive layout classes and the provided children

## Example

```tsx
<Content className="my-custom-class">
  <p>Your content here</p>
</Content>
```
