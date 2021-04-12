import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Box,
  Button,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles
} from "@material-ui/core";
import { Search as SearchIcon } from "react-feather";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));

const Toolbar = ({
  className,
  title,
  link,
  isButtonHidden = false,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <TextField
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon fontSize="small" color="action">
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              )
            }}
            placeholder={`Search ${title}`}
            variant="outlined"
          />
        </Box>
        {!isButtonHidden &&
          (link ? (
            <Link to={link}>
              <Button
                style={{ backgroundColor: "rgb(242, 101, 34)", color: "white" }}
                variant="contained"
              >
                {`Add ${title}`}
              </Button>
            </Link>
          ) : (
            <Button color="rgb(242, 101, 34)" variant="contained">
              {`Add ${title}`}
            </Button>
          ))}
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
