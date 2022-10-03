import React, {useState} from 'react'
import { DropdownItems } from './DropdownItems'
import { Link } from "react-router-dom"

const Dropdown = () => {
    const [dropdown, setDropdown] = useState(false)
  return (
    <div>
        <ul className={dropdown ? 'issues-dropdown-clicked' : 'issues-dropdown'} onClick={()=> {setDropdown(!dropdown)}}>
        {DropdownItems.map(issue => {
            return (
                <li key={issue.id}>
                    <Link to={issue.path} className={issue.cName} onClick={()=> {setDropdown(false)}}>
                        {issue.title}
                    </Link>
                </li>
            )
        })}
        </ul>
    </div>
  )
}

export default Dropdown