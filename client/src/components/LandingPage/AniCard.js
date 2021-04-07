import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 300,
    width: "100%"
  },
  adjust: {
    marginLeft: "auto",
    marginRight: "auto"
  }
});

export default function AniCard({ name, text }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} data-aos="flip-up">
      <CardActionArea
        style={{
          display: "grid",
          placeItems: "center"
        }}
      >
        <img
          src="https://picsum.photos/100"
          className="addMarginTop"
          style={{ borderRadius: "50%" }}
          alt=""
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className="centerText"
          >
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
}
