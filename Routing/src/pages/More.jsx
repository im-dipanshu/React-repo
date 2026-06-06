import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const More = () => {
  return (
    <>
      <div id='Inside'>
        <Link to='/more/men'>Men</Link>
        <Link to='/more/women'>Women</Link>
      </div>
      <div id='Content'>
        <h1>More</h1>
      </div>
      <Outlet/>
    </>

  )
}

export default More

