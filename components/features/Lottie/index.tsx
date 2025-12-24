import { LottiePlayerProps } from "@/types";
import clsx from "clsx";
import Lottie from "lottie-react";

/**
 * A React component that renders a Lottie animation player.
 *
 * @param {LottiePlayerProps} props - The component props
 * @param {object} props.item - The Lottie animation data to be played
 * @param {boolean} props.loop - Whether the animation should loop continuously
 * @param {boolean} props.autoplay - Whether the animation should start playing automatically
 * @param {string} [props.className] - Optional CSS class name(s) to apply to the wrapper div
 *
 * @returns {JSX.Element} A div container wrapping the Lottie animation component
 *
 * @example
 * ```tsx
 * import animationData from './animation.json';
 *
 * <LottiePlayer
 *   item={animationData}
 *   loop={true}
 *   autoplay={true}
 *   className="w-full h-64"
 * />
 * ```
 */

export default function LottiePlayer({
  item,
  loop,
  autoplay,
  className,
}: LottiePlayerProps) {
  return (
    <div className={clsx(className)}>
      <Lottie animationData={item} loop={loop} autoplay={autoplay} />
    </div>
  );
}
