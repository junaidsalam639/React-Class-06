import React , {useState} from 'react'
import { db , collection , addDoc } from './Config/Firebase';

const Practice = () => {
    const [change , setChange] = useState('');
    const [toogle , setToogle] = useState(true);
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [select , setSelect] = useState('');
    const [check , setCheck] = useState(false);

    const color = () => {
      document.querySelector('.heading').classList.toggle('head')
    }
    
    const submit = async(e) => {
         e.preventDefault();
         console.log(email , password , select , check);
        
             try {
                 const docRef = await addDoc(collection(db, "Practice_user_Data"), {
                     email : email,
                     password : password,
                     select : select,
                     check , check
                    });
                    console.log("Document written with ID: ", docRef.id);
                } catch (e) {
                    console.error("Error adding document: ", e);
                }  
            }
            
            return (
                <div className='App'>
      <h1>{change}</h1>
      <input type="text" onChange={(e) => setChange(e.target.value) } placeholder='Type Your Text' />
      <form onSubmit={submit}>
        <h1>Form</h1>
         <input type="email" required onChange={(e) => setEmail(e.target.value)} placeholder='email' /><br /><br />
         <input type="password" required onChange={(e) => setPassword(e.target.value)} placeholder='password' /><br /><br />
         <select name="select" required id="select" onChange={(e) => setSelect(e.target.value)}>
            <option>Gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
         </select><br /><br />
         <input type="checkbox" required onChange={(e) => setCheck(e.target.checked)} /><span>Accept All Terms</span><br /><br />
         <input type="submit" />
      </form>

      {/* Ternary Operator in es6 */}
        {
          toogle ? <h1 className="heading">hello</h1> : null
        }
        {/* Phela Tarika Toogle krne la */}
        {/* <button onClick={() => setToogle(true)}> show</button>
        <button onClick={() => setToogle(false)}>Hide</button> */}
        {/* Dosra Tarika Toogle krne ka */}
        <button onClick={() => setToogle(!toogle)}>Toogle</button>
        <button onClick={color}>Color</button>

    </div>
  )
}

export default Practice





