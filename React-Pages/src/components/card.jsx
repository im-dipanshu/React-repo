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
        <p>Lorem  fuga at itaque expedita veniam ipsam, unde dolor iure doloremque assumenda.</p>
        <div className='signact'>
            <button className='find-button'>Find Now</button>
        </div>

      </div>
    </div>
  )
}

export default card
