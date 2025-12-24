"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode } from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

/**
 * A wrapper component that provides Convex client context to its children.
 *
 * This component initializes and provides the Convex client instance to all descendant
 * components through React Context, enabling them to interact with the Convex backend.
 *
 * @param props - The component props
 * @param props.children - React child elements that will have access to the Convex client
 * @returns A ConvexProvider component wrapping the children with the Convex client context
 *
 * @example
 * ```tsx
 * <ConvexClientProvider>
 *   <App />
 * </ConvexClientProvider>
 * ```
 */

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
