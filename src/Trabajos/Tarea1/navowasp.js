import React, { useState } from "react";
import "./Navowasp.css";

function Navowasp() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    const navbarHeight = 70; // altura del header si lo necesitas
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionTop - navbarHeight, behavior: "smooth" });
      setOpenMenu(null);
    }
  };

  return (
    <nav className="navbar-container">
      {/* centro: botón volver */}
      <div className="nav-center">
        <button
          className="back-button"
          onClick={() => window.history.back()}
          aria-label="Volver"
        >
          <i className="bi bi-arrow-left"></i>
        </button>
      </div>

      {/* izquierda: sidebar con menú */}
      <div className="nav-left ">
        <ul className="navbar-menu ">
          {/* Primera Parte */}
          <li className={`menu-item ${openMenu === "primera" ? "open" : ""}`}>
            <button
              className="menu-button active-part"
              onClick={() => toggleMenu("primera")}
            >
              Primera Parte <span className="arrow">▾</span>
            </button>
            <ul className={`submenu ${openMenu === "primera" ? "show" : ""}`}>
              <button onClick={() => handleScroll("Acceso")}>1. Accesos de control rotos</button>
              <button onClick={() => handleScroll("Criptografia")}>2. Fallas criptográficas</button>
              <button onClick={() => handleScroll("Inyeccion")}>3. Ataques de inyección</button>
              <button onClick={() => handleScroll("Diseño")}>4. Diseño inseguro</button>
              <button onClick={() => handleScroll("Configuracion")}>5. Configuración incorrecta de seguridad</button>
              <button onClick={() => handleScroll("Vulnerables")}>6. Componentes vulnerables y obsoletos</button>
              <button onClick={() => handleScroll("Identificacion")}>7. Fallas de identificación y Autenticación</button>
              <button onClick={() => handleScroll("Integridad")}>8. Fallas de integridad de datos y software</button>
              <button onClick={() => handleScroll("Monitoreo")}>9. Fallas de monitoreo y registro de seguridad</button>
              <button onClick={() => handleScroll("Falsificacion")}>10. Falsificación de solicitudes del lado del servidor</button>
            </ul>
          </li>

          {/* Segunda Parte */}
          <div className={`menu-item ${openMenu === "segunda" ? "open" : ""}`}>
            <button
              className="menu-button active-part"
              onClick={() => toggleMenu("segunda")}
            >
              Segunda Parte <span className="arrow">▾</span>
            </button>
            <ul className={`submenu ${openMenu === "segunda" ? "show" : ""}`}>
              <button onClick={() => handleScroll("Plan")}>¿Qué son los Planes de Prueba?</button>
              <button onClick={() => handleScroll("Casos")}>¿Qué son los Casos de Prueba?</button>
              <button onClick={() => handleScroll("Ejemplos")}>Ejemplos</button>
              <button onClick={() => handleScroll("Catalogo")}>Plan de Pruebas para un Catálogo</button>
              <button onClick={() => handleScroll("Glosario")}>Glosario</button>
            </ul>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navowasp;
