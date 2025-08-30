import React from 'react';
import './css/inicio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import carla from "./image/carla.jpg"

function Inicio() {
    return(
        <div>
          
    
      <section id="servicios" className="servicios">
        <div className="container">
          <h2 className="mb-4">Datos Personales</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <img src={carla}alt="Foto perfil" className="img-fluid rounded mb-3" />
            </div>
            <div className="col-md-4">
              <h5>Información Personal</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Nombre:</strong> Carla Reneé Pérez Suriano</li>
                <li className="list-group-item"><strong>Edad:</strong> 21</li>
                <li className="list-group-item"><strong>Fecha de nacimiento:</strong> 17 de Octubre 2003</li>
                <li className="list-group-item"><strong>Género:</strong> Femenino</li>
                <li className="list-group-item"><strong>Ciudad:</strong> Santa Rosa, Guatemala</li>
                <li className="list-group-item"><strong>Email:</strong> surianoc79@gmail.com</li>
                <li className="list-group-item"><strong>Teléfono:</strong> 4223-8102</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Estudios</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Básico (2016-2018):</strong> Colegio Católico Jesús Nazareno</li>
                <li className="list-group-item"><strong>Diversificado (2019-2020):</strong> Colegio Lic. Osmin Pineda Melgar</li>
                <li className="list-group-item"><strong>Universidad (2025):</strong> 9° ciclo - Ingeniería en Sistemas - UMG</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      </div>
      );
}
export default Inicio;