import React, { useState } from 'react'
import About from './pages/About'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import More from './pages/More'
import Notfound from './pages/Notfound'
import Men from './pages/Men'
import Women from './pages/Women'
import Courses from './pages/Courses'
const App = () => {
  const [theme, setTheme] = useState('white')
    const [Ttheme, setTtheme] = useState('white')
  function changeT() {
    const newTheme = theme === "white" ? "black" : "white";
    const textTheme = Ttheme === "white" ? "black" : "white";
    const h3 = document.getElementById("heading");

    setTheme(newTheme);
    setTtheme(newTheme)
    document.body.style.backgroundColor = newTheme;
    h3.style.color=Ttheme
  }
  return (
    <div>
      <div id='Navbar'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/more'>More</Link>
        <Link to='/courses'>Courses</Link>
      </div>
      <h3 id="heading">Change Theme</h3>
      <input
        type="checkbox"
        onChange={changeT}
      />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/contact' element={<Contact></Contact>} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/more' element={<More />}>
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
        </Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  )
}

export default App
