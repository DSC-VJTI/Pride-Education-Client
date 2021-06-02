import React from "react";
import {
  Divider,
  Grid,
  Typography,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

import Button from "../UI Elements/Button";
import { useAuthState } from "../../context/context";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { Link, useHistory } from "react-router-dom";

const DetailsStyles = makeStyles((theme) => ({
  root: {
    background: "#f1f1f1",
    borderRadius: "2rem",
    justifyContent: "center"
  },
  table: {
    minWidth: 250
  }
}));

const BookDetails = ({ product }) => {
  const classes = DetailsStyles();

  const history = useHistory();

  const discountedPrice = product.price - product.discount;

  const state = useAuthState();
  const { isAuthenticated } = useAuthState();
  const AddToCart = async () => {
    const addingProduct = await axios.post(
      `${BASE_URL}/cart/${product._id}`,
      state.user,
      {
        headers: {
          Authorization: `Bearer ${state.token}`
        }
      }
    );
    setTimeout(() => {
      history.push("/cart");
    }, 2000);
  };

  return (
    <div>
      <Grid container spacing={2} className={classes.root}>
        <Grid
          item
          xs={12}
          spacing={3}
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <Typography style={{ margin: "0px", padding: "0px" }}>
            {product.name}
          </Typography>
          {isAuthenticated ? (
            <Button
              text={"Add To Cart"}
              onClick={AddToCart}
              style={{ margin: "1rem" }}
            ></Button>
          ) : (
            <Button
              text={"Login To Add To Cart"}
              onClick={() => {
                history.push("/login");
              }}
              style={{ margin: "1rem" }}
            ></Button>
          )}
        </Grid>

        <Divider variant="fullWidth" />

        <Grid item xs={12}>
          <Typography variant={"h6"}>About this Item</Typography>
          <Divider />
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    size="small"
                    style={{ width: "fit-content" }}
                  >
                    Details
                  </TableCell>
                  <TableCell
                    align="left"
                    size="small"
                    style={{ width: "fit-content" }}
                  >
                    Information
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow style={{ width: "fit-content" }}>
                  <TableCell
                    component="th"
                    scope="row"
                    align="left"
                    size="small"
                  >
                    Name
                  </TableCell>
                  <TableCell align="left" size="small">
                    {product.name}
                  </TableCell>
                </TableRow>
                <TableRow style={{ width: "fit-content" }}>
                  <TableCell
                    component="th"
                    scope="row"
                    align="left"
                    size="small"
                  >
                    Price
                  </TableCell>
                  <TableCell align="left" size="small">
                    <span
                      style={{
                        textDecoration: "line-through red"
                      }}
                    >
                      ₹{product.price}
                    </span>
                    ₹{discountedPrice}
                  </TableCell>
                </TableRow>

                <TableRow style={{ width: "fit-content" }}>
                  <TableCell
                    component="th"
                    scope="row"
                    align="left"
                    size="small"
                  >
                    Sample
                  </TableCell>
                  <TableCell align="left" size="small">
                    <a href={product.book.url}>Download Now</a>
                  </TableCell>
                </TableRow>
                <TableRow style={{ width: "fit-content" }}>
                  <TableCell
                    component="th"
                    scope="row"
                    align="left"
                    size="small"
                  >
                    System Requirements
                  </TableCell>
                  <TableCell align="left" size="small">
                    Windows 7 Minimum
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default BookDetails;
