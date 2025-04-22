import React, { useState } from 'react';
import axios from 'axios';

function BuscarUsuario() {
  const [id, setId] = useState('');
  const [usuario, setUsuario] = useState(null);

  const buscar = async () => {
    try {
      const res = await axios.get(`https://localhost:7139/api/Usuarios/${id}`);
      setUsuario(res.data);
    } catch {
      setUsuario(null);
    }
  };

  return (
    <div className="container mt-4">
      <h3>Buscar Usuario por ID</h3>
      <div className="input-group mb-3">
        <input type="number" className="form-control" placeholder="ID" value={id} onChange={e => setId(e.target.value)} />
        <button className="btn btn-primary" onClick={buscar}>Buscar</button>
      </div>

      {usuario && (
        <div className="alert alert-info">
          <strong>ID:</strong> {usuario.id} <br />
          <strong>Nombre:</strong> {usuario.nombre} <br />
          <strong>Usuario:</strong> {usuario.usuarioLog}
        </div>
      )}

      {usuario === null && id && (
        <div className="alert alert-warning">Usuario no encontrado</div>
      )}
    </div>
  );
}

export default BuscarUsuario;