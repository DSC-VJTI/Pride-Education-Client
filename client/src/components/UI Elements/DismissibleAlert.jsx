import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import WarningIcon from "@material-ui/icons/Warning";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

const DismissibleAlert = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  if (props.alertDisplay === -1) {
    return null;
  } else if (props.alertDisplay === 1) {
    return (
      <div className={classes.root}>
        <Collapse in={open}>
          <Alert
            severity="success"
            style={{ display: "flex" }}
            icon={
              <CheckCircleIcon
                style={{
                  color: "green",
                  fontSize: "35px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                fontSize="inherit"
              />
            }
            action={
              <IconButton
                variant="h2"
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="35px" />
              </IconButton>
            }
          >
            <span style={{ fontWeight: "bold", fontSize: "25px" }}>
              Purchase Done Successfully!
            </span>
          </Alert>
        </Collapse>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <Collapse in={open}>
          <Alert
            severity="error"
            style={{ display: "flex" }}
            icon={
              <WarningIcon
                style={{
                  color: "red",
                  fontSize: "35px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                fontSize="inherit"
              />
            }
            action={
              <IconButton
                variant="h2"
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="35px" />
              </IconButton>
            }
          >
            <span style={{ fontWeight: "bold", fontSize: "25px" }}>
              Something Went Wrong Please try again!!
            </span>
          </Alert>
        </Collapse>
      </div>
    );
  }
};
export default DismissibleAlert;
