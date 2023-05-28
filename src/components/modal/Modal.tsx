'use client'; // This is a client component 👈🏽
import { useRef, useEffect, useCallback, ReactNode } from 'react';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { useUI } from '@/contexts/managed-ui';
import { Dialog } from '../dialog/Dialog';

export const ModalView = ({ modalView, closeModal, displayModal }: any) => {
  return (
    <Modal onClose={closeModal}>
      {modalView === 'DEFAULT' && (
        <Dialog modalTitle="Default Title" modalContent="Lorem ipsum description" />
      )}
      {modalView === 'ERROR' && <div>Error</div>}
    </Modal>
  );
};

export const ModalUI = () => {
  const { displayModal, closeModal, modalView } = useUI();
  return displayModal ? (
    <ModalView modalView={modalView} closeModal={closeModal} displayModal={displayModal} />
  ) : null;
};

export const Modal = ({ children, onClose }: any) => {
  const ref = useRef<null | HTMLDivElement>(null);

  const handleKey = useCallback(
    (e: any) => {
      if (e.key === 'Escape') {
        return onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const modal = ref.current;

    if (modal) {
      disableBodyScroll(modal, { reserveScrollBarGap: true });
      window.addEventListener('keydown', handleKey);
    }
    return () => {
      clearAllBodyScrollLocks();
      window.removeEventListener('keydown', handleKey);
    };
  }, [handleKey]);

  return (
    <div className="fixed bg-dialog-bg flex items-center inset-0 z-50 justify-center backdrop-blur-[2px]">
      <div className="" role="dialog" ref={ref}>
        {children}
      </div>
    </div>
  );
};
