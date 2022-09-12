import React, {useState} from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import {FiMenu} from "react-icons/fi"
import {AiOutlineClose} from "react-icons/ai"
import NavLinks from './NavLinks'

const NavMobile = () => {
    const [open, setOpen] = useState(false);

    const hamburgerIcon = <FiMenu className='hamburger' size="40px"
    onClick={()=> setOpen(!open)}/>

    const closeIcon = <AiOutlineClose className='hamburger' size="35px"
    onClick={()=> setOpen(!open)}/>

  return (
    <nav className='navmobile'>
        {open ? closeIcon : hamburgerIcon}
        {open && <NavLinks />}
    </nav>
    
  )
}

export default NavMobile