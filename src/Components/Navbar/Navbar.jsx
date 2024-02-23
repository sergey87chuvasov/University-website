import './Navbar.css';

import logo from '../../assets/logo.png';

function Navbar() {
  return (
    <nav>
      <img src={logo} alt='logo pic' />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
}

export default Navbar;
