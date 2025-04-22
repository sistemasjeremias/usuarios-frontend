import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UsuariosList({ onEdit }) {
  const [usuarios, setUsuarios] = useState([]);

  const cargarUsuarios = async () => {
    const res = await axios.get('https://localhost:7139/api/Usuarios');
    setUsuarios(res.data);
  };

  const eliminarUsuario = async (id) => {
    await axios.delete(`https://localhost:7139/api/Usuarios/${id}`);
    cargarUsuarios();
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);

  return (
    <div className="container mt-4">
      <h3>Lista de Usuarios</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.nombre}</td>
              <td>{u.usuarioLog}</td>
              <td>
                <button className="btn btn-sm btn-primary me-2" onClick={() => onEdit(u)}>Editar</button>
                <button className="btn btn-sm btn-danger" onClick={() => eliminarUsuario(u.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsuariosList;