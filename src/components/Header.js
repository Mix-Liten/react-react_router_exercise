import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import '../App.css'

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <ul className="nav">
        <li>
          {/* <Link> 連結元件化，提供 prop 方便性，編譯後為<a> */}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
