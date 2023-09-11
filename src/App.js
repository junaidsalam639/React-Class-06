import './App.css';
import ApiDataFecth from './components/ApiDataFecth';
import FormTodo from './components/FormTodo';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import Practice from './components/Practice';

function App() {
  const [dataFech , setDataFech] = useState(ApiDataFecth);
  const [count , setCount] = useState(0)
  useEffect(()=> {
    console.log('WITH OUT DEPENDENCY');
  }); //JB BHI MERA DOM RUN HOGA TO YE CHALEGA

  useEffect(()=> {
    console.log('DEPENDENCY');
  },[]);// YE SRIF AIK BAR HI CHALEGA SHORO ME

  useEffect(()=> {
    console.log('DEPENDENCY COUNT');
  },[count])//YE JB COUNT UPDATE HOGA TO YE CHALAGE

  const [update , setUpdate] = useState([]);
  const todo = (e) => {
     setUpdate([...update , e])
  }
  return (
    <>
    
    <div className="App">
      <Practice />
       <h1>Count</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Count</button> <br /><br />
      <FormTodo
      updateTodo = {todo} />
      <TodoList
      todoList = {update}  />
      <Card apiData = {dataFech}/>
    </div>
      </>
  );
}

export default App;

