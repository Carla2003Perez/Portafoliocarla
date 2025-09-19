import React from "react";
import "../Tarea1/Navowasp.css";

function Navprueba() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    const navbarHeight = 70; // altura del header si lo necesitas
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionTop - navbarHeight, behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar-container">
      <div className="nav-center">
        <button
          className="back-button"
          onClick={() => window.history.back()}
          aria-label="Volver"
        >
          <i className="bi bi-arrow-left"></i>
        </button>
      </div>

      {/* Menú directo con Introducción */}
      <div className="nav-left">
        <ul className="navbar-menu">
          <li className="menu-item">
            <button className="menu-button active-part" 
            onClick={() => handleScroll("Introduccion")}> Introducción</button>
            <button className="menu-button active-part" 
            onClick={() => handleScroll("Funcionales")}> Pruebas Funcionales</button>
            <button className="menu-button active-part" 
            onClick={() => handleScroll("Rendimiento")}> Pruebas Rendimiento</button>
            <button className="menu-button active-part" 
            onClick={() => handleScroll("Seguridad")}> Pruebas Seguridad</button>
            <button className="menu-button active-part" 
            onClick={() => handleScroll("Conclusion")}> Conclusion</button>
            <button className="menu-button active-part" 
            onClick={() => handleScroll("Recomendaciones")}> Recomendaciones</button>
            <button className="menu-button active-part" 
            onClick={() => handleScroll("Bibliografia")}> Bibliografía</button>
            <button className="menu-button active-part" 
            onClick={() => handleScroll("Anexos")}> Anexos</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navprueba;
