import React from "react";
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListSubheader,
  Typography,
  Button,
  Divider
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import ImageIcon from "@material-ui/icons/Image";

const CourseListStyles = makeStyles((theme) => ({
  CourseContent: {
    padding: "5px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  CourseContentList: {
    width: "fit-content",
    // background: "#64b5f6",
    background: "#f1f1f1",
    // background: "#42a5f4",

    padding: "5px",
    borderRadius: "10px",
    // boxShadow: "1px 1px #3949ab",
    margin: "auto"
  },
  fontSizeIcon: {
    fontSize: 15
  },
  smallAvatar: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  blue: {
    color: theme.palette.getContrastText(blue[400]),
    backgroundColor: "#f1f1f1"
  },
  ListSubBack: {
    // background: "#f1f1f1",
    // borderRadius: "10px",
    // boxShadow: "1px 1px #3949ab",
    // position: "static",
    color: "#f26522",
    fontWeight: "600",
    margin: "auto",
    textTransform: "uppercase",
    textAlign: "center"
  },
  Duration: {
    color: "white",
    margin: "10px",
    fontSize: "20px"
  },
  Enroll: {
    background: "#f26522",
    color: "#ffffff",
    margin: "1rem auto",
    borderRadius: "2rem",
    // border: "1px outset",
    width: "12rem"
  }
}));

function CourseContents({ Content }) {
  const classes = CourseListStyles();

  return (
    <div className={classes.CourseContent}>
      <Typography className={classes.Duration}>
        Duration: Will be passed through props
      </Typography>
      <div data-aos="flip-right">
        <List
          subheader={
            <ListSubheader className={classes.ListSubBack}>
              Course Material
              <Divider />
            </ListSubheader>
          }
          className={classes.CourseContentList}
        >
          {Content.map((course) => (
            <ListItem>
              <ListItemAvatar>
                <Avatar className={`${classes.smallAvatar} ${classes.blue}`}>
                  <ImageIcon className={classes.fontSizeIcon} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={course.Material} />
            </ListItem>
          ))}
        </List>
      </div>
      <Button className={classes.Enroll} href="/cart">
        Enroll Now!!
      </Button>
    </div>
  );
}
export default CourseContents;
