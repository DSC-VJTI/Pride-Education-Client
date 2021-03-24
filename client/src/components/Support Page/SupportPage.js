import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "./Tabs/Tabs";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#ffcc5c",
    "& > *": {
      margin: theme.spacing(1)
    },
    "& .MuiTypography-root": {
      backgroundColor: "#ffeead"
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "#ffffff"
    },
    "@media all and (max-width: 600px)": {}
  },
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(1)
  }
}));

const SupportPage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <div style={{ marginTop: "120px" }} className={classes.root}>
        <Tabs />
      </div>
    </Container>
  );
};

export default SupportPage;
