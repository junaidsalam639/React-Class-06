import './App.css';
import ApiDataFecth from './components/ApiDataFecth';
import FormTodo from './components/FormTodo';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import Practice from './components/Practice';
import Es6_Practice from './components/Es6_Practice/Es6_Practice';
import Hooks_Practice from './components/Es6_Practice/Hooks_Practice';
import {useNavigate} from 'react-router-dom';

function App() {
  const [dataFech , setDataFech] = useState(ApiDataFecth);
  const [count , setCount] = useState(0);
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

  // Hooks Practice Prop me Hooks or Function Pass kre
  let [hookPractice , setHooksPractice] = useState('');
  console.log(hookPractice);
  function hooksPractice (e){
    console.log(e);
    setHooksPractice(e);
  }

  const navigate = useNavigate()
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png
  return (
    <>
    <div className="App">
    <button onClick={() => navigate('/Es6_Practice')}>Api_Data_Fecth</button> <hr />
      <button onClick={() => navigate('/practice')}>Form_Data</button> <hr />
      <h1>Function {hookPractice} </h1>
      <h1>Hooks {hookPractice}</h1>
      <Hooks_Practice 
      propFunction = {hooksPractice} propHooks = {setHooksPractice}  />  <hr />

      <FormTodo
      updateTodo = {todo} />
      <TodoList
      todoList = {update}  /> <hr />
      <Card apiData = {dataFech}/>
    </div>
      </>
  );
}

export default App;

