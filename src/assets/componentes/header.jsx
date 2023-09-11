import React from "react";
import admin from '../imagenes/admin.png'

function Header(){
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
        </div>
    );
}
export default Header