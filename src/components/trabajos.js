import { Link } from "react-router-dom";
import './css/trabajos.css'

function Trabajos() {

  return (
    <section id="trabajos" className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4">Mis Trabajos</h2>
    <div className="row align-items-center trabajos-section">
      <div className="col-md-6">
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="Primera tarea" />
          <div className="card-body">
            <h5 className="card-title">Primera tarea</h5>
            <p className="card-text">
              Aquí podrías describir brevemente de qué se trata tu tarea.
            </p>
            <Link to="/primer" className="btn btn-primary">
              Ingresar
            </Link>
          </div>
        </div>
      
      </div>
      
    </div>
    </div>
    </section>

  );
}

export default Trabajos;
