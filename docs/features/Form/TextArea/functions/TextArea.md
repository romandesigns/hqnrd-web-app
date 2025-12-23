[**hqnrd-web-app**](../../../../README.md)

***

[hqnrd-web-app](../../../../README.md) / [features/Form/TextArea](../README.md) / TextArea

# Function: TextArea()

> **TextArea**(`props`): `Element`

Defined in: components/features/Form/TextArea/index.tsx:28

A textarea component with character count validation and display.

## Parameters

### props

`TextAreaProps`

The component props

## Returns

`Element`

A textarea with a character counter that shows current/max length

## Example

```tsx
<TextArea name="description" maxLength={200} />
```

## Remarks

- The component maintains internal state for the textarea value
- Input is prevented once maxLength is reached
- Counter text turns to danger color when limit is reached
- The counter is linked to the textarea via aria-describedby for accessibility
