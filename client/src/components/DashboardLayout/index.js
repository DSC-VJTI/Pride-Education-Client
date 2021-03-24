import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import NavBar from "./NavBar";
import AdminDashboard from "./DashboardView";
import Customer from "./CustomerListView";
import Products from "./ProductListView";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%"
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 64,
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 256
    }
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden"
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto"
  }
}));

const DashboardLayout = () => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [contents, setContents] = useState(0);

  return (
    <div className={classes.root}>
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
        setContents={setContents}
      />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            {contents === 0 && <AdminDashboard />}
            {contents === 1 && <Customer />}
            {contents === 2 && <Products />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
