import React from "react";
import Header from "../componentes/header";
import usuario from '../imagenes/usuario.png'
import buzon from '../imagenes/buzon.png'

function Preguntas(){
    return(
        <div>
            <Header />
            <main class="Contenido">
                <section class="BarraLateral">
                    <a href="/html/AdminPerfil.html"> 
                        <section class="Opciones">
                            <h1 class="Texto">Perfil</h1>
                        </section>
                    </a>
                    <a href="/html/DemasAdmin.html">
                        <section class="Opciones">
                            <h1 class="Texto">Administradores</h1>
                        </section>
                    </a>
                    <a href="/html/Cuidadores.html">
                        <section class="Opciones">
                            <h1 class="Texto">cuidadores</h1>
                        </section>
                    </a>
                    <a href="/html/Usuarios.html">
                        <section class="Opciones">
                            <h1 class="Texto">Usuarios</h1>
                        </section>
                    </a>
                    <section class="OpcionesSubrallado">
                        <h1 class="Texto"> Preguntas Frecuentes</h1>
                    </section>
                </section>
                <section class="Info2">
                    <nav>
                        <main class="Cabeza">
                            <img class="Buzon" src={buzon} alt=""/>
                            <h1>Quejas y Reclamos</h1>
                            <img class="Buzon" src={buzon} alt=""/>
                        </main>
                        <main class="Mensaje">
                            <article class="MensajeContenido">
                                <section class="Arriba">
                                    <img class="ImagenPregunta" src={usuario} alt=""/>
                                    <nav class="TextoPreguntas">
                                        <h1>Nombre: </h1>
                                        <h1>Correo: </h1>
                                    </nav>
                                </section>
                                <section>
                                    <h1>--------------------------------------------------------------------------------</h1>
                                    <h1>--------------------------------------------------------------------------------</h1>
                                </section>
                            </article>
                            <article class="MensajeContenido">
                                <section class="Arriba">
                                    <img class="ImagenPregunta" src={usuario} alt=""/>
                                    <nav class="TextoPreguntas">
                                        <h1>Nombre: </h1>
                                        <h1>Correo: </h1>
                                    </nav>
                                </section>
                                <section>
                                    <h1>--------------------------------------------------------------------------------</h1>
                                    <h1>--------------------------------------------------------------------------------</h1>
                                </section>
                            </article>
                            <article class="MensajeContenido">
                                <section class="Arriba">
                                    <img class="ImagenPregunta" src={usuario} alt=""/>
                                    <nav class="TextoPreguntas">
                                        <h1>Nombre: </h1>
                                        <h1>Correo: </h1>
                                    </nav>
                                </section>
                                <section>
                                    <h1>--------------------------------------------------------------------------------</h1>
                                    <h1>--------------------------------------------------------------------------------</h1>
                                </section>
                            </article>
                        </main>
                    </nav>
                </section>
            </main>
        </div>
    );
}
export default Preguntas