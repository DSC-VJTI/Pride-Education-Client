import React from "react";
import { Typography } from "@material-ui/core";
const DateField = (props) => {
  if (props.date !== undefined) {
    return (
      <Typography
        style={{
          fontWeight: "bold",
          fontSize: "20px"
        }}
        variant="body"
      >
        {`Bought on : ${new Date(props.date).getDate()}/${new Date(
          props.date
        ).getMonth()}/${new Date(props.date).getFullYear()}`}
      </Typography>
    );
  } else {
    return null;
  }
};
export default DateField;
