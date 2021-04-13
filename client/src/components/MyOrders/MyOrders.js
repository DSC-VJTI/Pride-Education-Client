import { Container, Grid, makeStyles, Paper } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import OrderedItem from "./OrderedItem";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { useAuthState } from "../../context/context";
const useStyles = makeStyles((theme) => ({
  style: {
    padding: "20px",
    minWidth: "100px",
    margin: "15px"
  },
  paper: {
    "& .MuiPaper-root": {
      flexGrow: 1,
      padding: theme.spacing(2),
      marginBottom: "10px"
    }
  }
}));

const MyOrders = () => {
  const state = useAuthState();
  const [value, setValue] = useState([]);
  const classes = useStyles();
  const fetchingOrders = async () => {
    const fetchedOrders = await axios.post(
      `${BASE_URL}/orders/user`,
      state.user,
      {
        headers: {
          Authorization: `Bearer ${state.token}`
        }
      }
    );
    setValue(fetchedOrders.data.data);
    console.log(fetchedOrders.data.data);
  };
  useEffect(() => {
    fetchingOrders();
  }, []);
  return (
    <Grid style={{ margin: "10px 0" }} container spacing={0}>
      <Grid item xs={0} md={2}></Grid>
      <Grid item md={8} spacing={2} className={classes.paper}>
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
          className={classes.style}
        >
          {value.map((orderedItem) => (
            <Paper
              className="orderPageResponsive"
              style={{
                backgroundColor: "rgb(241, 241, 241)",
                width: "60%",
                display: "block",
                margin: "50px!important"
              }}
            >
              <OrderedItem
                title={`${orderedItem.products[0].test.subject} Full Course`}
                price={orderedItem.products[0].price}
                buyDate={orderedItem.orderPlacedAt}
                instructor={orderedItem.products[0].name}
              />
            </Paper>
          ))}
        </Container>
      </Grid>
      <Grid item xs={0} md={2}></Grid>
    </Grid>
  );
};

export default MyOrders;
