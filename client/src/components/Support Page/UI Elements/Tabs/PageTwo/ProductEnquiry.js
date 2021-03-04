import React from 'react'
import { Grid } from '@material-ui/core'
import { UseForm, Form } from '../../UseForm'
import { Input, MultiInput } from '../../Input'
import Button from '../../Button'


const initialFValues = {
    mobile: '',
    whatsapp: '',
    email: '',
    query: ''
}



const ProductEnquiry = () => {
    const { 
        values, 
        setValues, 
        handleInputChange,
        error,
        setError } = UseForm(initialFValues);

    const validate = () => {
        let temp = {}
        temp.mobile = values.mobile.length>9?"":"Enter a valid number"
        temp.whatsapp = values.whatsapp.length>9?"":"Enter a valid number"
        temp.email = (/$|.*@.*..*/).test(values.email)?"":"Email is not valid"
        temp.query = values.query?"":"This field is required"
        setError({
            ...temp // What is this?
        })
        
        return Object.values(temp).every(x => x === "")
    }
    
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(validate())
            window.alert('testing...')
    }

    return (
            <Form onSubmit={handleSubmit}>
                <Grid container>
                <Grid item xs={12}>
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
                            type="submit" />
                    </Grid>
                </Grid>
            </Form>
    )
}

export default ProductEnquiry;