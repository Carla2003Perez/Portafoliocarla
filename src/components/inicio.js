import React from 'react';
import '../css/cartapa.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



function Inicio() {
    return(
        <div>
       <section id="inicio" className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>
              <img src="https://media.giphy.com/media/ObNTw8Uzwy6KQ/giphy.gif" width="30" alt="" /> Bienvenido
            </h2>
            <p>👋 Soy una estudiante de la Universidad Mariano Gálvez, actualmente en el octavo ciclo y emocionada por compartir mi camino como desarrolladora junior 👩‍💻.</p>
            <a href="index.html" className="btn btn-primary mt-3">Descargar CV</a>
          </div>
          <div className="col-md-6 text-center">
            <img src="Image/foto-inicio.png" alt="Foto de perfil" className="img-fluid rounded" />
          </div>
        </div>
      </section>

    
      <section id="servicios" className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4">Datos Personales</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <img src="Image/unnamed.jpg" alt="Foto perfil" className="img-fluid rounded mb-3" />
            </div>
            <div className="col-md-4">
              <h5>Información Personal</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Nombre:</strong> Carla Reneé Pérez Suriano</li>
                <li className="list-group-item"><strong>Edad:</strong> 20</li>
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
                <li className="list-group-item"><strong>Universidad (2024):</strong> 8° ciclo - Ingeniería en Sistemas - UMG</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      </div>
      );
}
export default Inicio;