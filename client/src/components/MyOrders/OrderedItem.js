import React from "react";
import { Divider, Grid, Typography, makeStyles } from "@material-ui/core";
import download from "../../Resources/img1.jpeg";
import { CardActions } from "@material-ui/core";
import Button from "../UI Elements/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    "& img": {
      margin: "auto",
      display: "block",
      width: "100%",
      height: "auto",
      maxWidth: "300px"
    }
  }
}));

const OrderedItem = ({ title, price, instructor, buyDate }) => {
  const classes = useStyles();
  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(241, 241, 241)"
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center"
        }}
      >
        <div>
          <img
            style={{ width: "40%", margin: "15px auto", display: "block" }}
            src={download}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Typography
              style={{
                fontWeight: "bold",
                margin: "20px 0 20px 0",
                color: "rgb(242, 101, 34)"
              }}
              gutterBottom
              variant="h6"
              color="primary"
            >
              {title}
            </Typography>
            <Typography
              style={{
                fontWeight: "bold",
                margin: "20px 0 20px 0",
                color: "rgb(242, 101, 34)"
              }}
              gutterBottom
              variant="body"
            >
              {`Bought on : ${new Date(buyDate).getDate()}/${new Date(
                buyDate
              ).getMonth()}/${new Date(buyDate).getFullYear()}`}
            </Typography>
          </div>
          <div>
            <Typography
              style={{
                fontWeight: "bold",
                margin: "20px 0 20px 0",
                color: "rgb(242, 101, 34)"
              }}
              gutterBottom
              variant="subtitle2"
            >
              {`Rs.${price}`}
            </Typography>
            <Divider />
            <Typography
              style={{
                fontWeight: "bold",
                margin: "20px 0 20px 0",
                color: "rgb(242, 101, 34)"
              }}
              gutterbottom
              variant="subtitle2"
            >
              By {instructor}
            </Typography>
          </div>
        </div>
        {/* <CardActions
          style={{
            width: "100%",
            textAlign: "center"
          }}
        > */}
        <Button
          style={{
            display: "block",
            width: "60%",
            margin: "10px auto"
          }}
          variant="contained"
          color="primary"
          size="large"
          text="View Course"
          type="submit"
        />
        {/* </CardActions> */}
      </div>
    </>
  );
};

export default OrderedItem;
