import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Loading from "../UI Elements/Loading";
import { useAuthState } from "../../context/context";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 250
  }
});

export default function Resources() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated } = useAuthState();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(BASE_URL + "/products")
      .then((res) => res.data.data)
      .then((data) => {
        const books = data.filter((product) => product.hasOwnProperty("book"));
        console.log(books);
        setBooks(books);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const classes = useStyles();

  return isLoading ? (
    <Loading />
  ) : (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Book Name</TableCell>
            <TableCell align="center">Book URL (Click to open)</TableCell>
            <TableCell align="center">Download</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((row) => {
            return (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row.book.file}
                </TableCell>
                <TableCell align="center">
                  <Link
                    to={{
                      pathname: `/resources/${row.book.file}`,
                      state: {
                        url: row.book.url
                      }
                    }}
                  >
                    Click to open in browser
                  </Link>
                </TableCell>
                <TableCell align="center">
                  {isAuthenticated ? (
                    <Button color="inherit" variant="contained">
                      <a
                        href={row.book.url + "&download=1"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download
                      </a>
                    </Button>
                  ) : (
                    <Button
                      text={"Login To Add To Cart"}
                      onClick={() => {
                        history.push("/login");
                      }}
                      style={{ margin: "1rem" }}
                    >
                      Download
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
