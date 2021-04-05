import React, { useState, useEffect } from "react";
import axios from "axios";
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
  const [value, setValue] = useState(initialFValues);
  const [total, setTotal] = useState(0);
  const classes = CartStyles();
  const handleOnClick = (e) => {
    setValue(value.filter((item) => item.id !== e));
  };

  useEffect(() => {
    if (value.length !== 0) {
      var sum = 0;
      value.forEach((item) => {
        sum = sum + item.price;
      });
      setTotal(sum);
    }
  }, [value]);

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
            <Typography variant="h3" color="primary">
              Shopping Cart
            </Typography>
            <Divider />
          </div>
          {value.map((cartItem) => (
            <Grid item xs={12} className={classes.paper} key={cartItem.id}>
              <Card>
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
