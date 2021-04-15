import React from "react";
import { Divider, Grid, Typography, makeStyles } from "@material-ui/core";
import download from "../../Resources/img1.jpeg";
import Button from "../UI Elements/Button";
import DateField from "./DateField";
const useStyles = makeStyles((theme) => ({
  root: {
    "& img": {
      margin: "auto",
      display: "block",
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
          backgroundColor: "rgb(241, 241, 241)",
          margin: "30px auto"
        }}
      >
        <div>
          <img
            className="orderImage"
            style={{
              width: "35%",
              margin: "20px auto",
              display: "block"
            }}
            src={download}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: "20vh"
          }}
        >
          <Typography
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              color: "rgb(242, 101, 34)"
            }}
            variant="subtitle2"
          >
            {`Rs.${price}`}
          </Typography>
          <Typography
            style={{
              fontWeight: "bold",
              fontSize: "20px"
            }}
            color="primary"
          >
            {title}
          </Typography>

          <Typography
            style={{
              fontWeight: "bold",
              fontSize: "20px"
            }}
            variant="subtitle2"
          >
            By {instructor}
          </Typography>
          <DateField date={buyDate} />
        </div>
        <Button
          style={{
            display: "block",
            width: "30%",
            margin: "30px auto 0"
          }}
          variant="contained"
          color="primary"
          size="large"
          text="View Course"
          type="submit"
        />
      </div>
    </>
  );
};

export default OrderedItem;
