import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UsuariosList from './components/UsuariosList';
import FormularioUsuario from './components/FormularioUsuario';
import BuscarUsuario from './components/BuscarUsuario';

function App() {
  const [recargar, setRecargar] = useState(false);
  const [usuarioEditado, setUsuarioEditado] = useState(null);

  const handleRecarga = () => {
    setRecargar(!recargar);
    setUsuarioEditado(null);
  };

  return (
    <div className="container">
      <h1 className="my-4">Gestión de Usuarios</h1>
      <FormularioUsuario usuarioEditado={usuarioEditado} onSave={handleRecarga} />
      <BuscarUsuario />
      <UsuariosList key={recargar} onEdit={setUsuarioEditado} />
    </div>
  );
}

export default App;