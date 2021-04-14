import React, { useEffect, useState } from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import Page from "../../UI Elements/Page";
import Results from "./results";
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

const SupportListView = () => {
  const classes = useStyles();
  const { token } = useAuthState();
  const [queries, setQueries] = useState([]);
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(BASE_URL + "/queries", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        setQueries(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [counter]);

  const handleCustomerSolved = (enquiry) => {
    axios
      .put(
        BASE_URL + "/queries",
        {
          query: {
            ...enquiry,
            solved: true
          }
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then((res) => {
        setCounter(counter + 1);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDelete = (enquiry) => {
    axios
      .delete(BASE_URL + `/queries/${enquiry._id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        setCounter(counter + 1);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return isLoading ? (
    <Loading />
  ) : (
    <Page className={classes.root} title="Enquiries">
      <Container maxWidth={false}>
        <Toolbar title="enquiry" isButtonHidden={true} />
        <Box mt={3}>
          <Results
            queries={queries}
            handleCustomerSolved={handleCustomerSolved}
            handleDelete={handleDelete}
          />
        </Box>
      </Container>
    </Page>
  );
};

export default SupportListView;
