'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogClose,
  DialogFooter,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';

type ModalProps = {
  children: React.ReactNode;
};

export const Modal = ({ children }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  const onClose = () => {
    setIsOpen(false);
    router.back();
  };
  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>{children}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" onClick={() => onClose()} variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
