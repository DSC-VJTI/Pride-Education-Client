import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import { ContactSupport } from "@material-ui/icons";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import axios from "axios";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../constants";
import { useAuthState } from "../../../context/context";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%"
  },
  avatar: {
    backgroundColor: "rgb(242, 101, 34)",
    height: 56,
    width: 56
  }
}));

const TotalQueries = ({ className, setState, ...rest }) => {
  const classes = useStyles();
  const { token } = useAuthState();

  const [count, setCount] = useState(0);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(BASE_URL + "/queries/getCount", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        setCount(res.data.count);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Total Queries" />
      <Divider />
      <CardContent>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Grid container justify="space-between" spacing={3}>
            <Grid item xs={6}>
              <Avatar className={classes.avatar}>
                <ContactSupport />
              </Avatar>
            </Grid>
            <Grid item xs={6}>
              <Typography color="textPrimary" variant="h3">
                {count}
              </Typography>
            </Grid>
          </Grid>
        )}
      </CardContent>
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
          onClick={() => setState(3)}
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

TotalQueries.propTypes = {
  className: PropTypes.string
};

export default TotalQueries;
