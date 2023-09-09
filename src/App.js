import logo from './logo.svg';
import './App.css';
import FormTodo from './components/FormTodo';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';

function App() {
  const [count , setCount] = useState(0)
  useEffect(()=> {
    console.log('WITH OUT DEPENDENCY');
  });

  useEffect(()=> {
    console.log('DEPENDENCY');
  },[]);

  useEffect(()=> {
    console.log('DEPENDENCY COUNT');
  },[count])

  const [update , setUpdate] = useState([]);
  const todo = (e) => {
     console.log(e);
     setUpdate([...update , e])
  }
  return (
    <div className="App">
       <h1>Count</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <FormTodo
      PropTodo = {todo}/>
      <TodoList list = {update}/>
    </div>
  );
}

export default App;
