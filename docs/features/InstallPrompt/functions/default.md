[**hqnrd-web-app**](../../../README.md)

***

[hqnrd-web-app](../../../README.md) / [features/InstallPrompt](../README.md) / default

# Function: default()

> **default**(): `Element`

Defined in: components/features/InstallPrompt/index.tsx:42

InstallPrompt component displays a modal dialog prompting users to install the PWA (Progressive Web App).

## Returns

`Element`

A Dialog component containing the PWA installation prompt UI

## Component

## Description

This component uses the `useInstallPrompt` hook to manage the PWA installation flow.
It shows a dialog with the app logo, title, description, and action buttons for installing
or declining the installation prompt.

## Remarks

- The dialog only appears when `showPrompt` is true (controlled by the hook)
- Uses the native browser PWA installation API via `deferredPrompt`
- Logs user's installation choice (accepted/dismissed)
- Automatically closes the dialog after user interaction

## Example

```tsx
<InstallPrompt />
```

## See

useInstallPrompt - Hook that manages the PWA installation state
