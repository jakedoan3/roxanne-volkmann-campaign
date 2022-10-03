import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import Dropdown from "./Dropdown";

const NavLinks = (props) => {
  const [dropdown, setDropdown] = useState(false);

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
    <div>
      <ul>
        <CurrLink to="/about">About Roxanne</CurrLink>
        <li>
          <Link
            to="/issues"
            className="issues-nav"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            Issues <AiFillCaretDown />
            {dropdown && <Dropdown/>}
          </Link>
          
        </li>

        <CurrLink to="/connect">Get Connected</CurrLink>
        <CurrLink to="/events">Events</CurrLink>
        <CurrLink to="/volunteer">Volunteer</CurrLink>
        <CurrLink to="/community-resources">Community Resources</CurrLink>
        <li>
          <a href="https://www.facebook.com/">
            <img
              className="socials"
              src="/icons8-facebook-f-50.png"
              alt="Facebook"
              width="20vw"
            />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/">
            <img
              className="socials"
              src="/icons8-twitter-48.png"
              alt="Twitter"
              width="25vw"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <img
              className="socials"
              src="/icons8-instagram-50.png"
              alt="Instagram"
              width="20vw"
            />
          </a>
        </li>

        <CurrLink to="/donate" className="donate-button">
          Donate
        </CurrLink>
      </ul>
    </div>
  );
};

export default NavLinks;
