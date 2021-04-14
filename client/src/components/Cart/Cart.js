import React, { useState, useEffect, useContext } from "react";
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
import { SnackbarContext } from "../../context/snackbarContext";
import Loading from "../UI Elements/Loading";
import Alert from "../UI Elements/DismissibleAlert";

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

const Cart = (props) => {
  const [
    open,
    setOpen,
    handleClose,
    severity,
    setSeverity,
    message,
    setMessage
  ] = useContext(SnackbarContext);
  const state = useAuthState();
  const [productID, setProductID] = useState([]);
  const [value, setValue] = useState(initialFValues);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const classes = CartStyles();
  const deleteProduct = async (deleteId) => {
    const deletedProduct = await axios.delete(`${BASE_URL}/cart/${deleteId}`, {
      headers: {
        Authorization: `Bearer ${state.token}`
      }
    });
  };
  const handleOnClick = (e) => {
    deleteProduct(e);
    setValue(
      value.filter((item) => {
        return item._id !== e;
      })
    );
    setSeverity("info");
    setMessage("You have successfully deleted the item from the cart.");
    setOpen(true);
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
    const fetchedProduct = await axios.post(`${BASE_URL}/cart`, state.user, {
      headers: {
        Authorization: `Bearer ${state.token}`
      }
    });

    setValue(fetchedProduct.data.myCart[0].products);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchingProducts();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Alert alertDisplay={props.alert} />
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
              <Typography
                variant="h3"
                style={{
                  color: "#f26f22"
                }}
              >
                Shopping Cart
              </Typography>
              <Divider />
            </div>
            {value.length != 0 ? (
              value.map((cartItem) => {
                if ("course" in cartItem) {
                  return (
                    <Grid
                      item
                      xs={12}
                      className={classes.paper}
                      key={cartItem._id}
                    >
                      <Card>
                        <CardActions>
                          <Item
                            id={cartItem._id}
                            title={cartItem.name}
                            content="Course"
                            views={cartItem.course.views}
                            validity={cartItem.course.validity}
                            price={cartItem.price}
                            instructor={cartItem.course.faculty}
                            duration={cartItem.course.duration}
                            onClick={handleOnClick}
                          />
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                } else if ("test" in cartItem) {
                  return (
                    <Grid
                      item
                      xs={12}
                      className={classes.paper}
                      key={cartItem._id}
                    >
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
                    <Grid
                      item
                      xs={12}
                      className={classes.paper}
                      key={cartItem._id}
                    >
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
              })
            ) : (
              <div>
                <h2>Please add some products to the cart</h2>
              </div>
            )}
          </Container>
        </Grid>
        <Grid item sm={7} xs={12} md={4} lg={3}>
          <Container className={classes.style}>
            <Total
              setAlert={props.setAlert}
              items={value.length}
              price={total}
              productID={productID}
            />
          </Container>
        </Grid>
        <Grid item xs={false} md={false} lg={1}></Grid>
      </Grid>
    </>
  );
};

export default Cart;
