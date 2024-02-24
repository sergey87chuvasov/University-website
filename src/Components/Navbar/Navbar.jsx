import './Navbar.css';

import logo from '../../assets/logo.png';

function Navbar() {
  return (
    <nav className='container'>
      <img className='logo' src={logo} alt='logo pic' />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>
          <button className='btn'>Contact Us</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
