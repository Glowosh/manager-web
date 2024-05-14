import { ReactNode } from 'react';
import { DialogProps } from '@mui/material';

function showModal(component: ReactNode, dialogProps?: DialogProps) {
  dispatchEvent(
    new CustomEvent('show-modal', {
      detail: {
        component,
        dialogProps,
      },
    })
  );
}

function closeModal() {
  dispatchEvent(
    new CustomEvent('show-modal', {
      detail: null,
    })
  );
}

export { showModal, closeModal };
