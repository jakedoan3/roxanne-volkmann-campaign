import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
export default function NavBar() {
  return (
    <nav className="nav-main">
      
      <div className="nav">
        <NavDesktop />
        <NavMobile />
      </div>
    </nav>
  );
}
