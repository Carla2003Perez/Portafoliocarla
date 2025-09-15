import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/inicio.css';
import carla from "./image/carla.jpg"

function Navbar() {
  const [activeLink, setActiveLink] = useState("inicio"); 

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md fixed-top px-4">
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

    <section id="inicio" className="inicio">
         <div className="container py-5 ">
      <div className="row">
        <div className="col-lg-4 py-3">
          <div className="img-place wow fadeInUp">
            <img src={carla}alt="Foto perfil" className="img-fluid rounded mb-3" />
          </div>
        </div>
        <div className="col-lg-6 offset-lg-1 wow fadeInRight">
          <h1 className="fw-light">Carla Renee Perez suriano</h1>
         
          <p className="text-muted">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form but the majority have suffered alteration in some</p>
          <ul className="theme-list">
            <li className="list-group-item"><strong>Nombre:</strong> Carla Reneé Pérez Suriano</li>
                <li className="list-group-item"><strong>Edad:</strong> 21</li>
                <li className="list-group-item"><strong>Fecha de nacimiento:</strong> 17 de Octubre 2003</li>
                <li className="list-group-item"><strong>Género:</strong> Femenino</li>
                <li className="list-group-item"><strong>Ciudad:</strong> Santa Rosa, Guatemala</li>
                <li className="list-group-item"><strong>Email:</strong> surianoc79@gmail.com</li>
                <li className="list-group-item"><strong>Teléfono:</strong> 4223-8102</li>
          </ul>
          <button 
          className="btn btn-theme-outline"
          onClick={() => {
             const link = document.createElement("a");
             link.href = "/CV.pdf"; 
             link.download = "Carla_Perez.pdf";
             link.click();
  }}
          >Download CV</button>
        </div>
      </div>
    
            
          </div>
      </section>
    </div>
  );
}

export default Navbar;
