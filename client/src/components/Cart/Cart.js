import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Divider,
  Card,
  CardActions
} from "@material-ui/core";
import Item from "./Item";
import Total from "./Total";
import axios from "axios";
import { useAuthState } from "../../context/context";
import { BASE_URL } from "../../constants.js";

const CartStyles = makeStyles((theme) => ({
  style: {
    marginTop: "30px",
    background: "#f6f6f6",
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
  },
  header: {
    "& h1": {
      fontSize: "3.8rem",
      lineHeight: "3rem",
      fontWeight: "600",
      marginTop: "2rem",
      marginLeft: "2rem",

      fontFamily: "Abhaya Libre, Times New Roman, Times, serif",
      color: "#f26522",
      letterSpacing: ".03rem",
      marginBottom: ".5rem"
    }
  },
  empty: {
    "& h4": {
      fontSize: "2.8rem",
      lineHeight: "3rem",
      fontWeight: "600",
      marginTop: "2rem",
      marginLeft: "2rem",
      fontFamily: "Abhaya Libre, Times New Roman, Times, serif",
      color: "#333840",
      letterSpacing: ".03rem",
      marginBottom: ".5rem"
    }
  }
}));

const initialFValues = [
  // {
  //   title: "SCMPE Full Course",
  //   content: "Books",
  //   views: "1.7",
  //   validity: "6 Months",
  //   price: 15000,
  //   instructor: "CA Abhishek Khilwani",
  //   duration: 100,
  //   id: 0
  // },
  // {
  //   title: "SCMPE Full Course",
  //   content: "Books",
  //   views: "1.7",
  //   validity: "6 Months",
  //   price: 15000,
  //   instructor: "CA Abhishek Khilwani",
  //   duration: 100,
  //   id: 1
  // },
  // {
  //   title: "SCMPE Full Course",
  //   content: "Books",
  //   views: "1.7",
  //   validity: "6 Months",
  //   price: 15000,
  //   instructor: "CA Abhishek Khilwani",
  //   duration: 100,
  //   id: 2
  // }
];

const Cart = ({ match }) => {
  const [value, setValue] = useState(initialFValues);
  const [total, setTotal] = useState(0);
  const classes = CartStyles();
  const state = useAuthState();
  console.log(state);

  const handleOnClick = (e) => {
    setValue(value.filter((item) => item._id !== e));
  };

  useEffect(() => {
    if (value.length !== 0) {
      var sum = 0;
      value.forEach((item) => {
        sum = sum + item.price;
      });
      setTotal(sum);
    } else {
      setTotal(0);
    }
  }, [value]);

  // useEffect(() => {
  //   // axios({
  //   //   method: "POST",
  //   //   url: "http://localhost:8000/api/cart",

  //   // }).then((response) => {
  //   //     console.log(response);
  //   //     // setValue(response.data.data);
  //   //   })
  //   //   .catch((err) => console.log(err));
  //   axios
  //     .post(BASE_URL + "/cart", { user: state.user })
  //     .then((response) => console.log(response.data))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  console.log(match.params._id);

  return (
    <Grid container spacing={3} direction={"row"}>
      <Grid item xs={false} lg={1}></Grid>
      <Grid
        container
        item
        sm={12}
        xs={12}
        lg={7}
        direction="column"
        spacing={4}
      >
        <Container className={classes.style}>
          <div className={classes.header}>
            <h1>My Cart</h1>
            <Divider />
          </div>
          {/* {value.length !== 0 ? (
            value.map((cartItem) => (
              <Grid item xs={12} className={classes.paper} key={cartItem.id}>
                <Card>
                  <CardActions>
                    <Item
                      id={cartItem._id}
                      title={cartItem.name}
                      validity={cartItem.courseDetails.validity}
                      price={cartItem.price}
                      instructor={cartItem.courseDetails.faculty}
                      duration={cartItem.courseDetails.duration}
                      onClick={handleOnClick}
                      content={cartItem.type}
                      views={cartItem.views}
                    />
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Grid item>
              <Container className={classes.empty}>
                <h4>Your cart is empty</h4>
              </Container>
            </Grid>
          )} */}
        </Container>
      </Grid>
      <Grid item sm={7} xs={12} md={4} lg={3}>
        <Container className={classes.style}>
          <Total items={value.length} price={total} />
        </Container>
      </Grid>
      <Grid item xs={false} md={false} lg={1}></Grid>
    </Grid>
  );
};

export default Cart;
