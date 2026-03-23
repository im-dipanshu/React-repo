import { useState } from "react"

function App() {
  const [color,setColor]=useState("#FFFD01")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2 px-3 rounded-3xl">
            <button onClick={()=>setColor('#0F172A')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"#0F172A"}}>Deep Navy</button>
            <button onClick={()=>setColor('#22C55E')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"#22C55E"}}>Bright</button>
            <button onClick={()=>setColor('#F9FAFB')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"#F9FAFB"}}>Off White</button>
            <button onClick={()=>setColor('#1E3A8A')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"#1E3A8A"}}>Deep Blue</button>
            <button onClick={()=>setColor('#22D3EE')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"#22D3EE"}}>Cyan</button>
            <button onClick={()=>setColor('black')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>Black</button>
            <button onClick={()=>setColor('#A855F7')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"#A855F7"}}>Unknown</button>
            <button onClick={()=>setColor('#FFFD01')} className="outline-none px-4 py-1 rounded-full text-black drop-shadow-lg shadow-rose-600" style={{backgroundColor:"white"}}>X</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
