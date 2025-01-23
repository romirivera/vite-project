import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Inicio</Link>
        </li>
        <li>
          <Link to='/contador'>Contador</Link>
        </li>
        <li>
          <Link to='/formulario'>Formulario</Link>
        </li>
        <li>
          <Link to='/usuarios'>Lista usuarios</Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
