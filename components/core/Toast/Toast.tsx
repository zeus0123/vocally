import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export type AlertColor = 'success' | 'info' | 'warning' | 'error'; 

const Toast = ({
  open,
  handleClose,
  message,
  action
}: {
  open: boolean,
  handleClose: () => void,
  message: String,
  action: AlertColor
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
        <Alert onClose={handleClose} severity={action} sx={{ width: '100%' }}>
          {message}
        </Alert>
    </Snackbar>
  );
}

export default Toast