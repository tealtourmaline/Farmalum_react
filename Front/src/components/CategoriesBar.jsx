import "../styles.css";

function RenderCategoriesBar() {

  return (
    <div className="container-fluid" style={{backgroundColor: "#F8A5B9", height: "2.5rem", margin: "0", display: "flex", justifyContent: "center", alignItems: "center"}} >
    <span style={{color: '#2F2F2F', fontWeight: '495', padding: '15px'}} >Cosméticos</span>
    <span style={{color: '#2F2F2F', fontWeight: '495', padding: '15px'}} >Cuidado personal</span>
    <span style={{color: '#2F2F2F', fontWeight: '495', padding: '15px'}} >Salud y medicamentos</span>
    <span style={{color: '#2F2F2F', fontWeight: '495', padding: '15px'}} >Maternidad y bebés</span>
    <span style={{color: '#2F2F2F', fontWeight: '495', padding: '15px'}} >Nutrición</span>
    <a href="/all" style={{ textDecoration: 'none', color: '#2F2F2F', fontWeight: '495', padding: '15px' }}>
        Todos los productos
      </a>

    </div>
  )
}
export default RenderCategoriesBar;
