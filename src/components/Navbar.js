import { Link } from 'react-router-dom';
import "../styles/navbar.css";
import SwitchButton from './SwitchMode';

const Navbar = () => (
  <nav>
    <ul className="navbar">
      {[
        { name: "home", link: "/" },
        { name: "about", link: "/about" },
        { name: "services", link: "/services" },
        { name: "contact", link: "mailto:0bautistapuebla@gmail.com" },
      ].map((item) => (
        <li key={item.name}>
          <Link to={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
{/* <SwitchButton></SwitchButton> */}
  </nav>
);

export default Navbar;