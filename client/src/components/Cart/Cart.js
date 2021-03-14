import React from "react";
import {
  Container,
  Grid,
  Card,
  makeStyles,
  CardContent,
  Typography,
  CardActions,
  Button,
  Checkbox,
  FormControlLabel,
  Link
} from "@material-ui/core";
import Item from "./Item";

const CartStyles = makeStyles({
  TotalCard: {
    background: "white"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    color: "#3f51b5",
    fontWeight: "600",
    lineHeight: "16px"
  },
  pos: {
    marginBottom: 12
  },
  totalButton: {
    background: "#3f51b5",
    color: "white",
    margin: "auto",
    borderRadius: "2rem"
  }
});

const Cart = () => {
  const items = 5.00;
  const title = `($${items})`;
  const classes = CartStyles();
  return (
    <div>
      <Container
        style={{
          background: "blue",
          padding: "20px",
          minWidth: "100px",
          margin: "15px"
        }}
      >
        <Grid container spacing={2} direction={"row"}>
          <Grid xs={7}>
            <Item />
          </Grid>
          <Grid xs={4}>
            <Card className={classes.TotalCard}>
              <CardContent>
                <Typography className={classes.title} component="h5">
                  Your order is eligible for free order
                </Typography>

                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant
                  component="h5"
                >
                  Select this option at checkout &nbsp;
                  <Link color="textPrimary">Details</Link>
                </Typography>
                <Typography variant component="h4">
                  {`Subtotal (${items} items) : ${title}`}
                </Typography>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="This order contains a gift"
                />
              </CardContent>
              <CardActions>
                <Button className={classes.totalButton}>Proceed to Buy</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Cart;
