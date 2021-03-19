import React from "react";
import { Formik, useField, Form } from "formik";
import { useState } from "react";
import * as yup from "yup";
import {
  TextField,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  MenuItem,
  Select,
  InputLabel
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const MyTextField = ({
  placeholder,
  type = "text",
  fullWidth = true,
  multiline = false,
  ...props
}) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
      type={type}
      fullWidth={fullWidth}
      multiline={multiline}
    />
  );
};

export default function AddProduct() {
  const [productType, setProductType] = useState("course");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChange = (event) => {
    setProductType(event.target.value);
  };

  const getCurrentString = (currentState) => {
    switch (currentState) {
      case "course":
        return "COURSE DETAILS";
      case "test":
        return "TEST DETAILS";
      case "book":
        return "BOOK DETAILS";
      default:
        return "";
    }
  };

  const validationSchema = yup.object({
    name: yup.string().required(),
    type: yup.string().required(),
    price: yup.number().required().positive(),
    discount: yup.number().required().positive(),
    courseDetails: yup.object({
      level: yup.string().required(),
      subject: yup.string().required(),
      faculty: yup.string().required(),
      subtype: yup.string().required(),
      language: yup.string().required(),
      duration: yup.number().required().positive(),
      validity: yup.number().required().positive(),
      mode: yup.string().required()
    })
  });

  return (
    <Container>
      <header>
        <div
          className="heading"
          style={{ textAlign: "center", padding: "15px" }}
        >
          <Typography variant="h4" style={{ color: "black" }}>
            <u>ADD NEW PRODUCT</u>
          </Typography>
        </div>
      </header>
      <Formik
        validateOnChange={true}
        initialValues={{
          name: "",
          price: 0,
          discount: 0,
          course: {
            level: "",
            subject: "",
            faculty: "",
            type: "",
            language: "",
            sysReq: "",
            duration: 3500,
            validity: 3600,
            mode: ""
          },
          test: {
            subject: "",
            contents: ""
          },
          book: {
            url: ""
          }
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          // make async call
          console.log("submit: ", data);
          setSubmitting(false);
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <Container maxWidth="sm">
              <Paper style={{ padding: 16 }} elevation={2}>
                <Grid container alignItems="flex-start" spacing={4}>
                  <Grid item xs={12}>
                    <MyTextField placeholder="Name of Product" name="name" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MyTextField
                      placeholder="Price of Product"
                      name="price"
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MyTextField
                      placeholder="Discount"
                      name="discount"
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel id="product-select-label">
                      Type of Product
                    </InputLabel>
                    <Select
                      value={productType}
                      defaultValue="course"
                      onChange={handleChange}
                      labelId="product-select-label"
                    >
                      <MenuItem value="course">Course</MenuItem>
                      <MenuItem value="test">Test</MenuItem>
                      <MenuItem value="book">Book</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="h5"
                      style={{ color: "green", textAlign: "center" }}
                    >
                      <u>{getCurrentString(productType)}</u>
                    </Typography>
                  </Grid>
                  {productType === "course" && (
                    <>
                      <Grid item xs={12}>
                        <MyTextField placeholder="Level" name="course.level" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <MyTextField
                          placeholder="Subject"
                          name="course.subject"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <MyTextField
                          placeholder="Faculty"
                          name="course.faculty"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <MyTextField
                          placeholder="Type of Course"
                          name="course.type"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <MyTextField
                          placeholder="Language"
                          name="course.language"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <MyTextField
                          placeholder="System Requirements"
                          name="course.sysReq"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <MyTextField placeholder="Mode" name="course.mode" />
                      </Grid>
                      <Grid item xs={12}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog"
                            format="dd/MM/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                              "aria-label": "change date"
                            }}
                          />
                        </MuiPickersUtilsProvider>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <MyTextField
                          placeholder="Duration"
                          name="course.duration"
                          type="number"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <MyTextField
                          placeholder="Validity"
                          name="course.validity"
                          type="number"
                        />
                      </Grid>
                    </>
                  )}
                  {productType === "test" && (
                    <>
                      <Grid item xs={12}>
                        <MyTextField
                          placeholder="Subject"
                          name="test.subject"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <MyTextField
                          placeholder="Contents"
                          name="test.contents"
                          multiline={true}
                        />
                      </Grid>
                    </>
                  )}
                  {productType === "book" && (
                    <>
                      <Grid item xs={12}>
                        <MyTextField placeholder="Book URL" name="book.url" />
                      </Grid>
                    </>
                  )}

                  <Grid item xs={12}>
                    <Button
                      color="secondary"
                      variant="contained"
                      disabled={isSubmitting}
                      type="submit"
                    >
                      submit
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Container>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
