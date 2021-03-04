import React from 'react';
import { Grid } from '@material-ui/core';
import { UseForm, Form } from '../../../UI Elements/UseForm';
import Button from '../../../UI Elements/Button';
import { DatePicker, AppointedTime } from '../../../UI Elements/DatePicker';

const initialFValues = {
    pickedDate: new Date(),
    pickedTime: new Date()
}

const PersonalDiscussion = () => {

    const { 
        values, 
        setValues, 
        handleInputChange,
        } = UseForm(initialFValues);
    
    const handleSubmit = (e) => {
        e.preventDefault()
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