import React from 'react';
import '../css/cartapa.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Cartapa() {
  return (
    <div>
     

      {/* Sección de Bienvenida */}
      <section id="inicio" className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>
              <img src="https://media.giphy.com/media/ObNTw8Uzwy6KQ/giphy.gif" width="30" alt="" /> Bienvenido
            </h2>
            <p>👋 Soy una estudiante de la Universidad Mariano Gálvez, actualmente en el octavo ciclo y emocionada por compartir mi camino como desarrolladora junior 👩‍💻.</p>
            <a href="index.html" className="btn btn-primary mt-3">Regresar</a>
          </div>
          <div className="col-md-6 text-center">
            <img src="Image/foto-inicio.png" alt="Foto de perfil" className="img-fluid rounded" />
          </div>
        </div>
      </section>

      {/* Acerca de */}
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

      {/* Habilidades */}
      <section id="habilidades" className="container py-5">
        <h2>Habilidades</h2>
        {[
          { label: 'HTML & CSS', value: 60 },
          { label: 'MySQL', value: 70 },
          { label: 'JavaScript', value: 50 },
          { label: 'C#', value: 90 }
        ].map((skill, idx) => (
          <div key={idx} className="mb-3">
            <p className="mb-1">{skill.label}</p>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: `${skill.value}%` }}>
                {skill.value}%
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Trabajos */}
      <section id="trabajos" className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4">Mis Trabajos</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100">
                <img src="Image/UMG.jpg" className="card-img-top" alt="Trabajo 1" />
                <div className="card-body">
                  <h5 className="card-title">Título del Trabajo</h5>
                  <p className="card-text"><span className="badge bg-secondary me-2">HTML</span><span className="badge bg-secondary me-2">CSS</span><span className="badge bg-secondary">JavaScript</span></p>
                  <a href="#" className="btn btn-outline-primary mt-2">Ver Trabajo</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100">
                <img src="Image/foto-inicio.png" className="card-img-top" alt="Trabajo 2" />
                <div className="card-body">
                  <h5 className="card-title">Título del Trabajo</h5>
                  <p className="card-text"><span className="badge bg-secondary me-2">HTML</span><span className="badge bg-secondary me-2">CSS</span><span className="badge bg-secondary">JavaScript</span></p>
                  <a href="#" className="btn btn-outline-primary mt-2">Ver Trabajo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="container py-5">
        <h2>Contacto</h2>
        <div className="row">
          <div className="col-md-6">
            <p><strong>Email:</strong> surianoc79@gmail.com</p>
            <p><strong>Teléfono:</strong> +502 4223-8102</p>
            <p><strong>País:</strong> Guatemala</p>
            <p><strong>Ciudad:</strong> Guazacapán, Santa Rosa</p>
          </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Nombre..." />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Correo..." />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="5" placeholder="Mensaje..."></textarea>
              </div>
              <input type="submit" value="Enviar" className="btn btn-success" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cartapa;
