import { Button } from 'bootstrap';
import React from 'react'

const TodoList = (props) => {
    const {
        todoList
    } = props
    console.log(todoList);

    const edit = (e) => {
        console.log(e);
    }
    const dele = (e) => {
        console.log(e);
    }

  return (
    <div>
      <ul>
          {
            todoList.map((element , index , array) => {
                console.log(element);
                return <li key={index} style={{textTransform : 'capitalize'}}>{element}
                <button onClick={() => edit(index)}>Edit</button>    
                <button onClick={() => dele(index)}>Delete</button>    
                </li>
            })
          }
      </ul>
    </div>
  )
}

export default TodoList
