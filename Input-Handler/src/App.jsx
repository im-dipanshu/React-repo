import React, { useState } from 'react'

const App = () => {
    let [text,setText]=useState('')
    function form_Handler(e){
        e.preventDefault()
        console.log('submitted')
    }
    return (
        <div>
            <form onSubmit={(e)=>{
                form_Handler(e)
            }}>
                <input type='text' placeholder='Enter' value={text} onChange={(e)=>{
                    setText(e.target.value)
                }}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default App
