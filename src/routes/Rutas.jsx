import React from 'react'
import {Routes, Route} from "react-router-dom";
import Cuidadores from '../Administradorpages/cuidadores';
import Home_admin from '../Administradorpages/Home_admin';
import Usuarios from '../Administradorpages/usuarios';
import Preguntas from '../Administradorpages/Preguntas';
import Administradores from '../Administradorpages/administradores';
import Admin_perfil from '../Administradorpages/Admin_perfil';

export default function Rutas() {
  return (
    <>
        <Routes>
            <Route path='/Home_admin' element={<Home_admin />} />
            <Route path="/Administradores" element={<Administradores />} />
            <Route path="/Admin-perfil" element={<Admin_perfil />} />
            <Route path="/Cuidadores" element={<Cuidadores />} />
            <Route path='/Usuarios' element = {<Usuarios />} />
            <Route path='/Preguntas-frecuentes' element={<Preguntas />} />
        </Routes>
    </>
  )
}
