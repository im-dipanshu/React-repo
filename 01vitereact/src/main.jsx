import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react'
function MyApp(){
    return (
        <div>
            <h1>Custom Apps</h1>
        </div>
    )
}

// const ReactElement={
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:' Click me to visit google! '
// }  
const anotherUser='chai'
const reactElement=React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    ' click me to visit google! ',
    anotherUser
)


const anotherElement=(<a href='https://google.com' target='_blank'>Click me to visit google!</a>)
createRoot(document.getElementById('root')).render(

    reactElement 

)
