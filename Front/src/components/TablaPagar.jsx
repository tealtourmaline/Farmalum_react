import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RenderTablaPagar({total}) {
  
  // Estado para almacenar el costo total (puedes obtener este valor desde tu contexto o props)
  return (
    <div style={{ backgroundColor: '#ffecd4', color: '#000', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
      <h4>Información de pedido</h4>
      <hr style={{ borderTop: '1px solid #e5c29f', margin: '10px 0' }} />
      <div>
        <p>Costo total: {total}</p>
        <p>Costo envío: Calcular</p>
        <div>
        
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