[**hqnrd-web-app**](../../../README.md)

***

[hqnrd-web-app](../../../README.md) / [features/LocaleDialog](../README.md) / LocaleDialog

# Function: LocaleDialog()

> **LocaleDialog**(`props`): `Element`

Defined in: components/features/LocaleDialog/index.tsx:36

A dialog component that allows users to switch between different locales/languages.

## Parameters

### props

The component props

#### btnVariant

`"default"` \| `"link"` \| `"destructive"` \| `"outline"` \| `"secondary"` \| `"ghost"` \| `null` \| `undefined`

The visual variant style for the trigger button

#### className?

`string`

Optional additional CSS classes to apply to the button

#### lang

`string`

The current locale/language setting

## Returns

`Element`

A Dialog component with a language switcher button trigger that opens
a modal containing locale selection options

## Example

```tsx
<LocaleDialog
  lang="en"
  btnVariant="outline"
  className="custom-class"
/>
```
