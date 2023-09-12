import React , {useState} from 'react'

const Es6_Practice = () => {
    const [num , setNum] = useState(0);
    const [num1 , setNum1] = useState(0);
  // Es6 Promises
  function num_submit () {
    let promise = new Promise ((resolve , reject) => {
      if(num < num1){
        let fech = fetch('https://dummyjson.com/products')
        .then((data) => {
            return data.json()
        })
        .then((res) => {
            console.log(res);
            resolve(res)
        })
      }else{
        reject('reject')
      }
    })
    promise.then((right) => {
      console.log('Promise' , right.products);
      right.products.map((data) => {
        console.log(data);
      })
      alert('Promise resolve')
    }).catch((e) => {
        console.log('Promise' , e);
        alert('Promise ' + e)
  })
}

//Es6 CallBack
function abc (e , call) {
  console.log(e)
  call(20)
}
abc(10 , function(data){
  console.log('I am callback function' , data);
})

//Es6 Promises Async/Await
let promise1 = new Promise((resolve , reject) =>{
  setTimeout(() => {
    resolve('Promise resolved')
  }, 4000);
})

async function ayncFun () {
  let prom = await promise1;
  console.log(prom);
  console.log('Hello!');
}
ayncFun()

  return (
    <div>
       <input type="number" value={num} onChange={(e) => setNum(e.target.value)}  /> <br /><br />
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)}  /> <br /><br />
      <button onClick={num_submit}>submit</button>
    </div>
  )
}

export default Es6_Practice
