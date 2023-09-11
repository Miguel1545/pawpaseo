import React from "react";
import Header from "../componentes/header";
import usuario from '../imagenes/usuario.png'
import cancelar from '../imagenes/cancelar.png'
import estrella from '../imagenes/estrella.png'

function Usuarios(){
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
                    <section class="OpcionesSubrallado">
                        <h1 class="Texto">Usuarios</h1>
                    </section>
                    <a href="/html/Preguntas.html">
                        <section class="Opciones">
                            <h1 class="Texto"> Preguntas Frecuentes</h1>
                        </section>
                    </a>
                </section>
                <section class="Info4">
                    <main class="LadoIzquierdo">
                        <h1 class="TextoAdmin">Perfil de Usuario</h1>
                        <img class="ImgGrande" src={usuario} alt=""/>
                        <article class="InfoAdmin">Nombre: Freddy</article>
                        <article class="InfoAdmin">Apellido: urbano</article>
                        <article class="InfoAdmin">Edad: 19</article>
                        <article class="InfoAdmin">correo: oquendoFredy@gmail.com</article>
                        <article class="InfoAdmin">Telefono: 3042945240</article>
                        <article class="InfoCudador Rojo"><img class="Cancelar" src={cancelar} alt=""/>suspender <img class="Cancelar" src={cancelar} alt=""/> </article>
                </main>
                <main class="LadoDerecho">
                    <article class="PerfilesAdmin">
                        <h1 class="Numero">1<img class="ImgPequeña" src={usuario} alt=""/></h1>
                        <h1 class="TextoPerfilPeqeño">Miguel</h1>
                    </article>
                    <article class="PerfilesAdmin">
                        <h1 class="Numero">2<img class="ImgPequeña" src={usuario} alt=""/></h1>
                        <h1 class="TextoPerfilPeqeño">Daniela</h1>
                    </article>
                    <article class="PerfilesAdmin">
                        <h1 class="Numero">3<img class="ImgPequeña" src={usuario} alt=""/></h1>
                        <h1 class="TextoPerfilPeqeño">Carlos</h1>
                    </article>
                    <article class="PerfilesAdmin OpcionesSubrallado">
                        <h1 class="Numero">4<img class="ImgPequeña" src={usuario} alt=""/></h1>
                        <h1 class="TextoPerfilPeqeño">Freddy</h1>
                    </article>
                    <article class="PerfilesAdmin">
                        <h1 class="Numero">5<img class="ImgPequeña" src={usuario} alt=""/></h1>
                        <h1 class="TextoPerfilPeqeño">Josue</h1>
                    </article>
                </main>
        </section>
    </main>
        </div>
    );
}
export default Usuarios