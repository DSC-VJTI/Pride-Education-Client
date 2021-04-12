import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Page from "../../UI Elements/Page";
import LatestOrders from "./LatestOrders";
import Total from "./Total";
import { ContactSupport, PeopleOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f1f1f1",
    overflow: "hidden"
  }
}));

const Dashboard = ({ setCounter }) => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestOrders setCounter={setCounter} />
          </Grid>
          <Grid item lg={4} sm={6} xl={3} xs={12} container spacing={3}>
            <Grid item xs={12}>
              <Total
                setCounter={setCounter}
                counter={1}
                apiRoute="/admin/getCountUsers"
                cardTitle="Customers"
                Icon={PeopleOutlined}
              />
            </Grid>
            <Grid item xs={12}>
              <Total
                setCounter={setCounter}
                counter={4}
                apiRoute="/queries/getCount"
                cardTitle="Queries"
                Icon={ContactSupport}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
