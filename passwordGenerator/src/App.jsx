import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [length, setlength] = useState(6)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charactersAllwoed, setCharactersAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const [backgroundColor, setbackgroundColor] = useState("blue")

  const passwordRef = useRef(null)
  const copPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 101)
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let stri = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) stri += "0123456789"
    if (charactersAllwoed) stri += "!()*+,-./:;<=>?@[^_`{|}~"


    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * stri.length)
      pass += stri.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charactersAllwoed, setPassword])
  useEffect(() => { passwordGenerator() }, [length, numberAllowed, charactersAllwoed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input ref={passwordRef} type='text' value={password} className='outline-none w-full py-1 px-3 bg-white text-gray-800' placeholder='password' readOnly></input>
          <button
            onClick={() => {
              copPasswordToClipboard();
              setbackgroundColor('#0F172A');

              setTimeout(() => {
                setbackgroundColor('#1D4ED8'); // blue-700 equivalent
              }, 100);
            }}
            style={{ backgroundColor }}
            className='outline-none text-white px-3 py-0.5 shrink-0 cursor-pointer'

          >
            Copy
          </button>

          {/* <button onClick={()=>setbackgroundColor('#22D3EE')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"#22D3EE"}}>Cyan</button> */}
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-centre gap-x-1'>
            <input type='range' min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {
              setlength(Number(e.target.value))
            }} />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={numberAllowed} id="numberInput" onChange={() => {
              setnumberAllowed((prev) => !prev);

            }}></input>
            <label htmlFor='numberInput'>Numbers</label>
          </div>


          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={charactersAllwoed} id="characterInput" onChange={() => {
              setCharactersAllowed((prev) => !prev);
            }}></input>
            <label htmlFor='characterInput'>Characters</label>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
