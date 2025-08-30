import React, { useState } from "react";
import "./Navowasp.css";

function Navowasp() {
  const [openDropdown, setOpenDropdown] = useState(null); // "primera", "segunda" o null

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    const navbarHeight = 70;
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionTop - navbarHeight,
        behavior: "smooth",
      });

      setOpenDropdown(null); // cerrar después de click
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Dropdown Primera Parte */}
        <div className="dropdown-container">
          <button
            className="dropdown-toggle"
            onClick={() => toggleDropdown("primera")}
          >
            Primera Parte
          </button>

          <ul className={`dropdown-menu ${openDropdown === "primera" ? "show" : ""}`}>
            <li><button onClick={() => handleScroll("Acceso")}>1. Accesos de control rotos</button></li>
            <li><button onClick={() => handleScroll("Criptografia")}>2. Fallas criptográficas</button></li>
            <li><button onClick={() => handleScroll("Inyeccion")}>3. Ataques de inyección</button></li>
            <li><button onClick={() => handleScroll("Diseño")}>4. Diseño inseguro</button></li>
            <li><button onClick={() => handleScroll("Configuracion")}>5. Configuración incorrecta de seguridad</button></li>
            <li><button onClick={() => handleScroll("Vulnerables")}>6. Componentes vulnerables y obsoletos</button></li>
            <li><button onClick={() => handleScroll("Identificacion")}>7. Fallas de identificación y Autenticación</button></li>
            <li><button onClick={() => handleScroll("Integridad")}>8. Fallas de integridad de datos y software</button></li>
            <li><button onClick={() => handleScroll("Monitoreo")}>9. Fallas de monitoreo y registro de seguridad</button></li>
            <li><button onClick={() => handleScroll("Falsificacion")}>10. Falsificación de solicitudes del lado del servidor</button></li>
          </ul>
        </div>

        {/* Dropdown Segunda Parte */}
        <div className="dropdown-container">
          <button
            className="dropdown-toggle"
            onClick={() => toggleDropdown("segunda")}
          >
            Segunda Parte
          </button>

          <ul className={`dropdown-menu ${openDropdown === "segunda" ? "show" : ""}`}>
            <li><button onClick={() => handleScroll("Plan")}>¿Qué son los Planes de Prueba? s</button></li>
            <li><button onClick={() => handleScroll("")}>¿Qué son los Casos de Prueba?</button></li>
            <li><button onClick={() => handleScroll("")}>Ejemplos</button></li>
            <li><button onClick={() => handleScroll("")}>Plan de Pruebas para un Catálogo </button></li>
            <li><button onClick={() => handleScroll("")}>Glosario</button></li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navowasp;
