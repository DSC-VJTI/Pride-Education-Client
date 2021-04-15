import Paper from "@material-ui/core/Paper";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SoftwareProblems from "./PageOne/SoftwareProblems";
import PersonalDiscussion from "./PageTwo/PersonalDiscussion";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    "& .MuiTab-root": {
      background: "#f1f1f1"
    },
    "& .MuiTypography-root": {
      textAlign: "left"
    }
  },
  tabpanel: {
    background: "#f1f1f1",
    "& .MuiBox-root": {
      background: "#f1f1f1"
    },
    "& html": {
      "& body": {
        height: "100%",
        padding: "0px"
      }
    },
    height: "100vh",
    marginLeft: "auto",
    marginRight: "auto"
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs(props) {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const tabNameToIndex = {
    0: "software",
    1: "personal"
  };

  const indexToTabName = {
    software: 0,
    personal: 1
  };

  const classes = useStyles();
  const [value, setValue] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/support/${tabNameToIndex[newValue]}`);
    setValue(newValue);
  };

  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          style={{ background: "#f1f1f1", color: "#f25622" }}
        >
          <LinkTab label="Software Problems" />
          <LinkTab label="Personal Discussion" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.tabpanel}>
        <SoftwareProblems />
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabpanel}>
        <PersonalDiscussion />
      </TabPanel>
    </Box>
  );
}
