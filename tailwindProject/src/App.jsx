import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-violet-500 text-2xl p-4 rounded-2xl text-white'>Hello From My Side</h1>

      <div class="flex flex-col items-center p-7 rounded-2xl">
        <div>
          <img class="size-48 shadow-xl r" alt="" src="/img/cover.png" />
        </div>
        <div class="flex">
          <span>Class Warfare</span>
          <span>The Anti-Patterns</span>
          <span class="flex">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    </>
  )
}

export default App
