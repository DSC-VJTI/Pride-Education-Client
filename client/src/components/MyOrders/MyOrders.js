import { Container, Grid, makeStyles, Paper } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import OrderedItem from "./OrderedItem";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { useAuthState } from "../../context/context";
import Loading from "../UI Elements/Loading";
import Alert from "../UI Elements/DismissibleAlert";
import TestBook from "./TestBook";
const useStyles = makeStyles((theme) => ({
  style: {
    padding: "20px",
    minWidth: "100px",
    margin: "15px",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  paper: {
    "& .MuiPaper-root": {
      padding: theme.spacing(2),
      marginBottom: "10px"
    }
  }
}));

const MyOrders = (props) => {
  const state = useAuthState();
  const [value, setValue] = useState([]);
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(false);
  };
  useEffect(() => {
    fetchingOrders();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Alert alertDisplay={props.alert} />
      <Grid style={{ margin: "10px 0" }} container spacing={0}>
        <Grid item xs={0} md={2}></Grid>
        <Grid item md={8} spacing={2} className={classes.paper}>
          <Container
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap"
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
