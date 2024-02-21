import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-section">
    <div className="header-logo-section">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-logo"
      />
      <p className="header-app-name">Wave</p>
    </div>
    <ul className="nav-menu-list">
      <li className="nav-item">
        <Link to="/" className="link-item">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="link-item">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className="link-item">
          {' '}
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
