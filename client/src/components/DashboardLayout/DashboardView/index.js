import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Page from "../../UI Elements/Page";
import LatestOrders from "./LatestOrders";
import LatestProducts from "./LatestProducts";
import Sales from "./Sales";
import TotalCustomers from "./TotalCustomers";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f1f1f1"
    // paddingBottom: theme.spacing(3),
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestOrders />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TotalCustomers />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
