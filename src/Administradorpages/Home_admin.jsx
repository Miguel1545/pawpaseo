import React from "react";
import admin from '../imagenes/admin.png'
import usuario from '../imagenes/usuario.png'
// import Admin_perfil from "./Admin_perfil";
// import Administradores from "./administradores";
// import Cuidadores from "./cuidadores";
// import Preguntas from "./Preguntas";
// import Usuarios from "./usuarios";
import Header from "../componentes/Header";
import Menu from "../componentes/Menu";





function Home_admin(){  
    return(
        <>
            <Header />
            <main className="Contenido">
                <Menu />
                <section className="Info">
                    <nav>
                        <img className="Foto" src={usuario} alt=""/>
                        <main className="Texto">
                            <h1>Bienvenido</h1>
                            <h1>Nombre</h1>
                        </main>
                    </nav>
                </section>
            </main>
        </>
    );
}
export default Home_admin;