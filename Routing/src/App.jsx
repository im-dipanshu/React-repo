import React from 'react'
import About from './pages/About'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import More from './pages/More'
import Notfound from './pages/Notfound'

const App = () => {
  return (
    <div>
      <div id='Navbar'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/more'>More</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/about' element={<About></About>}/>
        <Route path='/contact' element={<Contact></Contact>}/>
        <Route path='/more' element={<More></More>}/>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  )
}

export default App
