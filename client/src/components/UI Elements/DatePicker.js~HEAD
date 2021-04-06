import "date-fns";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import "./DatePicker.css";

export const DatePicker = (props) => {
  const { name, label, value, onChange } = props;

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value
    }
  });

  return (
    <div className="date">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          id="date-picker-dialog"
          label={label}
          format="MM/dd/yyyy"
          name={name}
          value={value}
          onChange={(date) => onChange(convertToDefEventPara(name, date))}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export const AppointedTime = (props) => {
  const { name, label, value, onChange } = props;

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value
    }
  });
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        margin="normal"
        id="time-picker"
        label={label}
        value={value}
        onChange={(date) => onChange(convertToDefEventPara(name, date))}
        KeyboardButtonProps={{
          "aria-label": "change time"
        }}
      />
    </MuiPickersUtilsProvider>
  );
};
