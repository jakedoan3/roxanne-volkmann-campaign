import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"


const NavLinks = () => {
    function CurrLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to);
        const isActive = useMatch({ path: resolvedPath.pathname, end: true });
      
        return (
          <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
              {children}
            </Link>
          </li>
        );
      }

  return (
    <ul>
      <CurrLink to="/about">About Roxanne</CurrLink>
      <CurrLink to="/platform">Platform</CurrLink>
      <CurrLink to="/connect">Get Connected</CurrLink>
      <CurrLink to="/events">Events</CurrLink>
      <CurrLink to="/volunteer">Volunteer</CurrLink>
      <CurrLink to="/vote">Vote</CurrLink>
      <li>
        <a href="https://www.facebook.com/">
          <img  src="/icons8-facebook-f-50.png" alt="Facebook" width="20vw"/>
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com/">
        <img  src="/icons8-twitter-48.png" alt="Twitter" width="25vw"/>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/">
        <img  src="/icons8-instagram-50.png" alt="Instagram" width="20vw"/>
        </a>
      </li>
      
      <CurrLink to="/donate" className="donate-button">Donate</CurrLink>
    </ul>
  )
}

export default NavLinks



  