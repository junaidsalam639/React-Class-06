import React from 'react'

const Card = (props) => {
    const {
        apiData
    } = props
    console.log(apiData);
  return (
    <div className='card'>
      {
        apiData.map((data) => {
            console.log(data.title);
           return <div key={data.id} width={400} style={{border : '1px solid #61dafb' , padding: '20px' , margin: '20px 20px' , borderRadius : '5px'}}>
                <img src={data.image} alt="" className='App-logo' width={250} height={300} style={{borderRadius : '50%'}} />
                <h2 style={{fontWeight : 'bold'}}>{data.title}</h2>
                <p style={{fontWeight : '600'}}>{data.desc}</p>
            </div>
        })
      }
    </div>
  )
}

export default Card
