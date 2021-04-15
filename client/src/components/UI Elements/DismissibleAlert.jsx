import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
const DismissibleAlert = (props) => {
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center"
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  useEffect(() => {
    setState({ open: true, ...{ vertical: "top", horizontal: "center" } });
  }, []);
  if (props.alertDisplay == 1) {
    return (
      <div>
        <Snackbar
          autoHideDuration={6000}
          severity="error"
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="I love snacks"
          key={vertical + horizontal}
        >
          <Alert onClose={handleClose} severity="success">
            Purchase Successful!!
          </Alert>
        </Snackbar>
      </div>
    );
  } else if (props.alertDisplay == 0) {
    return (
      <div>
        <Snackbar
          autoHideDuration={6000}
          severity="error"
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="I love snacks"
          key={vertical + horizontal}
        >
          <Alert onClose={handleClose} severity="error">
            Something went Wrong!!
          </Alert>
        </Snackbar>
      </div>
    );
  } else {
    return null;
  }
};
export default DismissibleAlert;
