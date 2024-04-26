import * as Dialog from '@radix-ui/react-dialog';
import { cn } from '../../app/utils/cn';
import { Cross2Icon } from '@radix-ui/react-icons';

interface ModalProps{
  open: boolean
  title: string
  children: React.ReactNode
  rightAction?: React.ReactNode
  onClose?(): void;
}

export function Modal({ open, title, children, rightAction, onClose }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
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
            'data-[state=open]:animate-content-show w-full max-w-[400px] outline-none'
          )}
        >
          <header
            className="h-12 flex items-center text-gray-800"
          >
            <button
              className="w-12 h-12 flex items-center justify-center outline-none"
              onClick={onClose}
            >
              <Cross2Icon className="w-6 h-6'" />
            </button>

            <span className='text-lg tracking-[-1px] font-bold'>
              {title}
            </span>

            <button className="w-12 h-12 flex items-center justify-center">
              {rightAction}
            </button>
          </header>

          <div>
            {children}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
