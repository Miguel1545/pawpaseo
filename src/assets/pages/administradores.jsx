import React from "react";
import Header from "../componentes/header.jsx";
import Menu from "../componentes/menu.jsx";
import admin from '../imagenes/admin.png'
import usuario from '../imagenes/usuario.png'
import '../landing/Landing.css'



function Administradores(){
    return(
        <div>
            <Header />
            <main className="Contenido">
                <section className="BarraLateral">
                    <a href="/html/AdminPerfil.html"> 
                        <section className="Opciones">
                            <h1 className="Texto">Perfil</h1>
                        </section>
                    </a>
                    <section className="OpcionesSubrallado">
                        <h1 className="Texto">Administradores</h1>
                    </section>
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
                <section className="Info3">
                    <main className="LadoIzquierdo">
                        <h1 className="TextoAdmin">Perfil de Admin</h1>
                        <img className="ImgGrande" src={usuario} alt=""/>
                        <article className="InfoAdmin">Nombre: Freddy</article>
                        <article className="InfoAdmin">Apellido: urbano</article>
                        <article className="InfoAdmin">Edad: 19</article>
                        <article className="InfoAdmin">correo: oquendoFredy@gmail.com</article>
                        <article className="InfoAdmin">Telefono: 3042945240</article>
                    </main>
                    <main className="LadoDerecho">
                        <article className="PerfilesAdmin">
                            <h1 className="Numero">1<img class="ImgPequeña" src={usuario} alt=""/></h1>
                            <h1 className="TextoPerfilPeqeño">Miguel</h1>
                        </article>
                        <article className="PerfilesAdmin">
                            <h1 className="Numero">2<img class="ImgPequeña" src={usuario} alt=""/></h1>
                            <h1 className="TextoPerfilPeqeño">Daniela</h1>
                        </article>
                        <article className="PerfilesAdmin">
                            <h1 className="Numero">3<img class="ImgPequeña" src={usuario} alt=""/></h1>
                            <h1 className="TextoPerfilPeqeño">Carlos</h1>
                        </article>
                        <article className="PerfilesAdmin OpcionesSubrallado" >
                            <h1 className="Numero">4<img class="ImgPequeña" src={usuario} alt=""/></h1>
                            <h1 className="TextoPerfilPeqeño">Freddy</h1>
                        </article> 
                        <article className="PerfilesAdmin">
                            <h1 className="Numero">5<img class="ImgPequeña" src={usuario} alt=""/></h1>
                            <h1 className="TextoPerfilPeqeño">Josue</h1>
                        </article>
                </main>
        </section>
    </main>
        </div>
    );
}
export default Administradores