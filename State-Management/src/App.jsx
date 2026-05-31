import React, { useState } from 'react'

const App = () => {
    const [num,setNum]=useState(0)
    const [user,setuser]=useState({name:'Vishal',age:29})
    function changeUser(){
        let newUser={...user}
        newUser.age=24
        setuser(newUser)
    }
    function changeNum(){
        setNum(num+1)
    }
    function decreaseNum(){
        setNum(num-1)
    }
    function Unloadjump(){
        let random=Math.floor(Math.random()*10)
        setNum(num+random)
    }
    function Clear(){
        setNum(0)
    }
  return (
    <div className='Contentbox'>
      <h1 className='Value'>{num}</h1>
      <button onClick={changeNum} className='Changer'>Increase 1</button>
      <button onClick={decreaseNum} className='Changer'>Decrease 1</button>
      <button onClick={Unloadjump} className='Changer'>Random Jump</button>
      <button onClick={Clear} className='Changer'>Clear</button>
      <button onClick={changeUser} className='Changer'>Change User</button>
      <h1>User {user.age}</h1>
    </div>
  )
}

export default App
