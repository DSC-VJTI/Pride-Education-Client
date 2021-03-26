
import React from "react";
import clsx from "clsx";
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
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/Inbox";
import MailIcon from "@material-ui/icons/Mail";
import Menu from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

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
  const classes = NavbarStyles();
  const [top, setTop] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setTop(open);
  };
  const list = () => (
    <div
      className={classes.list}
      role="Marketplace"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Classes", "Books", "Test Series"].map((text, index) => (
          <ListItem button key={text}>
            <a href="/classes" style={{ textDecoration: "none" }}>
              <ListItemText primary={text} />
            </a>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <AppBar position="static" style={{ background: "#3d3d3d" }}>
      <Toolbar>
        <IconButton color="inherit" edge="start" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h6">Pride Education</Typography>

        <Button color="inherit" className="hideOnMobile" href="/support">
          Support
        </Button>
        <Button color="inherit" className="hideOnMobile" href="/classes">
          MarketPlace
        </Button>
        <React.Fragment>
          <Button onClick={toggleDrawer(true)}>Marketplace</Button>
          <Drawer anchor="top" open={top} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </React.Fragment>
        <Button color="inherit" className="hideOnMobile" href="/login">
          Login
        </Button>
        <Button color="inherit" className="hideOnMobile" href="/login">
          Register
        </Button>
      </Toolbar>
    </AppBar>

  );
};

export default Navbar;
