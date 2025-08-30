import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/inicio.css';
import compu from './image/foto-inicio.png';

function Navbar() {
  const [activeLink, setActiveLink] = useState("inicio"); // Estado del link activo

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top px-4">
        <a className="navbar-brand fw-bold" href="#inicio">Mi Portafolio</a>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3">
            {["inicio", "servicios", "habilidades", "trabajos", "glosario"].map((link) => (
              <li className="nav-item" key={link}>
                <a
                  href={`#${link}`}
                  className={`nav-link text-white ${activeLink === link ? "active-link" : ""}`}
                  onClick={() => handleClick(link)}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section id="inicio" className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>
              <img src="https://media.giphy.com/media/ObNTw8Uzwy6KQ/giphy.gif" width="30" alt="" /> Bienvenido
            </h2>
            <p>👋 Soy una estudiante de la Universidad Mariano Gálvez, actualmente en el décimo ciclo y emocionada por compartir mis proyectos.</p>
            <button className="btn btn-primary mt-3">Descargar CV</button>
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
