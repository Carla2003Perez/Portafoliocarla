import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/cartapa.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top px-4">
      <a className="navbar-brand fw-bold" href="#inicio">Mi Portafolio</a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

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
            <a className="nav-link text-white" href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
