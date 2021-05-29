import React, { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from "@material-ui/core";
import {
  BarChart as BarChartIcon,
  ShoppingBag as ShoppingBagIcon,
  Users as UsersIcon,
  HelpCircle as HelpCircleIcon,
  User,
  Database
} from "react-feather";
import NavItem from "./NavItem";
import { useAuthState } from "../../../context/context";

const items = [
  {
    icon: BarChartIcon,
    title: "Dashboard"
  },
  {
    icon: UsersIcon,
    title: "Customers"
  },
  {
    icon: ShoppingBagIcon,
    title: "Products"
  },
  {
    icon: Database,
    title: "Orders"
  }
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
    backgroundColor: "#f1f1f1"
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: "calc(100% - 64px)",
    backgroundColor: "#f1f1f1"
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
    backgroundColor: "rgb(242, 101, 34)"
  }
}));

const NavBar = ({ onMobileClose, openMobile, setContents }) => {
  const classes = useStyles();
  const { user } = useAuthState();

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar className={classes.avatar} src={User} />
        <Typography className={classes.name} color="textPrimary" variant="h5">
          {user.name}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item, idx) => (
            <NavItem
              key={item.title}
              title={item.title}
              icon={item.icon}
              index={idx}
              setContents={setContents}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
  setContents: PropTypes.func
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
