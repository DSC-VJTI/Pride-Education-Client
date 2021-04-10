import React, { useEffect, useState } from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select
} from "@material-ui/core";
import Details from "./Details";

import ProductImages from "./ProductImages";
import axios from "axios";
import { BASE_URL } from "../../constants";
const ProductDetailsStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "auto"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));
const ProductDetails = ({ match }) => {
  const classes = ProductDetailsStyles();
  const [product, setProduct] = useState([]);

  const [CourseType, setCourseType] = useState("FULL COURSE");
  const [Language, setLanguage] = useState("ENGLISH");
  const [Validity, setValidity] = useState("7");
  const [Mode, setMode] = useState("PEN DRIVE");

  useEffect(() => {
    getProducts();
  }, [Language, Mode, CourseType, Validity]);

  const getProducts = async () => {
    const innerProduct = await axios.post(`${BASE_URL}/product/filter`, {
      subject: match.params.name,

      mode: Mode,
      language: Language,
      type: CourseType,
      validity: Validity
    });

    console.log(innerProduct.data.course);
    setProduct(innerProduct.data.course);
  };
  const handleCourseTypeChange = (event) => {
    setCourseType(event.target.value);
  };
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    console.log(Language);
  };
  const handleValidityChange = (event) => {
    setValidity(event.target.value);
  };
  const handleModeChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <div className={classes.root} style={{ margin: "2rem" }}>
      <Grid container spacing={3}>
        <Grid container item xs={6}>
          <Grid item xs={12} style={{ margin: "0rem 1.5rem" }}>
            <ProductImages />
          </Grid>
          <Grid item xs={12} style={{ margin: "0rem 1.5rem" }}>
            <Grid container item xs={12}>
              <Grid item xs={6}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Mode</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Mode}
                    onChange={handleModeChange}
                  >
                    <MenuItem value={"PEN DRIVE"}>Pendrive</MenuItem>
                    <MenuItem value={"GOOGLE DRIVE"}>Google Drive</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">
                    CourseType
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={CourseType}
                    onChange={handleCourseTypeChange}
                  >
                    <MenuItem value={"FULL COURSE"}>Full Course</MenuItem>
                    <MenuItem value={"FAST TRACK COURSE"}>
                      Fast Track Course
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">
                    Language
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Language}
                    onChange={handleLanguageChange}
                  >
                    <MenuItem value={"ENGLISH"}>ENGLISH </MenuItem>
                    <MenuItem value={"HINDI "}>HINDI</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">
                    Validity
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Validity}
                    onChange={handleValidityChange}
                  >
                    <MenuItem value={"7"}>7 Months</MenuItem>
                    <MenuItem value={"12"}>12 Months</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          {"course" in product && <Details product={product} />}
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetails;
