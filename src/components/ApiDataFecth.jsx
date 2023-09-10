import React, { useState } from 'react'

const ApiDataFecth = () => {
    let [dataFech , setDataFech] = useState([]);
    let fech = fetch('https://jsonplaceholder.typicode.com/photos')
    .then(function (res) {
        return res.json()
    }).then((data) => {
        console.log(data);
        setDataFech(data)
    }).catch((e) => {
        console.log(e);
    })
  return (
    <div>
      {
        dataFech.map((data) => {
            console.log(data);
            <div>
                <p>{data.title}</p>
                <img src="" alt="" />
            </div>
        })
      }
    </div>
  )
}

export default ApiDataFecth
