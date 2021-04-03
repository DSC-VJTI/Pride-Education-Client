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
import { Link } from "react-router-dom";
import Button from "../UI Elements/Button";

const DetailsStyles = makeStyles((theme) => ({
  root: {
    background: "#f1f1f1",
    borderRadius: "2rem",
    justifyContent: "center"
  },
  table: {
    minWidth: 650
  }
}));

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData("Faculty", 159, 6.0),
  createData("Product", 237, 9.0),
  createData("Applicable Exam", 262, 16.0),
  createData("Language", 305, 3.7),
  createData("Delivery Time", 356, 16.0),
  createData("Duration", 356, 16.0),
  createData("Validity", 356, 16.0),
  createData("Validity", 356, 16.0),
  createData("Mode", 356, 16.0),
  createData("MRP", 356, 16.0),
  createData("Discount", 356, 16.0),
  createData("Discounted Price", 356, 16.0)
];

const Details = () => {
  const classes = DetailsStyles();
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
            {/* Course Name */}
            {prod._id}
          </Typography>
          <Button text={"Add To Cart"} style={{ margin: "1rem" }}></Button>
        </Grid>

        <Divider variant="fullWidth" />

        <Grid item xs={12}>
          <Typography>Price</Typography>
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
                {rows.map((row) => (
                  <TableRow key={row.name} style={{ width: "fit-content" }}>
                    <TableCell
                      component="th"
                      scope="row"
                      align="left"
                      size="small"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="left" size="small">
                      {row.calories}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default Details;
