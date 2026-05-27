import React from 'react'

const card = (username) => {
  console.log(username)
  return (
    <div>
      <div className='Card'>
        <img src={username.image}></img>
        <h1>{username.name}</h1>
        <h2>{username.work}</h2>
        <div>
          <button className='mark'>Part Time</button>
          <button className='mark'>Senior Level</button>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit atque omnis hic aliquid natus. Veritatis cumque hic blanditiis, et fuga at itaque expedita veniam ipsam, unde dolor iure doloremque assumenda.</p>
        <button className='find-button'>Find Now</button>
      </div>
    </div>
  )
}

export default card
