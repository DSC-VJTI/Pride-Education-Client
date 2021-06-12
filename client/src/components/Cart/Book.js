import React from "react";
import { Grid, Typography, makeStyles, Divider } from "@material-ui/core";
import download from "../../Resources/img1.jpeg";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";

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
  },
  button: {
    paddingTop: "74px",
    textAlign: "right",
    paddingRight: "14px"
  }
}));

const Book = ({
  title,
  content,
  price,
  discount,
  instructor,
  onClick,
  id,
  imageUrl
}) => {
  const history = useHistory();
  const classes = useStyles();

  const handleOnClick = (e) => {
    onClick(id);
  };
  return (
    <Grid container spacing={4} className={classes.root}>
      <Grid item xs={12} sm={5} style={{ paddingLeft: "10px" }}>
        <div>
          <img src={imageUrl ? imageUrl : download} />
        </div>
      </Grid>
      <Grid item xs={12} container sm={7} style={{ paddingLeft: "40px" }}>
        <Grid item xs={8}>
          <Typography
            variant="h6"
            style={{ color: "#f26522", cursor: "pointer" }}
            onClick={() => history.push(`/book/details/${id}`)}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" style={{ color: "#f26522" }}>
            {discount === 0 ? (
              <span>₹{price}</span>
            ) : (
              <>
                <span
                  style={{
                    textDecoration: "line-through red"
                  }}
                >
                  ₹{price}
                </span>{" "}
                ₹{discountedPrice}{" "}
                <span style={{ color: "red" }}>({discount}% OFF)</span>
              </>
            )}
          </Typography>
          <div
            style={{
              paddingTop: "38px",
              textAlign: "right",
              paddingRight: "16px"
            }}
          >
            <Fab aria-label="add" color="primary" onClick={handleOnClick}>
              <DeleteIcon />
            </Fab>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Book;
