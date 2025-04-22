import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FormularioUsuario({ usuarioEditado, onSave }) {
  const [usuario, setUsuario] = useState({
    nombre: '',
    usuarioLog: '',
    passwordLog: ''
  });

  useEffect(() => {
    if (usuarioEditado) setUsuario(usuarioEditado);
  }, [usuarioEditado]);

  const handleChange = e => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (usuario.id) {
      await axios.put(`https://localhost:7139/api/Usuarios/${usuario.id}`, usuario);
    } else {
      await axios.post(`https://localhost:7139/api/Usuarios`, usuario);
    }
    onSave(); // vuelve a listar
    setUsuario({ nombre: '', usuarioLog: '', passwordLog: '' });
  };

  return (
    <div className="container mt-4">
      <h3>{usuario.id ? 'Editar Usuario' : 'Nuevo Usuario'}</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label>Nombre</label>
          <input type="text" className="form-control" name="nombre" value={usuario.nombre} onChange={handleChange} required />
        </div>
        <div className="mb-2">
          <label>Usuario</label>
          <input type="text" className="form-control" name="usuarioLog" value={usuario.usuarioLog} onChange={handleChange} required />
        </div>
        <div className="mb-2">
          <label>Password</label>
          <input type="password" className="form-control" name="passwordLog" value={usuario.passwordLog} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success mt-2">{usuario.id ? 'Actualizar' : 'Crear'}</button>
      </form>
    </div>
  );
}

export default FormularioUsuario;