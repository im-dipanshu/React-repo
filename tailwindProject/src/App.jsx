import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from '../components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"hitesh",
    age:21
  }

  let newArr=[1,4]
  return (
    < >
      <h1 className='bg-violet-500 text-2xl p-4 rounded-2xl text-white '>Hello From My Side</h1>

      <Card username="Dipanshu" btnText="visit me"/>
      <Card username="chaiaurcode" someObject={newArr} btnText="Search me"/>
    </>
  )
}

export default App
