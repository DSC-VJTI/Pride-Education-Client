import React from "react";
import { Divider, Grid, Typography, makeStyles } from "@material-ui/core";
import download from "../../Resources/img1.jpeg";

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
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} sm={5} style={{ paddingLeft: "10px" }}>
        <div>
          <img src={download} />
        </div>
      </Grid>

      <Grid item xs={12} container sm={7} style={{ paddingLeft: "40px" }}>
        <Grid item xs={8}>
          <Typography gutterBottom variant="h6" color="primary">
            {title}
          </Typography>
          <Typography gutterBottom variant="body">
            {/* {`Bought on: ${buyDate.getDate()}/${buyDate.getMonth()}/${
              buyDate.getYear() - 100
            }`} */}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography gutterBottom variant="subtitle2">
            {`Rs.${price}`}
          </Typography>
          <Divider />
          <Typography gutterbottom variant="subtitle2">
            By {instructor}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OrderedItem;
