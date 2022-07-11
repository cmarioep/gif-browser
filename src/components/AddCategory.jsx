import React, { useState } from 'react';


export default function AddCategory() {
    
    const [inputValue, setinputValue] = useState("");

    const onInputChange = (event) => {
        setinputValue(event.target.value)
    }

    const onSumit = (event) => {
        event.preventDefault()
        console.log( inputValue );
        setinputValue("");

    }

    return (
        <form onSubmit={ onSumit }>
            <input 
                type="text" 
                placeholder='Buscar gif'
                value = { inputValue }
                onChange = { onInputChange }
            />
        </form>
    );
}
