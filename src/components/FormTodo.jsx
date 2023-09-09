import React, { useState } from "react";

function FormTodo (props){
    const {
        PropTodo
    } = props
    const [inputValue , setInputValue] = useState('');
    const submit = (e) => {
        e.preventDefault()
        console.log('submit' , inputValue);
        PropTodo(inputValue)
    }

    return(
        <>
        <form action="submit" onSubmit={submit}>
        <input type="text" value={inputValue} required onChange={(e) => setInputValue(e.target.value)} />
        <input type="submit" />
        </form>
        </>
    )
}

export default FormTodo
