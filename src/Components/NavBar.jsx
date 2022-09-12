import { Link } from "react-router-dom";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Roxanne Volkmann <span className="ward">Ward 48</span>
      </Link>
      <div>
        <NavDesktop />
        <NavMobile />
      </div>

      {/* <ul>
      <CurrLink to="/about">About Roxanne</CurrLink>
      <CurrLink to="/platform">Platform</CurrLink>
      <CurrLink to="/connect">Get Connected</CurrLink>
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
    </ul> */}
    </nav>
  );
}
