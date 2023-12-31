import "../styles.css";
import { AuthContext } from '../contexts/AuthContext';  
import { useContext, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

function RenderNavbar() {
  const { user, logout } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();


  const textStyle = {
    fontFamily: 'Roboto, sans-serif', // Establece la fuente como "Roboto" y luego fuentes alternativas
  };

  const boldTextStyle = {
    fontWeight: 600, // Hace que el texto sea negrita
    color: '#2F2F2F'
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      // Redirige a la ruta con la palabra escrita por el usuario
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="https://i.imgur.com/2bGB84z.png" alt="Farmalum" width="" height="70" class="d-inline-block align-text-center"/> 
          <span style={boldTextStyle}>       Farmalum</span>
        </a>

        {/* a cambiar */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Inicio</a>
            </li>
          </ul>
          <form className="d-flex mx-auto" onSubmit={handleSearch} role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar producto"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {user ? (
            <Link to="/profile" className="nav-link active" aria-current="page">
              Mi perfil
            </Link>
          ) : (
            <Link to="/login" className="nav-link active" aria-current="page">
              Iniciar sesión/Registrarse
            </Link>
          )}
        </li>
        {user && (
          <li className="nav-item">
            <button className="nav-link btn btn-link" onClick={logout}>
              Cerrar sesión
            </button>
          </li>
        )}
      </ul>

        </div>
        <a className="navbar-brand" href="/carrito">
          <img src="https://i.imgur.com/vzcjjBL.png" alt="Carrito" width="" height="70" class="d-inline-block align-text-center"/> 
        
        </a>
      </div>
    </nav>
  );
}

export default RenderNavbar;