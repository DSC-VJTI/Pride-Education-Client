import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "./Tabs/Tabs";
import { Route, Switch, Redirect } from "react-router-dom";


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
    <Switch>
        <Redirect exact from="/support" to="/support/software" />
        <Route 
          exact path="/support/:page?" 
          render={(props)=>(
          <Container maxWidth='sm'>
            <div className={classes.root}>
              <Tabs {...props}/>
            </div>
          </Container>)} />
      </Switch> 
  );
};

export default SupportPage;
