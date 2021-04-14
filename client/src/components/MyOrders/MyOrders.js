import { Container, Grid, makeStyles, Paper } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import OrderedItem from "./OrderedItem";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { useAuthState } from "../../context/context";
import TestBook from "./TestBook";
import Alert from "../UI Elements/DismissibleAlert";
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

const MyOrders = (props) => {
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
    // console.log(fetchedOrders.data.data);
    setValue(fetchedOrders.data.data);
  };
  useEffect(() => {
    fetchingOrders();
  }, []);
  return (
    <>
      <Alert alertDisplay={props.alert} />
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
              <TestBook checkTest={orderedItem} />
            ))}
          </Container>
        </Grid>
        <Grid item xs={0} md={2}></Grid>
      </Grid>
    </>
  );
};

export default MyOrders;
