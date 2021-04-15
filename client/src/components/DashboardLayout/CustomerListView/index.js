import React, { useEffect, useState } from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import Page from "../../UI Elements/Page";
import Results from "./Results";
import Toolbar from "../Toolbar";
import axios from "axios";
import { BASE_URL } from "../../../constants";
import { useAuthState } from "../../../context/context";
import Loading from "../../UI Elements/Loading";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CustomerListView = () => {
  const classes = useStyles();
  const { token } = useAuthState();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .post(
        BASE_URL + "/admin/getUsers",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then((res) => {
        setUsers(res.data.allUsers);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Page className={classes.root} title="Customers">
      <Container maxWidth={false}>
        <Toolbar title="customer" isButtonHidden={true} />
        <Box mt={3}>
          <Results customers={users} />
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
