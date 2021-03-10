import { TextField } from '@material-ui/core'
import React from 'react';

export const Input = (props) => {

    const { label, name, value, error=null, onChange } = props
    return (
        <TextField 
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
        />
    )
}

export const MultiInput = (props) => {

    const { label, name, value, error=null, onChange } = props
    return (
        <TextField
            multiline
            rowsMax={5} 
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
        />
    )
}