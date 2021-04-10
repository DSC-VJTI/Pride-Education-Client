import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  makeStyles
} from "@material-ui/core";
import { Mail, MessageSquare } from "react-feather";

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, queries, ...rest }) => {
  const classes = useStyles();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <PerfectScrollbar>
        <Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Mobile Number</TableCell>
                <TableCell>Solved?</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {queries
                .slice(page * limit + 1, (page + 1) * limit)
                .map((customer) => (
                  <TableRow hover key={customer._id}>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.description}</TableCell>
                    <TableCell>{customer.mobileNumber}</TableCell>
                    <TableCell>{customer.solved.toString()}</TableCell>
                    <TableCell>
                      <Box display="flex" flexDirection="column">
                        <a
                          href={`mailto:${customer.email}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Mail color="green" />
                        </a>
                        <a
                          href={encodeURI(
                            `https://wa.me/91${customer.mobileNumber}`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageSquare color="green" />
                        </a>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={queries.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  queries: PropTypes.array.isRequired
};

export default Results;
