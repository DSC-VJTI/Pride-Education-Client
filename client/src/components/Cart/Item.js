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
import download from "../../Resources/img1.jpeg";

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
    }
  }
}));

const Item = ({ title, content, views, validity, price, instructor }) => {
  const classes = useStyles();
  return (
    // <Paper className={classes.root}>
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
          <Typography gutterBottom variant="h6">
            {price}
          </Typography>

          <Divider />

          <Typography gutterbottom variant="subtitle2">
            By {instructor}
          </Typography>

          <div
            style={{
              paddingTop: "38px",
              textAlign: "right",
              paddingRight: "16px"
            }}
          >
            <Fab color="primary" aria-label="add">
              <DeleteIcon />
            </Fab>
          </div>
        </Grid>
      </Grid>
    </Grid>
    // </Paper>
  );
};

export default Item;
