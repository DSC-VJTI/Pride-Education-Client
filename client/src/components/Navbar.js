import React, { useState, useEffect, useContext } from "react";
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
import { ContactSupport, Menu } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import ShopIcon from "@material-ui/icons/Shop";
import { useAuthDispatch, useAuthState } from "../context/context";
import { logout } from "../actions/authActions";
import "./LandingPage/LandingPage.css";
import { Book, LogOut, User } from "react-feather";
import { BASE_URL } from "../constants";
import axios from "axios";
import SnackBar from "./UI Elements/Snackbar";
import { SnackbarContext } from "../context/snackbarContext";

const NavbarStyles = makeStyles({
  list: {
    width: "250px",
    "& .MuiPaper-root": {
      justifyContent: "center",
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
  const isProd = process.env.NODE_ENV === "production";
  const [drawer, setDrawer] = useState(false);
  const handleDrawer = () => {
    setDrawer(true);
  };
  const {
    token,
    isAuthenticated,
    user: { isAdmin }
  } = useAuthState();
  const dispatch = useAuthDispatch();
  const history = useHistory();

  useEffect(() => {
    verifyToken();
  }, []);

  const verifyToken = async () => {
    if (token) {
      return axios
        .get(`${BASE_URL}/verifyToken`, {
          params: { verifyTokenOnly: true },
          headers: { Authorization: `Bearer ${token}` }
        })
        .catch((err) => {
          if (err.response.status === 403) {
            logout({ dispatch });
          }
        });
    }
  };

  const [
    open,
    setOpen,
    handleClose,
    severity,
    setSeverity,
    message,
    setMessage
  ] = useContext(SnackbarContext);

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
              Pride Commerce Academy
            </NavLink>
          </Typography>

          <NavLink
            to={isProd ? "/coming" : "/classes"}
            className="hideOnMobile"
            style={{
              textDecoration: "none",
              color: "#f26522",
              textTransform: "uppercase",
              marginRight: "15px",
              fontWeight: "bold"
            }}
          >
            Buy Books/Pendrive
          </NavLink>
          <NavLink
            to={"/resources"}
            className="hideOnMobile"
            style={{
              textDecoration: "none",
              color: "#f26522",
              textTransform: "uppercase",
              marginRight: "15px",
              fontWeight: "bold"
            }}
          >
            Free Resources
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
                  marginRight: "15px",
                  fontWeight: "bold"
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
                  marginRight: "15px",
                  fontWeight: "bold"
                }}
              >
                Register
              </NavLink>
            </>
          ) : (
            <>
              {isAdmin && (
                <NavLink
                  to="/admin"
                  className="hideOnMobile"
                  style={{
                    textDecoration: "none",
                    color: "#f26522",
                    textTransform: "uppercase",
                    marginRight: "15px",
                    fontWeight: "bold"
                  }}
                >
                  Admin
                </NavLink>
              )}
              <NavLink
                to="/orders"
                className="hideOnMobile"
                style={{
                  textDecoration: "none",
                  color: "#f26522",
                  textTransform: "uppercase",
                  marginRight: "15px",
                  fontWeight: "bold"
                }}
              >
                My Orders
              </NavLink>
              <div
                className="hideOnMobile"
                style={{
                  textDecoration: "none",
                  color: "#f26522",
                  textTransform: "uppercase",
                  marginRight: "15px",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
                onClick={() => {
                  logout({ dispatch });
                  setSeverity("success");
                  setMessage("You have successfully logged out of the website");
                  setOpen(true);
                  history.push("/");
                }}
              >
                Logout
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawer} onClose={() => setDrawer(false)}>
        <div
          style={{
            height: "100%",
            width: "250px",
            backgroundColor: "#f1f1f1"
          }}
        >
          <List>
            <Typography
              variant="h6"
              style={{
                flexGrow: 1,
                textAlign: "center",
                marginBottom: "80px"
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
            <Divider />
            <NavLink to="/" className="fixLinks">
              <ListItem button onClick={() => setDrawer(false)}>
                <ListItemIcon>
                  <HomeIcon htmlColor="rgb(242, 101, 34)" />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
              <Divider />
            </NavLink>
            <NavLink to="/support" className="fixLinks">
              <ListItem button onClick={() => setDrawer(false)}>
                <ListItemIcon>
                  <ContactSupport htmlColor="rgb(242, 101, 34)" />
                </ListItemIcon>
                <ListItemText primary={"Support"} />
              </ListItem>
              <Divider />
            </NavLink>
            <NavLink to="/classes" className="fixLinks">
              <ListItem button onClick={() => setDrawer(false)}>
                <ListItemIcon>
                  <ShopIcon htmlColor="rgb(242, 101, 34)" />
                </ListItemIcon>
                <ListItemText primary={"Buy Books/Pendrive"} />
              </ListItem>
            </NavLink>
            <NavLink to={"/resources"} className="fixLinks">
              <ListItem button onClick={() => setDrawer(false)}>
                <ListItemIcon>
                  <Book color="rgb(242, 101, 34)" />
                </ListItemIcon>
                <ListItemText primary={"Free Resources"} />
              </ListItem>
            </NavLink>
            {!isAuthenticated ? (
              <>
                <NavLink to="/login" className="fixLinks">
                  <ListItem button onClick={() => setDrawer(false)}>
                    <ListItemIcon>
                      <User color="rgb(242, 101, 34)" />
                    </ListItemIcon>
                    <ListItemText primary={"Login"} />
                  </ListItem>
                </NavLink>
                <NavLink to="/register" className="fixLinks">
                  <ListItem button onClick={() => setDrawer(false)}>
                    <ListItemIcon>
                      <User color="rgb(242, 101, 34)" />
                    </ListItemIcon>
                    <ListItemText primary={"Register"} />
                  </ListItem>
                </NavLink>
              </>
            ) : (
              <>
                {isAdmin && (
                  <NavLink to="/admin" className="fixLinks">
                    <ListItem button onClick={() => setDrawer(false)}>
                      <ListItemIcon>
                        <User color="rgb(242, 101, 34)" />
                      </ListItemIcon>
                      <ListItemText primary={"Admin"} />
                    </ListItem>
                  </NavLink>
                )}
                <div
                  className="fixLinks"
                  onClick={() => {
                    logout({ dispatch });
                    setSeverity("success");
                    setMessage(
                      "You have successfully logged out of the website"
                    );
                    setOpen(true);
                    history.push("/");
                  }}
                >
                  <ListItem button onClick={() => setDrawer(false)}>
                    <ListItemIcon>
                      <LogOut color="rgb(242, 101, 34)" />
                    </ListItemIcon>
                    <ListItemText primary={"Logout"} />
                  </ListItem>
                </div>
              </>
            )}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
