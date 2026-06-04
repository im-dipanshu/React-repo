import axios from 'axios'
import React, { useState } from 'react'

const App = () => {
  const [userData, setUserData] = useState([])
  const data = async () => {
    const randompage = Math.floor(Math.random() * 10)
    const response = await axios.get(`https://picsum.photos/v2/list?page=${randompage}&limit=18`)
    setUserData(response.data)
    console.log(response.data)
  }
  return (
    <div>
      <button onClick={data} id='click'>Get Data</button>
      <div id='whole'>

        {userData.map((Elem, index) => {
          return <div id='content'>
            <a href={`https://picsum.photos/id/${Elem.id}/200/200`}>
                          <img key={index}
              src={Elem.download_url
              }></img>
            <h1>{Elem.author}</h1>
            </a>

          </div>
        })}
      </div>
    </div>
  )
}

export default App
