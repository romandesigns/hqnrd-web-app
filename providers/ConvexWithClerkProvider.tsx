'use client';

import { ReactNode } from 'react';
import { ConvexReactClient } from 'convex/react';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { useAuth } from '@clerk/nextjs';

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  throw new Error('Missing NEXT_PUBLIC_CONVEX_URL in your .env file');
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

/**
 * A wrapper component that provides Convex client with Clerk authentication integration.
 *
 * This component combines Convex's real-time data synchronization with Clerk's authentication system,
 * allowing child components to access both authenticated Convex queries and mutations.
 *
 * @param props - The component props
 * @param props.children - Child components that will have access to the authenticated Convex client
 *
 * @returns A provider component that wraps children with Convex and Clerk authentication context
 *
 * @example
 * ```tsx
 * <ConvexWithClerk>
 *   <App />
 * </ConvexWithClerk>
 * ```
 */

export default function ConvexWithClerk({ children }: { children: ReactNode }) {
  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  );
}
