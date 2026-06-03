import axios from 'axios'
import React, { useState } from 'react'

const App = () => {
  const[data,SetData]=useState([])
  const getData=async()=>{
    const response= await axios.get('https://picsum.photos/v2/list')

    SetData(response.data)
  }
  return (
    <div>
      <button onClick={getData}></button>
       {data.map((Elemen,idx)=>{

        return <p>{Elemen.author}</p>
       })}
    </div>
  )
}

export default App
