import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useForm, Form } from "../../../UI Elements/UseForm";
import { Input, MultiInput } from "../../../UI Elements/Input";
import Button from "../../../UI Elements/Button";

const initialFValues = {
  mobile: "",
  whatsapp: "",
  email: "",
  query: ""
};

const ProductEnquiry = () => {
  const { values, setValues, handleInputChange, error, setError } = useForm(
    initialFValues
  );

  const validate = () => {
    let temp = {};
    temp.mobile = values.mobile.length > 9 ? "" : "Enter a valid number";
    temp.whatsapp = values.whatsapp.length > 9 ? "" : "Enter a valid number";
    temp.email = /$|.*@.*..*/.test(values.email) ? "" : "Email is not valid";
    temp.query = values.query ? "" : "This field is required";
    setError({
      ...temp
    });

    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="body">
            If you've any doubts regarding the product and it's plan, you can
            contact us here.
          </Typography>
          <Input
            label="Mobile No."
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={error.mobile}
          />
          <Input
            label="WhatsApp No."
            name="whatsapp"
            value={values.whatsapp}
            onChange={handleInputChange}
            error={error.whatsapp}
          />
          <Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={error.email}
          />
          <MultiInput
            label="Leave your message"
            name="query"
            value={values.query}
            onChange={handleInputChange}
            error={error.query}
          />

          <Button
            variant="contained"
            color="primary"
            size="large"
            text="submit"
            type="submit"
            style={{ borderRadius: "99999px" }}
          />
        </Grid>
      </Grid>
    </Form>
  );
};

export default ProductEnquiry;
