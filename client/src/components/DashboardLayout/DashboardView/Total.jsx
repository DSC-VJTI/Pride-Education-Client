import React, { useEffect, useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  CircularProgress,
  Button,
  CardHeader,
  Divider
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { useAuthState } from "../../../context/context";
import axios from "axios";
import { BASE_URL } from "../../../constants";

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

const Total = ({
  className,
  apiRoute,
  cardTitle,
  Icon,
  setCounter,
  counter,
  ...rest
}) => {
  const classes = useStyles();
  const { token } = useAuthState();

  const [count, setCount] = useState(0);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(BASE_URL + apiRoute, {
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
      <CardHeader title={`Total ${cardTitle}`} />
      <Divider />
      <CardContent>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Grid container justify="space-between" spacing={3}>
            <Grid item xs={6}>
              <Avatar className={classes.avatar}>
                <Icon />
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
          onClick={() => setCounter(counter)}
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

Total.propTypes = {
  className: PropTypes.string,
  apiRoute: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  Icon: PropTypes.node.isRequired,
  setCounter: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

export default Total;
