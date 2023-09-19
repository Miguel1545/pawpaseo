import React from 'react'
import ReactDOM from 'react-dom/client'

import '../src/landing/Landing.css'
import Home_admin from './Administradorpages/Home_admin'
import Usuarios from './Administradorpages/usuarios'
import Dashboard_Admin from './Dashboard-Admin/Dashboard_Admin'
import { BrowserRouter } from 'react-router-dom'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Dashboard_Admin />
    </BrowserRouter>
  </React.StrictMode>,
)
