import "../styles.css";
import { Link } from 'react-router-dom';

function RenderCategoriesBar() {

  return (
    <div className="container-fluid" style={{backgroundColor: "#F8A5B9", height: "2.5rem", margin: "0", display: "flex", justifyContent: "center", alignItems: "center"}} >
     <Link to="/category/Cosméticos" style={{color: '#2F2F2F', fontWeight: '495', padding: '15px'}} >Cosméticos</Link>
      <Link to="/category/Cuidado" style={{color: '#2F2F2F', fontWeight: '495', padding: '15px'}} >Cuidado personal</Link>
      <Link to="/category/Medicamentos" style={{color: '#2F2F2F', fontWeight: '495', padding: '15px'}} >Salud y medicamentos</Link>
      <Link to="/category/Maternidad-y-bebés" style={{color: '#2F2F2F', fontWeight: '495', padding: '15px'}} >Maternidad y bebés</Link>
      <Link to="/category/Nutrición" style={{color: '#2F2F2F', fontWeight: '495', padding: '15px'}} >Nutrición</Link>
     <a href="/all" style={{ textDecoration: 'none', color: '#2F2F2F', fontWeight: '495', padding: '15px' }}>
        Todos los productos
      </a>

    </div>
  )
}
export default RenderCategoriesBar;
