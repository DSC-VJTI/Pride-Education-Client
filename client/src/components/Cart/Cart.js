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
import { BASE_URL } from "../../constants";
import { useAuthState } from "../../context/context";
import TestSeries from "./TestSeries";
import Book from "./Book";

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

const initialFValues = [];

const Cart = ({ match }) => {
  const state = useAuthState();
  console.log(state);
  const [productID, setProductID] = useState([]);
  const [value, setValue] = useState(initialFValues);
  const [total, setTotal] = useState(0);
  const classes = CartStyles();

  const handleOnClick = (e) => {
    setValue(
      value.filter((item) => {
        return item._id !== e;
      })
    );
  };

  useEffect(() => {
    if (value.length !== 0) {
      var sum = 0;
      value.forEach((item) => {
        sum = sum + item.price;
      });
      setTotal(sum);
      const tempID = value.map((item) => {
        return item._id;
      });
      setProductID(tempID);
    } else {
      setTotal(0);
    }
  }, [value]);

  const fetchingProducts = async () => {
    console.log(state.user);
    const fetchedProduct = await axios.post(`${BASE_URL}/cart`, {
      user: state.user
    });
    console.log(fetchedProduct.data.myCart[0].products);
  };

  useEffect(() => {
    fetchingProducts();
    console.log("fetched");
  }, []);

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
            <Typography variant="h3" color="primary">
              Shopping Cart
            </Typography>
            <Divider />
          </div>
          {value.map((cartItem) => {
            if ("course" in cartItem) {
              return (
                <Grid item xs={12} className={classes.paper} key={cartItem.id}>
                  <Card>
                    <CardActions>
                      <Item
                        id={cartItem._id}
                        title={cartItem.name}
                        content="Course"
                        views={cartItem.views}
                        validity={cartItem.validity}
                        price={cartItem.price}
                        instructor={cartItem.course.faculty}
                        duration={cartItem.duration}
                        onClick={handleOnClick}
                      />
                    </CardActions>
                  </Card>
                </Grid>
              );
            } else if ("test" in cartItem) {
              return (
                <Grid item xs={12} className={classes.paper} key={cartItem.id}>
                  <Card>
                    <CardActions>
                      <TestSeries
                        id={cartItem._id}
                        title={cartItem.name}
                        content="Test Series"
                        validity={cartItem.validity}
                        price={cartItem.price}
                        subject={cartItem.test.subject}
                        onClick={handleOnClick}
                      />
                    </CardActions>
                  </Card>
                </Grid>
              );
            } else if ("book" in cartItem) {
              return (
                <Grid item xs={12} className={classes.paper} key={cartItem.id}>
                  <Card>
                    <CardActions>
                      <Book
                        id={cartItem._id}
                        title={cartItem.name}
                        content="Book"
                        price={cartItem.price}
                        instructor={cartItem.book.faculty}
                        onClick={handleOnClick}
                      />
                    </CardActions>
                  </Card>
                </Grid>
              );
            }
          })}
        </Container>
      </Grid>
      <Grid item sm={7} xs={12} md={4} lg={3}>
        <Container className={classes.style}>
          <Total items={value.length} price={total} productID={productID} />
        </Container>
      </Grid>
      <Grid item xs={false} md={false} lg={1}></Grid>
    </Grid>
  );
};

export default Cart;
