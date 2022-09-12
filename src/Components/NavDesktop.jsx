import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import NavLinks from './NavLinks'

const NavDesktop = () => {
  return (
    <nav className='navdesktop'>
      <NavLinks />
    </nav>
    
  )
}

export default NavDesktop