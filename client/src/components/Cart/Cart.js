import React, { useState } from "react";
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
    "& .MuiTypography-root": {
      padding: "20px"
    }
  }
}));

const initialFValues = [
  {
    title: "SCMPE Full Course",
    content: "Books",
    views: "1.7",
    validity: "6 Months",
    price: 15000,
    instructor: "CA Abhishek Khilwani",
    duration: 100,
    id: 0
  },
  {
    title: "SCMPE Full Course",
    content: "Books",
    views: "1.7",
    validity: "6 Months",
    price: 15000,
    instructor: "CA Abhishek Khilwani",
    duration: 100,
    id: 1
  },
  {
    title: "SCMPE Full Course",
    content: "Books",
    views: "1.7",
    validity: "6 Months",
    price: 15000,
    instructor: "CA Abhishek Khilwani",
    duration: 100,
    id: 2
  }
];

const Cart = () => {
  const [elevation, setElevation] = useState(2);

  const handleOnHover = (e) => {
    console.log(e.target);
    setElevation(10);
  };

  const handleonMouseLeave = () => {
    setElevation(2);
  };
  const [value, setValue] = useState(initialFValues);
  const classes = CartStyles();

  const handleOnClick = (e) => {
    setValue(value.filter((item) => item.id !== e));
  };

  var total = 0;
  const TotalAmount = (item) => {
    total += item.price;
  };

  value.map(TotalAmount);

  return (
    <Grid container spacing={3} direction={"row"}>
      <Grid item xs={0} lg={1}></Grid>
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
            <Typography variant="h3" color="primary">
              Shopping Cart
            </Typography>
            <Divider />
          </div>
          {value.map((cartItem) => (
            <Grid item xs={12} spacing={2} className={classes.paper}>
              <Card
                elevation={`${elevation}`}
                onMouseEnter={handleOnHover}
                onMouseLeave={handleonMouseLeave}
              >
                <CardActions>
                  <Item
                    id={cartItem.id}
                    title={cartItem.title}
                    content={cartItem.content}
                    views={cartItem.views}
                    validity={cartItem.validity}
                    price={cartItem.price}
                    instructor={cartItem.instructor}
                    duration={cartItem.duration}
                    onClick={handleOnClick}
                  />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Container>
      </Grid>
      <Grid item sm={7} xs={12} md={4} lg={3} spacing={4}>
        <Container className={classes.style}>
          <Total items={value.length} price={total} />
        </Container>
      </Grid>
      <Grid item xs={0} md={0} lg={1}></Grid>
    </Grid>
  );
};

export default Cart;
