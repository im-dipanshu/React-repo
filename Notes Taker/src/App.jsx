import React, { useState } from 'react'

const App = () => {

    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')
    const [task, setTask] = useState([])
    const submitHandler = (e) => {
        e.preventDefault()
        const copyTask = [...task]

        copyTask.push({ title, detail })
        setTask(copyTask)
        setTitle('')
        setDetail('')
    }
    return (
        <div>
            <form id='Content' onSubmit={(e) => {
                submitHandler(e)
            }}>
                <div id='Adding-Area'>
                    <h1>Your Notes</h1>
                    <input id='Heading-Area' type='text' placeholder='Enter the heading of the Note' value={title} onChange={(e) => { setTitle(e.target.value) }}></input>
                    <textarea id='Text-Area' placeholder='Enter the Note' value={detail} onChange={(e) => {
                        setDetail(e.target.value)
                    }}></textarea>
                    <button id='Add-Btn'>Add Note</button>
                </div>

                <div id='Note-Area'>

                    {task.map((elem,idx) => {
                            return <div key={idx} id='Note-Box' >
                            <h2>{elem.title}</h2>
                            <p>{elem.detail}</p>
                            </div>
                        
                    })}
                </div>
            </form>
        </div>
    )
}

export default App