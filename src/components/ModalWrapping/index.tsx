import { ReactNode, useEffect, useState } from 'react';
import { Dialog, DialogProps } from '@mui/material';
import { closeModal, showModal } from './actions';

interface IModal {
  component?: ReactNode;
  dialogProps?: DialogProps;
}

function ModalWrapping() {
  const [contentModal, setContentModal] = useState<IModal | null>();

  const showModal = (event: CustomEvent<IModal>) => {
    setContentModal(event.detail);
  };

  useEffect(() => {
    window.addEventListener('show-modal', showModal as EventListener);

    return () => {
      window.removeEventListener('show-modal', showModal as EventListener);
    };
  }, []);

  return (
    <Dialog
      open={Boolean(contentModal)}
      onClose={closeModal}
      maxWidth={false}
      {...contentModal?.dialogProps}
    >
      {contentModal?.component}
    </Dialog>
  );
}

export { ModalWrapping, closeModal, showModal };
