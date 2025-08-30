import { Link } from "react-router-dom";
import './css/trabajos.css'
import Owas from './image/owas.webp'
import Prueba from './image/tipos-prueba.webp'
function Trabajos() {

  return (
    <section id="trabajos" className="trabajos">
      <div className="container">
        <h2 className="mb-4">Mis Trabajos</h2>
        
        <div className="row">
          {/* Primer card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img src={Owas} className="card-img-top" alt="Primera tarea" />
              <div className="card-body">
                <h5 className="card-title">Guia de Owasp</h5>
                <Link to="/primer" className="btn btn-primary">Ingresar</Link>
              </div>
            </div>
          </div>

          {/* Segundo card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img src={Prueba} className="card-img-top" alt="Segunda tarea" />
              <div className="card-body">
                <h5 className="card-title">Tipos de pruebas</h5>
                
                <Link to="/segundo" className="btn btn-primary">Ingresar</Link>
              </div>
            </div>
          </div>

          {/* Tercer card 
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="Tercera tarea" />
              <div className="card-body">
                <h5 className="card-title">Pruebas</h5>
                <p className="card-text">
                  Aquí podrías describir brevemente de qué se trata tu tarea.
                </p>
                <Link to="/primer" className="btn btn-primary">Ingresar</Link>
              </div>
            </div>
          </div>*/}
        </div>

      </div>
    </section>
  );
}

export default Trabajos;
