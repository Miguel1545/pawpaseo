import React from "react";
import admin from '../imagenes/admin.png'
import usuario from '../imagenes/usuario.png'
function Home_admin(){
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
                    <a href="/html/AdminPerfil.html"> 
                        <section className="Opciones">
                            <h1 className="Texto">Perfil</h1>
                        </section>
                    </a>
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
        </div>
    );
}
export default Home_admin;