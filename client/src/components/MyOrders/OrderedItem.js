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
        }}
      >
        <div>
          <img
            style={{
              width: "80%",
              height: "40%",
              margin: "20px auto",
              display: "block"
            }}
            src={download}
          />
        </div>
        <div
          className="cardContentForOrder"
          style={{
            display: "flex",
            border: "1px solid red",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "12vh"
            }}
          >
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                color: "rgb(242, 101, 34)"
              }}
              color="primary"
            >
              {title}
            </Typography>
            <Typography
              style={{
                fontWeight: "bold",
                color: "rgb(242, 101, 34)",
                fontSize: "15px"
              }}
              variant="body"
            >
              {`Bought on : ${new Date(buyDate).getDate()}/${new Date(
                buyDate
              ).getMonth()}/${new Date(buyDate).getFullYear()}`}
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "12vh"
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
            <Divider />
            <Typography
              style={{
                fontWeight: "bold",
                color: "rgb(242, 101, 34)",
                fontSize: "15px"
              }}
              variant="subtitle2"
            >
              By {instructor}
            </Typography>
          </div>
        </div>
        <Button
          style={{
            display: "block",
            width: "50%",
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
