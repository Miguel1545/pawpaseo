import React from "react";
import usuario from '../imagenes/usuario.png'

function Administradores(){
    return(
        <>
            {/* <main className="Contenido"> */}
                <section className="ContenidoDemasAdmin">
                    <main className="Info1">
                        <h1 className="TextoAdmin">Perfil de Admin</h1>
                        <img className="ImgPerfilMenu" src={usuario} alt=""/>
                        <article className="InfoAdmin">Nombre: Freddy</article>
                        <article className="InfoAdmin">Apellido: urbano</article>
                        <article className="InfoAdmin">Edad: 19</article>
                        <article className="InfoAdmin">correo: oquendoFredy@gmail.com</article>
                        <article className="InfoAdmin">Telefono: 3042945240</article>
                    </main>
                    <main className="Info2">
                        <article className="PerfilesAdmin">
                            <h1 className="Num">1<img class="ImgPerfilPeq" src={usuario} alt=""/></h1>
                            <h1 className="TexNameAdmi">Miguel</h1>
                        </article>
                        <article className="PerfilesAdmin">
                            <h1 className="Num">2<img class="ImgPerfilPeq" src={usuario} alt=""/></h1>
                            <h1 className="TexNameAdmi">Daniela</h1>
                        </article>
                        <article className="PerfilesAdmin">
                            <h1 className="Num">3<img class="ImgPerfilPeq" src={usuario} alt=""/></h1>
                            <h1 className="TexNameAdmi">Carlos</h1>
                        </article>
                        <article className="PerfilesAdmin OpcionSubrayada" >
                            <h1 className="Num">4<img class="ImgPerfilPeq" src={usuario} alt=""/></h1>
                            <h1 className="TexNameAdmi">Freddy</h1>
                        </article> 
                        <article className="PerfilesAdmin">
                            <h1 className="Num">5<img class="ImgPerfilPeq" src={usuario} alt=""/></h1>
                            <h1 className="TexNameAdmi">Josue</h1>
                        </article>
                    </main>
                </section>
            {/* </main> */}
        </>
    );
}
export default Administradores