// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="header-container">
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
    </div>
    <ul className="items-container">
      <li className="list-item">
        <p>Home</p>
      </li>
      <li className="list-item">
        <p>Products</p>
      </li>
      <li className="list-item">
        <p>Cart</p>
      </li>
      <li className="list-item">
        <button type="button" className="logout-button">
          Logout
        </button>
      </li>
    </ul>
  </nav>
)

export default Header
