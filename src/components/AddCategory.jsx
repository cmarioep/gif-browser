import React, { useState } from 'react';


export default function AddCategory( { onNewCategory } ) {
    
    const [inputValue, setInputValue] = useState("");

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSumit = (event) => {
        event.preventDefault();

        const cleanInput = inputValue.trim();

        if ( cleanInput <= 1 ) return;
            
        onNewCategory( cleanInput );

        setInputValue("");

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
