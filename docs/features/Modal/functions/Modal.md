[**hqnrd-web-app**](../../../README.md)

***

[hqnrd-web-app](../../../README.md) / [features/Modal](../README.md) / Modal

# Function: Modal()

> **Modal**\<`T`\>(`props`): `Element`

Defined in: components/features/Modal/index.tsx:40

A reusable modal component that wraps a dialog with a trigger button and dynamic content.

## Type Parameters

### T

`T` *extends* `object`

The type of props that will be passed to the dynamic component

## Parameters

### props

`ModalProps`\<`T`\>

The modal configuration properties

## Returns

`Element`

A Dialog component with a trigger button, header with close button, and dynamic content

## Example

```tsx
<Modal
  triggerLabel="Open Form"
  Component={MyForm}
  componentProps={{ onSubmit: handleSubmit }}
  title="User Registration"
  className="p-4"
/>
```
