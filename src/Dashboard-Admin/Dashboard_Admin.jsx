import React from 'react';
import Header from '../componentes/Header';
import Menu from '../componentes/Menu';
import Rutas from '../routes/rutas';
import '../Styles/styleMenu.css'
import '../Styles/perfil_admin.css'
import '../Styles/styleHeader.css'
import '../Styles/administradores.css'
import '../Styles/cuidadores.css'
import '../Styles/usuarios.css'
import '../Styles/preguntas.css'

export default function Dashboard_Admin() {
  return (
    <>
     <Header  />
     <main className="dashboard">
        <Menu />
          <Rutas />
     </main>
    </>
  )
}
