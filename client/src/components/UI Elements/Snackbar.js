import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackBar = (props) => {
  const { open, autoHideDuration, handleClose, severity, message } = props;
  return (
    <Snackbar
      open={open | false}
      autoHideDuration={autoHideDuration | 5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
