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

const prevOrders = [
  {
    id: 0,
    title: "SCMPE Full Course",
    price: 15000,
    instructor: "CA Abhishek Khilwani",
    buyDate: new Date()
  },
  {
    id: 1,
    title: "SCMPE Full Course",
    price: 15000,
    instructor: "CA Abhishek Khilwani",
    buyDate: new Date()
  },
  {
    id: 2,
    title: "SCMPE Full Course",
    price: 15000,
    instructor: "CA Abhishek Khilwani",
    buyDate: new Date()
  }
];

const MyOrders = () => {
  const state = useAuthState();
  const [value, setValue] = useState(prevOrders);
  const classes = useStyles();
  const fetchingOrders = async () => {
    const fetchedOrders = await axios.get(
      `${BASE_URL}/orders/user/${state.user.id}`,
      {
        user: state.user,
        headers: { Authorization: `Bearer ${state.token}` }
      }
    );
    console.log(fetchedOrders);
  };
  useEffect(() => {
    fetchingOrders();
  }, []);
  return (
    <Grid container spacing={4}>
      <Grid item xs={0} md={2}></Grid>
      <Grid item md={8} spacing={2} className={classes.paper}>
        <Container className={classes.style}>
          {value.map((orderedItem) => (
            <Paper>
              <OrderedItem
                title={orderedItem.title}
                price={orderedItem.price}
                buyDate={orderedItem.buyDate}
                instructor={orderedItem.instructor}
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
