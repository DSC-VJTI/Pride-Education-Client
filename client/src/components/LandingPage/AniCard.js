import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import "./css/AniCard.css";
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
    <Card
      className="carouselCard"
      className={classes.root}
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "space-between",
        flexDirection: "column"
      }}
      data-aos="flip-up"
    >
      <CardActionArea
        style={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "space-between"
        }}
      >
        <img
          src="https://picsum.photos/100"
          className="addMarginTop"
          style={{ borderRadius: "50%", width: "20%" }}
          alt=""
        />
        <CardContent
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            height: "30vh"
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            style={{
              fontWeight: "bold",
              height: "35%"
            }}
            component="h3"
            className="centerText"
          >
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
        <Button
          size="small"
          className={classes.adjust}
          style={{
            backgroundColor: "#f26522",
            borderRadius: "999999999999999999999999999px"
          }}
          color="primary"
          variant="contained"
        >
          Learn More
        </Button>
      </CardActionArea>
    </Card>
  );
}
