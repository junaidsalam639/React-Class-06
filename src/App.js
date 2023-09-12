import './App.css';
import ApiDataFecth from './components/ApiDataFecth';
import FormTodo from './components/FormTodo';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import Practice from './components/Practice';

function App() {
  const [dataFech , setDataFech] = useState(ApiDataFecth);
  const [count , setCount] = useState(0);
  const [num , setNum] = useState(0);
  const [num1 , setNum1] = useState(0);
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

  function num_submit () {
    let promise = new Promise ((resolve , reject) => {
      if(num < num1){
        resolve('resolve')
      }else{
        reject('reject')
      }
    })
    promise.then((right) => {
      console.log(right);
    }).catch((e) => {
      console.log(e);
  })
}

function abc (e , call) {
  console.log(e)
  call(20)
}

function gef(e){
  console.log('I am callback function' , e);
}

abc(10 , gef)


  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png
  return (
    <>
    
    <div className="App">
      <input type="number" value={num} onChange={(e) => setNum(e.target.value)}  />
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)}  />
      <button onClick={num_submit}>submit</button>
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

