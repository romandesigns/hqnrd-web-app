"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { HQNRD } from "@/constants";
import images from "@/public/assets/hqnrd/images.json";
import { useInstallPrompt } from "@/hooks/useInstallPrompt";

/**
 * InstallPrompt component displays a modal dialog prompting users to install the PWA (Progressive Web App).
 *
 * @component
 * @description
 * This component uses the `useInstallPrompt` hook to manage the PWA installation flow.
 * It shows a dialog with the app logo, title, description, and action buttons for installing
 * or declining the installation prompt.
 *
 * @remarks
 * - The dialog only appears when `showPrompt` is true (controlled by the hook)
 * - Uses the native browser PWA installation API via `deferredPrompt`
 * - Logs user's installation choice (accepted/dismissed)
 * - Automatically closes the dialog after user interaction
 *
 * @example
 * ```tsx
 * <InstallPrompt />
 * ```
 *
 * @returns {JSX.Element} A Dialog component containing the PWA installation prompt UI
 *
 * @see {@link useInstallPrompt} - Hook that manages the PWA installation state
 */

export default function InstallPrompt() {
  const { deferredPrompt, showPrompt, setShowPrompt, dismissPrompt } =
    useInstallPrompt();

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    // 🔹 Trigger native PWA install prompt
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    // 🔹 If they accept or dismiss, close the modal
    setShowPrompt(false);
    // Optionally remember if user dismissed manually
    if (outcome === "dismissed") {
      dismissPrompt();
    }
  };

  return (
    <Dialog open={showPrompt} onOpenChange={setShowPrompt}>
      <DialogContent className="flex h-11/12 w-11/12 flex-col items-center justify-center p-4">
        <DialogHeader className="flex flex-1 items-center justify-center">
          <div className="bg-background rounded-md p-2 shadow-md dark:shadow-black">
            <Image
              width={50}
              height={50}
              src={images.hotel_logo}
              alt={HQNRD.BRANDING.alt}
            />
          </div>
          <DialogTitle className="text-md text-primary font-bold">
            HQNRD App Installation
          </DialogTitle>
          <DialogDescription className="text-xs">
            Add the <strong>Hotel Quinto Nivel RD</strong> app to your home
            screen for faster access and a better mobile experience.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-auto flex w-full flex-row gap-2">
          <Button className="h-10 flex-1" onClick={handleInstall}>
            Install
          </Button>
          <Button
            variant="outline"
            className="h-10 flex-1"
            onClick={dismissPrompt}
          >
            Decline
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
