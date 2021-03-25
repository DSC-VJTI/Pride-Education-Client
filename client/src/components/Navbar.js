import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" edge="start" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6">Pride Education</Typography>

          <Link
            to="/support"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Button color="inherit" className="hideOnMobile">
              Support
            </Button>
          </Link>
          <Link
            to="/classes"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Button color="inherit" className="hideOnMobile">
              MarketPlace
            </Button>
          </Link>
          <Link
            to="/login"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Button color="inherit" className="hideOnMobile">
              Login
            </Button>
          </Link>
          <Link
            to="/register"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Button color="inherit" className="hideOnMobile">
              Register
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
