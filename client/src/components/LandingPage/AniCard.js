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

export default function AniCard({ number }) {
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
            CA Abhishek Khilwani
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum, dolor sit amet consectetur adipisic ing elit. Neque
            exercitationem at placeat ven iam ea sunt possimus, consectetur,
            officiis volupta tem qui ut nesciunt recusandae eveniet asperiores,
            vo luptatibus illo obcaecati voluptates sit illum molestia s porro
            corporis iste error! Laborum debitis ipsa sunt!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          className={classes.adjust}
          color="primary"
          variant="contained"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
