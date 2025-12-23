[**hqnrd-web-app**](../../../README.md)

***

[hqnrd-web-app](../../../README.md) / [features/ExLink](../README.md) / ExLink

# Function: ExLink()

> **ExLink**(`props`): `Element`

Defined in: components/features/ExLink/index.tsx:21

ExLink component that renders an anchor tag with target="_blank" and security attributes.

## Parameters

### props

`ExLinkProps`

The component props

## Returns

`Element`

A React anchor element that opens in a new tab with security measures (noopener noreferrer)

## Example

```tsx
<ExLink href="https://example.com" className="text-blue-500">
  Visit Example
</ExLink>
```
