import type React from 'react';
import { IconX } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Card } from '../Cards';
import { ModalProps } from '@/types';

/**
 * A reusable modal component that wraps a dialog with a trigger button and dynamic content.
 *
 * @template T - The type of props that will be passed to the dynamic component
 *
 * @param {ModalProps<T>} props - The modal configuration properties
 * @param {string} [props.triggerLabel] - The label text for the trigger button. Defaults to 'Open Dialog'
 * @param {React.ComponentType<T & { className?: string }>} props.Component - The dynamic component to render inside the modal
 * @param {string} [props.className] - Additional CSS classes to apply to the dynamic component
 * @param {T} props.componentProps - Props to be passed to the dynamic component
 * @param {string} props.title - The title displayed in the modal header
 *
 * @returns {JSX.Element} A Dialog component with a trigger button, header with close button, and dynamic content
 *
 * @example
 * ```tsx
 * <Modal
 *   triggerLabel="Open Form"
 *   Component={MyForm}
 *   componentProps={{ onSubmit: handleSubmit }}
 *   title="User Registration"
 *   className="p-4"
 * />
 * ```
 */
export function Modal<T extends object>({
  triggerLabel,
  Component,
  className,
  componentProps,
  title,
}: ModalProps<T>) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full max-w-md">{triggerLabel || 'Open Dialog'}</Button>
      </DialogTrigger>

      <DialogContent className="gap-0 p-0" showCloseButton={false}>
        {/* HEADER */}
        <Card bodyClassName="p-0! border-0 shadow-none outline-none bg-transparent shadow-none">
          <DialogHeader className="flex flex-row items-center justify-between rounded-b-none bg-transparent p-2 py-1">
            <DialogTitle className="text-sm">{title}</DialogTitle>

            <DialogClose asChild>
              <Button size="icon" variant="ghost">
                <IconX />
              </Button>
            </DialogClose>
          </DialogHeader>
        </Card>

        {/* COMPONENTE DINÁMICO */}
        <Component {...componentProps} className={className} />
      </DialogContent>
    </Dialog>
  );
}
