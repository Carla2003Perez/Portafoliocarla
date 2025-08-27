import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/inicio.css';
import compu from './image/foto-inicio.png';

function Navbar() {
  return (
    <div>
      
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top px-4">
      <a className="navbar-brand fw-bold" href="#inicio">Mi Portafolio</a>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav gap-3">
          <li className="nav-item">
            <a className="nav-link text-white" href="#inicio">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#servicios">Acerca de</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#habilidades">Habilidades</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#trabajos">Trabajos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#glosario">Glosario</a>
          </li>
          
        </ul>
      </div>

    </nav>
    <section id="inicio" className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>
              <img src="https://media.giphy.com/media/ObNTw8Uzwy6KQ/giphy.gif" width="30" alt="" /> 
              Bienvenido
            </h2>
            <p>👋 Soy una estudiante de la Universidad Mariano Gálvez, actualmente en el decimo ciclo y emocionada por compartir mis proyectos.</p>
            <button className="btn btn-primary mt-3" >Descargar CV</button>
          </div>
          <div className="col-md-6 text-center">
            <img src={compu} alt="Foto de perfil" className="img-fluid rounded" />
          </div>
        </div>
      </section>

     </div>
  );
}

export default Navbar;
