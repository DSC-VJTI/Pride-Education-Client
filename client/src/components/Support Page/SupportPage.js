import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "./Tabs/Tabs";
import { Route, Switch, Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // alignItems: 'center !important',
    // justifyContent: 'center !important',
    flex: 1,
    background: "#f6f6f6",
    "& > *": {
      margin: theme.spacing(1)
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "white"
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
    <main style={{ height: "70vh", display: "grid", placeItems: "center" }}>
      <Switch>
        <Redirect exact from="/support" to="/support/software" />
        <Route
          exact
          path="/support/:page?"
          render={(props) => (
            // <Grid container>
            //   <Grid item md={2} xs={0}></Grid>
            //   <Grid item md={8} xs={12}>
            // <div className={classes.root}>
            <div
              style={{
                display: "grid",
                placeItems: "center",
                marginTop: "auto"
              }}
            >
              <Tabs {...props} />
            </div>
            // </Grid>
            // <Grid item md={2} xs={0}></Grid>
            // </Grid>
          )}
        />
      </Switch>
    </main>
  );
};

export default SupportPage;
