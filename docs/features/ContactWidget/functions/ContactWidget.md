[**hqnrd-web-app**](../../../README.md)

***

[hqnrd-web-app](../../../README.md) / [features/ContactWidget](../README.md) / ContactWidget

# Function: ContactWidget()

> **ContactWidget**(`props`): `Element`

Defined in: components/features/ContactWidget/index.tsx:24

A contact widget component that displays multiple contact method buttons.

## Parameters

### props

The component props

#### btnClassNames?

`string`

Additional CSS classes to apply to all buttons

#### btnVariant?

`"default"` \| `"link"` \| `"destructive"` \| `"outline"` \| `"secondary"` \| `"ghost"` \| `null`

The visual variant to apply to all buttons

#### className?

`string`

Additional CSS classes to apply to the root container

#### direction?

`"horizontal"` \| `"vertical"` = `'horizontal'`

The layout direction of the contact buttons. Can be 'horizontal' or 'vertical'. Defaults to 'horizontal'

#### lang

`string`

The locale for the component

#### showBorders?

`boolean`

Whether to show decorative borders at the top and bottom of the widget

## Returns

`Element`

A contact widget with buttons for Google Maps, WhatsApp, locale selection, and email
