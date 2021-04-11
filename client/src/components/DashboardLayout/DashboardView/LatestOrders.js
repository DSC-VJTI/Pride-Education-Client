import React, { useEffect, useState } from "react";
import clsx from "clsx";
import moment from "moment";
import { v4 as uuid } from "uuid";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  makeStyles
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import axios from "axios";
import { BASE_URL } from "../../../constants";
import { useAuthState } from "../../../context/context";

const data = [
  {
    ref: "CDD1049",
    amount: 30.5,
    customer: {
      name: "Ekaterina Tankova"
    },
    createdAt: 1555016400000,
    status: "pending"
  },
  {
    ref: "CDD1048",
    amount: 25.1,
    customer: {
      name: "Cao Yu"
    },
    createdAt: 1555016400000,
    status: "delivered"
  },
  {
    ref: "CDD1047",
    amount: 10.99,
    customer: {
      name: "Alexa Richardson"
    },
    createdAt: 1554930000000,
    status: "refunded"
  },
  {
    ref: "CDD1046",
    amount: 96.43,
    customer: {
      name: "Anje Keizer"
    },
    createdAt: 1554757200000,
    status: "pending"
  },
  {
    ref: "CDD1045",
    amount: 32.54,
    customer: {
      name: "Clarke Gillebert"
    },
    createdAt: 1554670800000,
    status: "delivered"
  },
  {
    ref: "CDD1044",
    amount: 16.76,
    customer: {
      name: "Adam Denisov"
    },
    createdAt: 1554670800000,
    status: "delivered"
  }
];

const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: "flex-end"
  }
}));

const LatestOrders = ({ className, ...rest }) => {
  const classes = useStyles();
  const [orders, setOrders] = useState([]);
  const { token } = useAuthState();

  useEffect(() => {
    axios
      .get(BASE_URL + "/orders", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log(res.data.data);
        setOrders(res.data.data.splice(0, 5));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Latest Orders" />
      <Divider />
      <PerfectScrollbar>
        <Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Serial No.</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel active direction="desc">
                      Date
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>Coupon</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order, idx) => (
                <TableRow hover key={idx}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>{order.user}</TableCell>
                  <TableCell>
                    {moment(order.orderPlacedAt).format("DD/MM/YYYY")}
                  </TableCell>
                  <TableCell>{order.coupon}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
