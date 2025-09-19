import { useState } from "react";
import { Link } from "react-router-dom";
import "./css/trabajos.css";
import OwasImag from "./image/owasp.jfif";
import PruebaImag from "./image/tipos-prueba.webp";

function Trabajos() {
  const trabajos = [
    { id: 1, titulo: "Guía de Owasp", img: OwasImag, link: "/Primer" },
    { id: 2, titulo: "Tipos de pruebas", img: PruebaImag, link: "/Prueba" },
    { id: 3, titulo: "Pruebas", img: "https://via.placeholder.com/300x200", link: "/tercer" },
  ];

  const Pdf = [
    { id: 1, file: "/pdfs/Tarea 3 Guia OWASP.pdf" },
    { id: 2, file: "/pdfs/Tarea 4 tipos de prueba.pdf" },
    { id: 3, file: "/PruebasGenerales.pdf" },
  ];

  const [paginaActual, setPaginaActual] = useState(1);
  const itemsPorPagina = 3;

  const indexUltimo = paginaActual * itemsPorPagina;
  const indexPrimero = indexUltimo - itemsPorPagina;
  const trabajosVisibles = trabajos.slice(indexPrimero, indexUltimo);

  const totalPaginas = Math.ceil(trabajos.length / itemsPorPagina);

  const irPagina = (num) => setPaginaActual(num);
  const siguiente = () => paginaActual < totalPaginas && setPaginaActual(paginaActual + 1);
  const anterior = () => paginaActual > 1 && setPaginaActual(paginaActual - 1);

  const handleDownload = (id) => {
    const doc = Pdf.find((p) => p.id === id);
    if (!doc) return;
    const link = document.createElement("a");
    link.href = doc.file;
    link.download = doc.file.split("/").pop();
    link.click();
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
                  <div className="d-flex gap-2">
                    <Link to={trabajo.link} className="btn btn-primary">
                      Ingresar
                    </Link>
                    <button
                      className="btn btn-success"
                      onClick={() => handleDownload(trabajo.id)}
                    >
                      Descargar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

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
