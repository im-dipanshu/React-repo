import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  let [counter,setCounter]=useState(15)
  // let counter=15

  function addValue(){
    // console.log(counter)
    counter+=1

    if (counter>=0 && counter<=20){
      setCounter(counter)
    }else{
      counter=20
    }
  }
  function removeValue(){
    counter-=1
    if (counter>=0){
        setCounter(counter)
    }else{
      counter=0
    }

  }
  return (
    <>
      <h1>Chai AURS React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>remover value</button>
    </>
  )
}

export default App
