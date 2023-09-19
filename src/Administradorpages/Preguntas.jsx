import React from "react";
import Header from "../componentes/Header";
import usuario from '../imagenes/usuario.png'
import buzon from '../imagenes/buzon.png'
import Menu from "../componentes/Menu";

function Preguntas(){
    return(
        <>
            <section class="Info2">
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
            </section>
        </>
    );
}
export default Preguntas