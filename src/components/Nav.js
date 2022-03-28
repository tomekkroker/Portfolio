import './Nav.css';
import { Link } from "react-router-dom";

function Nav(props) {
  return (
      <nav>
        <h1 className='nav--title'>Portfolio Programisty</h1>
        <Link to="/form" className='nav--link'>Dodaj Projekt</Link>
        <Link to="/" className='nav--link'>Powrót do listy</Link>
      </nav>
  );
}

export default Nav;