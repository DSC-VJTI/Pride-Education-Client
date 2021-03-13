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
          <Typography
            variant="h6"
            style={{
              flexGrow: 1
            }}
          >
            Pride Education
          </Typography>

          <Button color="inherit" className="hideOnMobile" href="/support">
            Support
          </Button>
          <Button color="inherit" className="hideOnMobile">
            MarketPlace
          </Button>
          <Button color="inherit" className="hideOnMobile" href="/login">
            Login
          </Button>
          <Button color="inherit" className="hideOnMobile" href="/register">
            Register
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
