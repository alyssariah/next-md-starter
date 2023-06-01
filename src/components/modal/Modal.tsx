'use client'; // This is a client component 👈🏽
import { useRef, useEffect, useCallback, ReactNode } from 'react';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { useUI } from '@/contexts/managed-ui';
import { Dialog } from '../dialog/Dialog';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { Button } from '../button/Button';

export const ModalView = ({ modalView, closeModal, displayModal }: any) => {
  return (
    <Modal onClose={closeModal}>
      {modalView === 'DEFAULT' && (
        <Dialog
          buttonText="Open the dialog"
          buttonPrimary="primary"
          buttonSize="large"
          buttonShape="square"
          modalTitle="File Shared"
          modalContent="All team members will be able to read, write and share this file."
          boxShadow={4}
          modalIcon={<IoAlertCircleOutline />}
          position="center"
          buttonFlex="row"
          rejectButton={
            <Button
              label="Cancel"
              shape="square"
              configuration={'outline'}
              size="medium"
              stretch={true}
            />
          }
          confirmButton={
            <Button
              label="Confirm"
              shape="square"
              configuration={'filled'}
              size="medium"
              stretch={true}
            />
          }
        />
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
    <div
      className="fixed bg-dialog-bg flex items-center inset-0 z-50 justify-center backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div className="" role="dialog" ref={ref}>
        {children}
      </div>
    </div>
  );
};
