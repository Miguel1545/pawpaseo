import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Landing from './landing/landing.jsx'
import Admin_perfil from './componentes/admin_perfil.jsx'
// import './index.css'
import './landing/Landing.css'
import './componentes/admin_perfil.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Landing /> */}
      <Admin_perfil />
  </React.StrictMode>,
)
