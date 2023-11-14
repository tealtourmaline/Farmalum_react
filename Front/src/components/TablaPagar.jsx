import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RenderTablaPagar() {
  // Estado para almacenar el código promocional ingresado por el usuario
  const [codigoPromocional, setCodigoPromocional] = useState('');
  
  // Estado para almacenar el costo total (puedes obtener este valor desde tu contexto o props)
  const [total, setTotal] = useState(100); // Ejemplo: inicializado en 100, debes ajustarlo según tu lógica

  // Función para manejar el envío del formulario con el código promocional
  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    // Aquí puedes agregar lógica para aplicar el código promocional y recalcular el total si es necesario
    console.log('Código promocional enviado:', codigoPromocional);
  };

  return (
    <div style={{ backgroundColor: '#ffecd4', color: '#000', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
      <h4>Información de pedido</h4>
      <hr style={{ borderTop: '1px solid #e5c29f', margin: '10px 0' }} />
      <div>
        <p>Costo total: {total}</p>
        <p>Costo envío: Calcular</p>
        <div>
          <p>Código promocional</p>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              value={codigoPromocional}
              onChange={(e) => setCodigoPromocional(e.target.value)}
            />
            <button type="submit">Aplicar</button>
          </form>
        </div>
      </div>
      <hr style={{ borderTop: '1px solid #e5c29f', margin: '10px 0' }} />
      <Link to="/pagos">
        <button>Proceder con el pago</button>
      </Link>
    </div>
  );
};
export default RenderTablaPagar;