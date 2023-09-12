import React, { useState } from 'react'

const FormTodo = (props) => {
    const {
        updateTodo
    } = props
    let [inputValue , setInputValue] = useState('');

    const submit = (e) => {
        e.preventDefault()
        updateTodo(inputValue);
        setInputValue('')
    }
  return (
    <div className='App'>
      <h1>Todo_App</h1>
      <form action="submit" onSubmit={submit}>
        <input type="text" required value={inputValue} onChange={(e) => setInputValue(e.target.value)}
        style={{textTransform : 'capitalize'}} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default FormTodo

