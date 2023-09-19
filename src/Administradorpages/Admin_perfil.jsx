import React from "react";
/*import logo*/
import usuario from '../imagenes/usuario.png'
import editar from '../imagenes/Editar.png'
import '../Styles/perfil_admin.css'

function Admin_perfil(){
 return(
    <>
        <main className="Contenido_AdminPerfil">

            <section className="">
                <img className="FotoPerfil2" src={usuario} alt=""/>
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
            </section>
        </main>    

    </>
 );   
}
export default Admin_perfil