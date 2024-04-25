import * as Dialog from '@radix-ui/react-dialog';
import { cn } from '../../app/utils/cn';

export function Modal() {
  return (
    <Dialog.Root>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            'fixed inset-0 z-50 bg-black/80 backdrop-blur-sm',
            'data-[state=open]:animate-overlay-show'
          )}
        />

        <Dialog.Content
          className={cn(
            'fixed top-1/2 left-1/2 max-h-[85vh] translate-x-1/2 translate-y-1/2 p-6 space-y-10 bg-white rounded-2xl z-[51] shadow-[Opx_11px_20px_0px_rgba(0,0,0,0.10)]',
            'data-[state=open]:animate-content-show'
          )}
        >
          <h1>Modal</h1>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
