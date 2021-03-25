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
    width: "900px",
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    "& .MuiTab-root": {
      background: "#3d3d3d"
    },
    "& .MuiTypography-root": {
      textAlign: "center"
    }
    // '@media and all(min-width: 500px)': {
    //   width: '800px',
    // }
  },
  tabcolor: {
    // background: "#3d3d3d"
  },
  tabpanel: {
    background: "#DCDCDC",
    "& .MuiPaper-root": {
      padding: "20px 0px",
      height: "420px"
    }
  },
  pageContent: {
    background: "#f6f6f6",
    height: "100%"
  }
}));

export default function NavTabs(props) {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const tabNameToIndex = {
    0: "software",
    1: "product",
    2: "personal"
  };

  const indexToTabName = {
    software: 0,
    product: 1,
    personal: 2
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
        <Paper className={classes.pageContent} width="100%" elevation={4}>
          {/* Imported from PageOne */}
          <SoftwareProblems />
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabpanel}>
        <Paper className={classes.pageContent} width="100%" elevation={4}>
          {/* Imported from PageTwo */}
          <ProductEnquiry />
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabpanel}>
        <Paper className={classes.pageContent} width="100%" elevation={4}>
          {/* Imported from PageTwo */}
          <PersonalDiscussion />
        </Paper>
      </TabPanel>
    </Box>
  );
}
