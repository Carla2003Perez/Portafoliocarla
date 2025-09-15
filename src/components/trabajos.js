import { useState } from "react";
import { Link } from "react-router-dom";
import "./css/trabajos.css";
import Owas from "./image/owasp.jfif";
import Prueba from "./image/tipos-prueba.webp";

function Trabajos() {
  // Lista de trabajos
  const trabajos = [
    { id: 1, titulo: "Guía de Owasp", img: Owas, link: "/primer" },
    { id: 2, titulo: "Tipos de pruebas", img: Prueba, link: "/segundo" },
    { id: 3, titulo: "Pruebas", img: "https://via.placeholder.com/300x200", link: "/tercer" },
    { id: 4, titulo: "Trabajo 4", img: "https://via.placeholder.com/300x200", link: "/cuarto" },
    { id: 5, titulo: "Trabajo 5", img: "https://via.placeholder.com/300x200", link: "/quinto" },
    { id: 6, titulo: "Trabajo 6", img: "https://via.placeholder.com/300x200", link: "/sexto" },
  ];

  // Estado para la paginación
  const [paginaActual, setPaginaActual] = useState(1);
  const itemsPorPagina = 3;

  // Calcular items visibles
  const indexUltimo = paginaActual * itemsPorPagina;
  const indexPrimero = indexUltimo - itemsPorPagina;
  const trabajosVisibles = trabajos.slice(indexPrimero, indexUltimo);

  const totalPaginas = Math.ceil(trabajos.length / itemsPorPagina);

  // Funciones de navegación
  const irPagina = (num) => setPaginaActual(num);
  const siguiente = () => {
    if (paginaActual < totalPaginas) setPaginaActual(paginaActual + 1);
  };
  const anterior = () => {
    if (paginaActual > 1) setPaginaActual(paginaActual - 1);
  };

  return (
    <section id="trabajos" className="trabajos">
      <div className="container">
        <h2 className="mb-4">Mis Trabajos</h2>

        <div className="row">
          {trabajosVisibles.map((trabajo) => (
            <div key={trabajo.id} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <img src={trabajo.img} className="card-img-top" alt={trabajo.titulo} />
                <div className="card-body">
                  <h5 className="card-title">{trabajo.titulo}</h5>
                  <Link to={trabajo.link} className="btn btn-primary">
                    Ingresar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Paginación estilo Bootstrap */}
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${paginaActual === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={anterior}>
                Previous
              </button>
            </li>

            {Array.from({ length: totalPaginas }, (_, i) => (
              <li key={i + 1} className={`page-item ${paginaActual === i + 1 ? "active" : ""}`}>
                <button className="page-link" onClick={() => irPagina(i + 1)}>
                  {i + 1}
                </button>
              </li>
            ))}

            <li className={`page-item ${paginaActual === totalPaginas ? "disabled" : ""}`}>
              <button className="page-link" onClick={siguiente}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Trabajos;
