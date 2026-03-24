import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [length,setlength]=useState(0)
  const [numberAllowed,setnumberAllowed]=useState(false)
  const [charactersAllwoed,setCharactersAllowed]=useState(false)
  const [password,setPassword]=useState("")

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let stri="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed)stri+="0123456789"
    if(numberAllowed)stri+="!()*+,-./:;<=>?@[^_`{|}~"
    
    
    for (let i = 1; i <= array.length; i++) {
      let char=Math.floor(Math.random()*stri.length()+1)
      pass=stri.charAt(char)
    }
    setPassword(pass)

  },[length,numberAllowed,charactersAllwoed,setPassword])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' value={password} className='outline-none w-full py-1 px-3 bg-white text-gray-800' placeholder='password' readOnly></input>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-centre gap-x-1'>
            <input type='range' min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{
              setlength(e.target.value)
            }}/>

            <label>Length:{length}</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
