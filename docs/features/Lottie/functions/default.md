[**hqnrd-web-app**](../../../README.md)

***

[hqnrd-web-app](../../../README.md) / [features/Lottie](../README.md) / default

# Function: default()

> **default**(`props`): `Element`

Defined in: components/features/Lottie/index.tsx:29

A React component that renders a Lottie animation player.

## Parameters

### props

`LottiePlayerProps`

The component props

## Returns

`Element`

A div container wrapping the Lottie animation component

## Example

```tsx
import animationData from './animation.json';

<LottiePlayer
  item={animationData}
  loop={true}
  autoplay={true}
  className="w-full h-64"
/>
```
