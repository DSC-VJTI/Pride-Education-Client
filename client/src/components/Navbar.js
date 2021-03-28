import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import { Menu } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import ShopIcon from "@material-ui/icons/Shop";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleDrawer = () => {
    setOpen(true);
  };
  return (
    <div>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#f1f1f1",
          color: "#f26522"
        }}
      >
        <Toolbar>
          <div className="showOnMobile">
            <IconButton
              color="inherit"
              edge="start"
              aria-label="menu"
              onClick={handleDrawer}
            >
              <Menu />
            </IconButton>
          </div>
          <Typography
            variant="h6"
            style={{
              flexGrow: 1
            }}
          >
            Pride Education
          </Typography>

          <NavLink
            to="/support"
            className="hideOnMobile"
            style={{
              textDecoration: "none",
              color: "#f26522",
              textTransform: "uppercase",
              marginRight: "10px"
            }}
          >
            Support
          </NavLink>
          <NavLink
            to="/classes"
            className="hideOnMobile"
            style={{
              textDecoration: "none",
              color: "#f26522",
              textTransform: "uppercase",
              marginRight: "10px"
            }}
          >
            MarketPlace
          </NavLink>
          <NavLink
            to="/login"
            className="hideOnMobile"
            style={{
              textDecoration: "none",
              color: "#f26522",
              textTransform: "uppercase",
              marginRight: "10px"
            }}
          >
            Login
          </NavLink>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <div
          style={{
            height: "100%",
            width: "250px",
            backgroundColor: "#f1f1f1"
          }}
        >
          <List>
            <NavLink to="/" className="fixLinks">
              <ListItem button onClick={() => setOpen(false)}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
              <Divider />
            </NavLink>
            <NavLink to="/support" className="fixLinks">
              <ListItem button onClick={() => setOpen(false)}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Support"} />
              </ListItem>
              <Divider />
            </NavLink>
            <NavLink to="/classes" className="fixLinks">
              <ListItem button onClick={() => setOpen(false)}>
                <ListItemIcon>
                  <ShopIcon />
                </ListItemIcon>
                <ListItemText primary={"Marketplace"} />
              </ListItem>
            </NavLink>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
