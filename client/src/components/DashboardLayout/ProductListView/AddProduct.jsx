import DateFnsUtils from "@date-io/date-fns";
import {
  Button,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import axios from "axios";
import { Form, Formik, useField } from "formik";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../constants";
import { useAuthState } from "../../../context/context";
import Loading from "../../UI Elements/Loading";

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
  const { token } = useAuthState();

  const [productType, setProductType] = useState("course");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [product, setProduct] = useState({
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
  });
  const [imageUrl, setImageUrl] = useState();
  const [file, setFile] = useState();
  const productId = useParams().productId;
  const isEditPage = !!productId;

  const [isLoading, setIsLoading] = useState(isEditPage);

  const checkType = (response) => {
    if ("test" in response) return "test";
    else if ("course" in response) return "course";
    else if ("book" in response) return "book";
  };

  useEffect(() => {
    if (isEditPage) {
      axios
        .get(BASE_URL + `/products/${productId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((res) => {
          console.log(res.data);
          setProduct(res.data.data);
          setProductType(checkType(res.data.data));
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  }, [isEditPage]);

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

  // Validator schema for Formik
  const validationSchema = yup.object({
    name: yup.string().required(),
    price: yup.number().required().positive(),
    discount: yup.number().optional().moreThan(-1), // Discount can be zero
    course: yup
      .object({
        level: yup.string().optional(),
        subject: yup.string().optional(),
        faculty: yup.string().optional(),
        subtype: yup.string().optional(),
        language: yup.string().optional(),
        duration: yup.number().optional().positive(),
        validity: yup.number().optional().positive(),
        mode: yup.string().optional()
      })
      .optional(),
    test: yup
      .object({
        subject: yup.string().optional(),
        contents: yup.string().optional()
      })
      .optional(),
    book: yup
      .object({
        url: yup.string().optional()
      })
      .optional()
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
      {isLoading ? (
        <Loading />
      ) : (
        <Formik
          validateOnChange={true}
          initialValues={product}
          validationSchema={validationSchema}
          onSubmit={async (data, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            // Preprocess Data
            let formData = new FormData();
            let reqBody = { ...data };
            formData.append("name", reqBody["name"]);
            formData.append("price", reqBody["price"]);
            formData.append("discount", reqBody["discount"] || 0);
            formData.append("files", imageUrl);
            switch (productType) {
              case "course":
                reqBody["course"]["applicableDate"] = selectedDate;
                formData.append("course", JSON.stringify(reqBody["course"]));
                break;
              case "test":
                formData.append("test", JSON.stringify(reqBody["test"]));
                break;
              case "book":
                formData.append("files", file);
                break;
            }
            formData.append("type", productType);
            // Finish preprocessing
            let response;
            if (isEditPage) {
              response = await axios.put(
                BASE_URL + "/admin/editProduct/" + productId,
                {
                  ...reqBody
                },
                {
                  headers: {
                    Authorization: `Bearer ${token}`
                  }
                }
              );
            } else {
              response = await axios.post(
                BASE_URL + "/admin/createProduct/",
                formData,
                {
                  headers: {
                    Authorization: `Bearer ${token}`
                  }
                }
              );
            }
            console.log("submit: Done ", response.data);
            setSubmitting(false);
            resetForm();
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
                        disabled={isEditPage}
                      >
                        <MenuItem value="course">Course</MenuItem>
                        <MenuItem value="test">Test</MenuItem>
                        <MenuItem value="book">Book</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={12}>
                      <input
                        type="file"
                        name="imageUrl"
                        id="imageUrl"
                        onChange={(e) => setImageUrl(e.target.files[0])}
                      />
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
                          <MyTextField
                            placeholder="Level"
                            name="course.level"
                          />
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
                    {productType === "book" &&
                      (isEditPage ? (
                        <>
                          <Typography variant="body1">
                            Books cannot be edited!
                          </Typography>
                        </>
                      ) : (
                        <>
                          <Grid item xs={12}>
                            {/* <MyTextField placeholder="Book URL" name="book.url" /> */}
                            <input
                              type="file"
                              name="Book"
                              id="book"
                              onChange={(e) => setFile(e.target.files[0])}
                            />
                          </Grid>
                        </>
                      ))}

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
            </Form>
          )}
        </Formik>
      )}
    </Container>
  );
}
