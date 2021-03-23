import {
  Card,
  CardActionArea,
  CardActions,
  Container,
  Grid,
  SvgIcon
} from "@material-ui/core";
import React from "react";
import Visa from "../..";

const PaymentPage = () => {
  return (
    <Container>
      <Grid container>
        <Grid item md={3}>
          <Card>
            <CardActionArea>
              <SvgIcon></SvgIcon>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PaymentPage;
