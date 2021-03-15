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
    "& .MuiPaper-root": {
      flexGrow: 1,
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: "500px",
      textAlign: "center"
    },
    "& img": {
      margin: "auto",
      display: "block",
      width: "100%",
      height: "auto",
      maxWidth: "300px"
    },
    "& div": {
      // textAlign: "center"
    }
  }
}));

const Item = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5} style={{ paddingLeft: "10px" }}>
          <div>
            <img src={download} />
          </div>
        </Grid>

        <Grid item xs={12} container sm={7} style={{ paddingLeft: "40px" }}>
          <Grid item xs={8}>
            <Typography gutterBottom variant="h6" color="primary">
              SCMPE Full Course
            </Typography>
            <Typography gutterBottom variant="subtitle2">
              <ul>
                <li>Content Type: Classes</li>
                <li>Duration: 100 Hours</li>
                <li>1.7 Views</li>
                <li>Validity</li>
              </ul>
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography gutterBottom variant="h6">
              Rs. 15,000
            </Typography>

            <Divider />

            <Typography gutterbottom variant="subtitle2">
              By CA. Abhishek Khilwani
            </Typography>

            <div
              style={{
                paddingTop: "35px",
                textAlign: "right",
                paddingRight: "20px"
              }}
            >
              <Fab color="primary" aria-label="add">
                <DeleteIcon />
              </Fab>
            </div>
          </Grid>
        </Grid>
        </Grid>
    </Paper>
  );
};

export default Item;
