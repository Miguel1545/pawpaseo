import React from "react";
/*import logo*/
import admin from '../imagenes/admin.png'
import usuario from '../imagenes/usuario.png'
import editar from '../imagenes/Editar.png'

function Admin_perfil(){
 return(
    <div>
     <header className="Encabezado">
      <section className="Logo">
        <img src="" alt=""/>
      </section>
      <section className="BotonSesion">
        <button className="c">Cerrar Sesión</button>
      </section>
      <section className="FotoPerfil">
        <img className="FotoPerfil_Img" src={admin} alt=""/>
      </section>
     </header>
     <main className="Contenido">
        <section className="BarraLateral">
            <section className="OpcionesSubrallado">
                <h1>Perfil</h1>
            </section>
            <a href="/html/DemasAdmin.html">
                <section className="Opciones">
                    <h1 className="Texto">Administradores</h1>
                </section>
            </a>
            <a href="/html/Cuidadores.html">
                <section className="Opciones">
                    <h1 className="Texto">cuidadores</h1>
                </section>
            </a>
            <a href="/html/Usuarios.html">
                <section className="Opciones">
                    <h1 className="Texto">Usuarios</h1>
                </section>
            </a>
            <a href="/html/Preguntas.html">
                <section className="Opciones">
                    <h1 className="Texto"> Preguntas Frecuentes</h1>
                </section>
            </a>
        </section>
        <section className="Info2">
            <main>
                <img className="Foto2" src={usuario} alt=""/>
                <nav className="InformacionAdmin">
                    <h1 className="InformacionAdminText">Nombre: </h1>
                    <h1 className="InformacionAdminText">Correo: </h1>
                    <h1 className="InformacionAdminText">Dirección</h1>
                </nav>
                <nav className="InformacionAdmin">
                    <h1 className="InformacionAdminText">Fecha Nacimiento</h1>
                    <h1 className="InformacionAdminText">Genero</h1>
                    <h1 className="InformacionAdminText">Fecha de Reguistro</h1>
                </nav>
                <button className="Editar" type="button">Editar<img class="EditarImagen" src={editar} alt=""/></button>
            </main>
        </section>
    </main>   


    </div>
 );   
}
export default Admin_perfil