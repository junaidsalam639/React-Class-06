import React from 'react'

const Card = (props) => {
    const {
        apiData
    } = props
    console.log(apiData);
  return (
    <div className='card' style={{display: 'flex' , flexDirection:'column'}}>
      {
        apiData.map((data) => {
            console.log(data.title);
           return <div key={data.id} width={400} className='App-logo'>
                <img src={data.image} alt="" width={300} height={300} />
                <h2 style={{fontWeight : 'bold'}}>{data.title}</h2>
                <p style={{fontWeight : '600'}}>{data.desc}</p>
            </div>
        })
      }
    </div>
  )
}

export default Card
