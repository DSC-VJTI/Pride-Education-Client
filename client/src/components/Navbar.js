import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/Inbox";
import MailIcon from "@material-ui/icons/Mail";
import { Link, useHistory } from "react-router-dom";
import { Menu } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import ShopIcon from "@material-ui/icons/Shop";
import { useAuthDispatch, useAuthState } from "../context/context";
import { logout } from "../actions/authActions";

const NavbarStyles = makeStyles({
  list: {
    width: "250px",
    "& .MuiPaper-root": {
      justifyContent: "center",
      // backgroundColor: "#f1f1f1",
      backgroundColor: "#fffff"
    },
    "& .MuiList-root": {
      display: "flex"
    },
    "& .MuiListItemText-root": {
      width: "max-content"
    },
    "& .MuiTypography-body1": {
      fontWeight: "600",
      color: "#f26522"
    }
  }
});

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleDrawer = () => {
    setOpen(true);
  };
  const { isAuthenticated } = useAuthState();
  const dispatch = useAuthDispatch();
  const history = useHistory();

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
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: "#f26522"
              }}
            >
              Pride Education
            </NavLink>
          </Typography>
          <NavLink
            to="/support"
            className="hideOnMobile"
            style={{
              textDecoration: "none",
              color: "#f26522",
              textTransform: "uppercase",
              marginRight: "15px"
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
              marginRight: "15px"
            }}
          >
            MarketPlace
          </NavLink>
          <NavLink
            to={"/resources"}
            className="hideOnMobile"
            style={{
              textDecoration: "none",
              color: "#f26522",
              textTransform: "uppercase",
              marginRight: "15px"
            }}
          >
            Resources
          </NavLink>
          {!isAuthenticated ? (
            <>
              <NavLink
                to="/login"
                className="hideOnMobile"
                style={{
                  textDecoration: "none",
                  color: "#f26522",
                  textTransform: "uppercase",
                  marginRight: "15px"
                }}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="hideOnMobile"
                style={{
                  textDecoration: "none",
                  color: "#f26522",
                  textTransform: "uppercase",
                  marginRight: "15px"
                }}
              >
                Register
              </NavLink>
            </>
          ) : (
            <div
              className="hideOnMobile"
              style={{
                textDecoration: "none",
                color: "#f26522",
                textTransform: "uppercase",
                marginRight: "15px",
                cursor: "pointer"
              }}
              onClick={() => {
                logout({ dispatch });
                history.push("/");
              }}
            >
              Logout
            </div>
          )}
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
