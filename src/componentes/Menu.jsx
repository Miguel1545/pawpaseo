import React from 'react'
import { Link } from 'react-router-dom'


export default function Menu() {
  return (
    <>
        <section className="MenuFijo">
            <section className="Opciones">
                {/* <h1 className="Texto">Perfil</h1> */}
                <Link className='Texto' to="/Admin-perfil">Perfil</Link>
            </section>

            <section className="Opciones">
                {/* <h1 className="Texto">Administradores</h1>*/}
                <Link className='Texto' to="/Administradores">Administradores</Link>
            </section>
                     
            <section className="Opciones">
                {/* <h1 className="Texto">cuidadores</h1> */}
                <Link className='Texto' to="/Cuidadores">Cuidadores</Link>
            </section>
                        
            <section className="Opciones">
                {/* <h1 className="Texto">Usuarios</h1> */}
                <Link className='Texto' to="/Usuarios">Usuarios</Link>
            </section>
                    
            <section className="Opciones">
                {/* <h1 className="Texto"> Preguntas Frecuentes</h1> */}
                <Link className='Texto' to="/Preguntas-frecuentes">Preguntas Frecuentes</Link>
            </section>
        </section>
    
    </>
  )
}
