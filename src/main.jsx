import React from 'react'
import ReactDOM from 'react-dom/client'

import Landing from '../src/assets/landing/landing.jsx'
import Admin_perfil from '../src/assets/pages/admin_perfil.jsx'
import Home_admin from './assets/pages/home_admin.jsx'
import Administradores from './assets/pages/administradores.jsx'
import Cuidadores from './assets/pages/cuidadores.jsx'
import Usuarios from './assets/pages/usuarios.jsx'
import Preguntas from './assets/pages/usuarios.jsx'
import '../src/assets/landing/Landing.css'
import '../src/styles.css'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home_admin />
 
  </React.StrictMode>,
)
