import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Proyecto Textil
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Inicio
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/trabajadores" className="navbar-link">
              Trabajadores
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/ordenes-produccion" className="navbar-link">
              Órdenes de Producción
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
