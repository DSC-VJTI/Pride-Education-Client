import React from "react";
import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import Page from "../../UI Elements/Page";
import Toolbar from "../Toolbar";
import ClassPane from "../../Resource Page/ClassPane/ClassPane";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const ProductList = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Products">
      <Container maxWidth={false}>
        <Toolbar title="product" link="/product/add" />
        <Box mt={3}>
          <Grid container spacing={3}>
            <ClassPane />
          </Grid>
        </Box>
      </Container>
    </Page>
  );
};

export default ProductList;
