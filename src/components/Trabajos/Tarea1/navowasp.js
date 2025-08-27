import React, { useState } from "react";
import "./Navowasp.css";

function Navowasp() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    const navbarHeight= 70;
    if (section) {
       // posición de la sección relativa al top del documento
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    // scroll compensando la navbar
    window.scrollTo({
      top: sectionTop - navbarHeight,
      behavior: "smooth"
    });

      setIsDropdownOpen(false); // cerrar dropdown al seleccionar
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
      

        {/* Dropdown */}
        <div className="dropdown-container">
          <button
            className="dropdown-toggle"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Temas
          </button>

          <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
            <li>
              <button onClick={() => handleScroll("Acceso")}>
                1. Accesos de control rotos
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll("Criptografia")}>
                2. Fallas criptográficas
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll("Inyeccion")}>
                3. Ataques de inyección
              </button>
            </li>
            {/* Agrega más items según tus secciones */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navowasp;
