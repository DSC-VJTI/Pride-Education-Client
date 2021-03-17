import React, { useState } from "react";
import { Container, Grid, makeStyles, Paper } from "@material-ui/core";
import Item from "./Item";
import Total from "./Total";

const CartStyles = makeStyles((theme) => ({
  style: {
    background: "blue",
    padding: "20px",
    minWidth: "100px",
    margin: "15px",
   },
   paper:{
     "& .MuiPaper-root": {
      flexGrow: 1,
      padding: theme.spacing(2),
      marginBottom: "10px",
      },
    },
}));

const initialFValues = [
  {
    title: "SCMPE Full Course",
    content: "Books",
    views: "1.7",
    validity: "6 Months",
    price: "Rs. 15,000",
    instructor: "CA Abhishek Khilwani"
  },
  {
    title: "SCMPE Full Course",
    content: "Books",
    views: "1.7",
    validity: "6 Months",
    price: "Rs. 15,000",
    instructor: "CA Abhishek Khilwani"
  },
  {
    title: "SCMPE Full Course",
    content: "Books",
    views: "1.7",
    validity: "6 Months",
    price: "Rs. 15,000",
    instructor: "CA Abhishek Khilwani"
  },
];

const Cart = () => {
  const classes = CartStyles();
  const [items, setItems] = useState(initialFValues);
  return (
    <Grid container spacing={3} direction={"row"}>
      <Grid item xs={0} md={1}></Grid>
      <Grid
        container
        item
        sm={12}
        xs={12}
        md={7}
        direction="column"
        spacing={4}
      >
        <Container className={classes.style}>
          {items.map((item) => (
            <Grid item xs={12} spacing={2} className={classes.paper}>
              <Paper>
                <Item
                  title={item.title}
                  content={item.content}
                  views={item.views}
                  validity={item.validity}
                  price={item.price}
                  instructor={item.instructor}
                />
              </Paper>
            </Grid>
          ))}
        </Container>
      </Grid>
      <Grid item sm={5} xs={12} md={3}>
        <Container className={classes.style}>
          <Total items={5} price={100} />
        </Container>
      </Grid>
      <Grid item xs={0} md={1}></Grid>
    </Grid>
  );
};

export default Cart;
