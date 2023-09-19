import React from "react";
import Header from "../componentes/Header";
import usuario from '../imagenes/usuario.png';
import cancelar from '../imagenes/cancelar.png';
import estrella from '../imagenes/estrella.png';
import Menu from "../componentes/Menu";

function Cuidadores(){
    return(
        <>
                <section class="InfoCuidadores">
                    <main class="Container1">
                        <h1 class="TextoCui">Perfil Cuidador</h1> 
                        <img class="ImgCui" src={usuario} alt=""/>
                        <article class="InfoCuidador">Nombre: Freddy</article>
                        <article class="InfoCuidador">Apellido: urbano</article>
                        <article class="InfoCuidador">Edad: 19</article>
                        <article class="InfoCuidador">correo: oquendoFredy@gmail.com</article>
                        <article class="InfoCuidador">Telefono: 3042945240</article>
                        <article class="InfoCuidador">Calificacion: 4.7 <img class="ImgEstrella" src={estrella} alt=""/></article>
                        <article class="InfoCuidador_Rojo"><img class="Cancelar" src={cancelar} alt=""/>suspender <img class="Cancelar" src={cancelar} alt=""/> </article>
                    </main>
                    <main class="Container2">
                        <article class="PerfilesCui">
                            <h1 class="Numbers">1<img class="ImgCuidadores" src={usuario} alt=""/></h1>
                            <h1 class="NamesCui">Miguel</h1>
                        </article>
                        <article class="PerfilesCui">
                            <h1 class="Numbers">2<img class="ImgCuidadores" src={usuario} alt=""/></h1>
                            <h1 class="NamesCui">Daniela</h1>
                        </article>
                        <article class="PerfilesCui">
                            <h1 class="Numbers">3<img class="ImgCuidadores" src={usuario} alt=""/></h1>
                            <h1 class="NamesCui">Carlos</h1>
                        </article>
                        <article class="PerfilesCui OpcionesSubrayado">
                            <h1 class="Numbers">4<img class="ImgCuidadores" src={usuario} alt=""/></h1>
                            <h1 class="NamesCui">Freddy</h1>
                        </article>
                        <article class="PerfilesCui">
                            <h1 class="Numbers">5<img class="ImgCuidadores" src={usuario} alt=""/></h1>
                            <h1 class="NamesCui">Josue</h1>
                        </article>
                    </main> 
                </section>
        </>
    );
}
export default Cuidadores