import Paper from "@material-ui/core/Paper";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SoftwareProblems from "./PageOne/SoftwareProblems";
import ProductEnquiry from "./PageTwo/ProductEnquiry";
import PersonalDiscussion from "./PageThree/PersonalDiscussion";

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
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
  };
}

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    border: "5px solid #ffcc5c"
  },
  tabcolor: {
    background: "#ff6f69"
  },
  tabpanel: {
    background: "#ffeead"
  },
  pageContent: {
    background: "#ffeead",
    border: "1px solid #ffcc5c"
  }
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Software Problems" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Product Enquiry" href="/trash" {...a11yProps(1)} />
          <LinkTab label="Personal Discussion" href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.tabpanel}>
        <Paper className={classes.pageContent} width="100%">
          {/* Imported from PageOne */}
          <SoftwareProblems />
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabpanel}>
        <Paper className={classes.pageContent} width="100%">
          {/* Imported from PageTwo */}
          <ProductEnquiry />
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabpanel}>
        <Paper className={classes.pageContent} width="100%">
          {/* Imported from PageTwo */}
          <PersonalDiscussion />
        </Paper>
      </TabPanel>
    </div>
  );
}
