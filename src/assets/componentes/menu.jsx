import React from "react";

function Menu() {
    return(
        <div>
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
        </div>
    );
}
export default Menu