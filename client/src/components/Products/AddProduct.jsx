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
  Typography
} from "@material-ui/core";

const MyTextField = ({
  placeholder,
  type = "text",
  fullWidth = true,
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
    />
  );
};

export default function AddProduct() {
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
          type: "",
          price: null,
          discount: null,
          courseDetails: {
            level: "",
            subject: "",
            faculty: "",
            subtype: "",
            language: "",
            duration: null,
            validity: null,
            mode: ""
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
                    <MyTextField placeholder="Type of Product" name="type" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MyTextField
                      placeholder="Subtype"
                      name="courseDetails.subtype"
                    />
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
                    <Typography
                      variant="h5"
                      style={{ color: "green", textAlign: "center" }}
                    >
                      <u>COURSE DETAILS</u>
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <MyTextField
                      placeholder="Level"
                      name="courseDetails.level"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MyTextField
                      placeholder="Subject"
                      name="courseDetails.subject"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MyTextField
                      placeholder="Faculty"
                      name="courseDetails.faculty"
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <MyTextField
                      placeholder="Language"
                      name="courseDetails.language"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MyTextField placeholder="Mode" name="courseDetails.mode" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MyTextField
                      placeholder="Duration"
                      name="courseDetails.duration"
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MyTextField
                      placeholder="Validity"
                      name="courseDetails.validity"
                      type="number"
                    />
                  </Grid>

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
