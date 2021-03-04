import 'date-fns';
import React from 'react'
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

export const DatePicker = (props) => {

    const { name, label, value, onChange } = props
    

    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker 
                disableToolbar 
                variant="inline" 
                inputVariant="outlined"
                id="date-picker-dialog"
                label={label}
                format="MM/dd/yyyy"
                name={name}
                value={value}
                onChange={date => onChange(convertToDefEventPara(name, date))}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    )
}

export const AppointedTime = (props) => {

    const { name, label, value, onChange } = props
    console.log(value)
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const convertToDefEventPara = (name, value) => ({
        
        target: {
            name, value
        }
    })
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker
                margin="normal"
                inputVariant="outlined"
                id="time-picker"
                label={label}
                value={value}
                onChange={date => onChange(convertToDefEventPara(name, date))}
                KeyboardButtonProps={{
                    'aria-label': 'change time',
                }}
        />
        </MuiPickersUtilsProvider>
    )
}
