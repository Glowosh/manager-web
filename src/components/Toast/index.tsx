import { useState } from 'react';
import { Alert, AlertColor, Snackbar, SxProps } from '@mui/material';

type Props = {
  isOpen: boolean;
  type: AlertColor;
  message: string;
  sx?: SxProps;
};

export const Toast = ({ isOpen, message, type, sx }: Props) => {
  const [open, setOpen] = useState(isOpen);

  const handleClose = () => setOpen(false);

  return (
    <Snackbar
      open={open}
      autoHideDuration={8000}
      onClose={handleClose}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      sx={sx}
    >
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
