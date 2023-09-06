import React from 'react';
import playstore from './img/playstore.svg'
import qr from './img/qr.svg'
import celular1 from './img/cel1.svg'
import rectangulo1 from './img/Group 100 (1).svg'
import celular2 from './img/cel2.svg'
import rectangulo2 from './img/2.rectangulo.svg'
import servicio1 from './img/servicio_1.png'
import servicio2 from './img/servicio_2.png'
import servicio3 from './img/servicio_3.png'
import servicio4 from './img/servicio_4.png'
import servicio5 from './img/servicio_5.png'
import foto_creador from './img/foto_creadores.png'

function Landing() {
  return (
    <div>
      <header>
        <nav className="botones">
          <a className="referencia" href="">
            <button className="boton_1 boton">Registrarse</button>
          </a>
          <a className="referencia" href="">
            <button className="boton_2 boton">Iniciar sesión</button>
          </a>
        </nav>
      </header>

      <nav id="menu" className="menu_1">
        <h4>Menu</h4>
      </nav>

      <main id="contenido">
        <section id="lado_izquierdo">
          <h1 className="titulo">PetRide</h1>
          <p className="eslogan">
            ¡Con nuestra aplicación, encontrarás al paseador de perros perfecto para tu mejor amigo en cuestión de minutos!
          </p>
          <nav className="descargar">
            <img className="playstore" src={playstore} alt="" />
          </nav>
          <section className="codigo_qr">
            <img className="qr" src={qr} alt="" />
          </section>
        </section>

        <aside id="lado_derecho">
          <section className="celular_1">
            <img className="celular" src={celular1} alt="" />
          </section>
          <nav className="rectangulo">
            <img className="rectangulo_img" src={rectangulo1} alt="" />
          </nav>
        </aside>
      </main>

      <main id="contenido_2">
        <section id="lado_izquierdo_2">
          <nav className="celular_2">
            <img className="celular" src={celular2} alt="" />
          </nav>
          <nav className="rectangulo_2">
            <img className="rectangulo_2_img" src={rectangulo2} alt="" />
          </nav>
        </section>

        <aside id="lado_derecho_2">
          <h1 className="sobre_la_app">Sobre Nuestra App</h1>
          <p className="text app">Una aplicación móvil que permita a los dueños de mascotas programar paseos seguros y confiables para sus animales de compañía. La aplicación se centrará en brindar una interfaz intuitiva y amigable tanto para los dueños de mascotas como para los paseadores. Incluirá características como registro y certificación de paseadores, programación de paseos personalizables, seguimiento en tiempo real, sistema de retroalimentación y reseñas, y medidas sólidas de seguridad de datos. También incluirá ubicaciones de veterinarias y tiendas de mascotas cercanas a su ubicación.</p>
        </aside>
      </main>

      <main id="contenido_3">
        <section id="lado_izquierdo_3">
          <h1 className="nuestros_servicios">Nuestros Servicios</h1>
          <section className="servicios">
            <nav className="servicio_1">
              <img className="servicio_img" src={servicio1} alt="" />
              <p className="text">Paseo de mascotas programado y en tiempo real</p>
            </nav>
            <nav className="servicio_2">
              <img className="servicio_img" src={servicio2} alt="" />
              <p className="text">Servicio conveniente a tu puerta</p>
            </nav>
            <nav className="servicio_1">
              <img className="servicio_img" src={servicio3} alt="" />
              <p className="text">Seguimiento en tiempo real</p>
            </nav>
            <nav className="servicio_2">
              <img className="servicio_img" src={servicio4} alt="" />
              <p className="text">Ubicación de veterinarias y tiendas de mascotas cercanas</p>
            </nav>
            <nav className="servicio_1">
              <img className="servicio_img" src={servicio5} alt="" />
              <p className="text">Personalización de paseos</p>
            </nav>
          </section>
        </section>
      </main>

      <main id="contenido_4">
        <section id="vista_4">
          <h1 className="equipo_trabajo_titulo">Nuestro Equipo de Trabajo</h1>
          <section className="equipo">
            <nav className="equipo_contenido">
              <img className="img_equipo" src={foto_creador} alt="" />
              <p className="text">Miguel Eduardo Nuñez</p>
            </nav>
            <nav className="equipo_contenido_2">
              <img className="img_equipo" src={foto_creador} alt="" />
              <p className="text">Vicky Daniela Guerrero</p>
            </nav>
            <nav className="equipo_contenido">
              <img className="img_equipo" src={foto_creador} alt="" />
              <p className="text">Josue Miguel Chaguendo</p>
            </nav>
            <nav className="equipo_contenido_2">
              <img className="img_equipo" src={foto_creador} alt="" />
              <p className="text">Carlos Eduardo Delgado</p>
            </nav>
            <nav className="equipo_contenido">
              <img className="img_equipo" src={foto_creador} alt="" />
              <p className="text">Fredy Andres Urbano</p>
            </nav>
          </section>
        </section>
      </main>
    </div>
  );
}

export default Landing;
