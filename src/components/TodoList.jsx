import React from "react";

function TodoList (props){
   const {
    list
   } = props
   let prop = props.list;
  console.log(prop);
    return(
        <>
       <ul>
        {
            prop.map((element , index , array) => {
                console.log(element);
               return <li>{element}
               <button>Edit</button>
               <button>Delete</button>
               </li>
            })
        }
       </ul>
        </>
    )
}

export default TodoList