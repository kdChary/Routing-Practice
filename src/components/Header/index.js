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
        <button type="button" className="button">
          Home
        </button>
      </li>
      <li className="nav-item">
        <button type="button" className="button">
          About
        </button>
      </li>
      <li className="nav-item">
        <button type="button" className="button">
          Contact
        </button>
      </li>
    </ul>
  </nav>
)
export default Header
