import React from "react";
import { Container, Grid, Tab, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "./Tabs/Tabs";
import { Route, Switch, Redirect } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    background: "#f6f6f6",
    "& > *": {
      margin: theme.spacing(1)
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "#f26522"
    },
    "@media all and (max-width: 600px)": {
      padding: "0px"
    }
  },
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(1)
  }
}));

const SupportPage = () => {
  const classes = useStyles();

  return (
    <div>
      <Switch>
        <Redirect exact from="/support" to="/support/software" />
        <Route
          exact
          path="/support/:page?"
          render={(props) => (
            <div className={classes.root}>{<Tabs {...props} />}</div>
          )}
        />
      </Switch>
    </div>
  );
};

export default SupportPage;
