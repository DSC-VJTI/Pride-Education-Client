import React from "react";
import {
  Divider,
  Grid,
  Paper,
  Typography,
  makeStyles,
  Card,
  CardHeader
} from "@material-ui/core";
import download from "../../assets/images/resourceImages/img1.jpeg";

import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
const useStyles = makeStyles((theme) => ({
  root: {
    "& img": {
      margin: "auto",
      display: "block",
      width: "100%",
      height: "auto",
      maxWidth: "300px"
    },
    "& .MuiFab-root": {
      background: "#f26522"
    }
  }
}));

const Item = ({ title, content, views, validity, price, instructor }) => {
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
          <Typography gutterBottom variant="h6" style={{ color: "#f26522" }}>
            {title}
          </Typography>
          <Typography gutterBottom variant="subtitle2">
            <ul>
              <li>Content Type: {content}</li>
              <li>Duration: 100 Hours</li>
              <li>{views} Views</li>
              <li>Validity {validity} </li>
            </ul>
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography gutterBottom variant="h6" style={{ color: "#f26522" }}>
            ₹{price}
          </Typography>

          <Divider />
          <Typography
            gutterbottom
            variant="subtitle2"
            style={{ margin: "1rem 0rem" }}
          >
            By {instructor}
          </Typography>

          <div
            style={{
              paddingTop: "38px",
              textAlign: "right",
              paddingRight: "16px"
            }}
          >
            <Fab aria-label="add" color="primary">
              <DeleteIcon />
            </Fab>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Item;
