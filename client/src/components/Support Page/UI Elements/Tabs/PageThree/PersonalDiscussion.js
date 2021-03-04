import React from 'react';
import { Grid } from '@material-ui/core';
import { UseForm, Form } from '../../UseForm';
import Button from '../../Button'
import { DatePicker, AppointedTime } from '../../DatePicker';

const getTime = () => {
    var today = new Date();
    var AmOrPm = 'AM'
    var hours = today.getHours()
    if(hours >= 12){
        AmOrPm = 'PM'
    }
    console.log(hours + ":" + today.getMinutes() + " " + AmOrPm)
    return hours + ":" + today.getMinutes() + " " + AmOrPm;
}
    

const initialFValues = {
    pickedDate: new Date(),
    pickedTime: new Date()
}



const PersonalDiscussion = () => {
    const validate = () => {
        let temp = {}
        temp.mobile = values.mobile.length>9?"":"Enter a valid number"
        temp.whatsapp = values.whatsapp?"":"This field is required"
        temp.email = (/$|.*@.*..*/).test(values.email)?"":"Email is not valid"
        temp.query = values.query?"":"This field is required"
        setError=({
            ...temp // What is this?
        })
        
        return Object.values(temp).every(x => x === "")
    }

    const { 
        values, 
        setValues, 
        handleInputChange,
        error,
        setError } = UseForm(initialFValues);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(validate())
            window.alert('testing...')
    }

    return (
            <Form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={12}>
                        <DatePicker
                            name="pickedDate"
                            label="Appointment Date"
                            value={values.pickedDate}
                            onChange={handleInputChange}
                            
                        />
                        <AppointedTime
                            name="pickedTime"
                            label="Appointment Time"
                            value={values.pickedTime}
                            onChange={handleInputChange}
                            
                        />
                        <Button 
                            variant="contained"
                            color="primary"
                            size="large"
                            text="submit" />
                    </Grid>
                </Grid>
            </Form>
    )
}

export default PersonalDiscussion;