// Este hook es para poder implementar de manera rápida los campos a ocupar en un formulario de manera dinamica.. 

import { useState } from "react"

export const useForm = (initialState = {}) => {
    
    const [values, setValues] = useState(initialState)

    const reset = () =>{
        setValues(initialState);
    }

    const handleInputChange = ( ({target})=>{
        
        setValues({
            ...values,
            [target.name]: target.value
        });
        
    });

    return [values,handleInputChange,reset]

}