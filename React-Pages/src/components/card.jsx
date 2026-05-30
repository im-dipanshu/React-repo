import React from 'react'

const card = (user) => {
  console.log(user)
  return (
    <div>
      <div className='Card'>
        <img src={user.image}></img>
        <h1>{user.name}</h1>
        <h2>{user.work}</h2>
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
