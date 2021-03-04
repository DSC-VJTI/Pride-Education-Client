import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => (
    {
        root: {
            // Specifically targets the MuiFormControl-root class
            // Inspect the form and notice the name of the textfield from the element tag
            '& .MuiFormControl-root': {
                backgroundColor: '#ffeead',
                width: '80%',
                margin: theme.spacing(1) 
            },
            
        }
    }
))

export const UseForm = (initialFValues) => {
    const [ values, setValues ] = useState(initialFValues);
    const [ error, setError ] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        }) 
    }

    return {
        values,
        setValues,
        handleInputChange,
        error,
        setError
    }
}




export function Form(props) {
    const classes = useStyles();
    const { children, ...other } = props;
    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {props.children }
        </form>
    )
}
