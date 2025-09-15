
import "./css/inicio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Inicio() {

  return (
    <div>
      {/* SECCION ESTUDIOS + HABILIDADES */}
      <section className="container py-5">
        <div className="row">
          {/* Columna izquierda: Estudios */}
          <div className="col-lg-6">
            <h2 className="mb-4">Estudios</h2>
            <ul className="timeline mt-4 pr-md-5">
              <li>
                <h5>Básicos</h5>
                <div className="title">2016-2018</div>
                <div className="details">
                  <p>Colegio Católico Jesús Nazareno</p>
                </div>
              </li>
              <li>
                <h5>Diversificado</h5>
                <div className="title">2019-2020</div>
                <div className="details">
                  <p>Colegio Lic. Osmin Pineda Melgar</p>
                </div>
              </li>
              <li>
                <h5>Universidad</h5>
                <div className="title">2021-2025</div>
                <div className="details">
                  <p>10° ciclo - Ingeniería en Sistemas - UMG</p>
                </div>
              </li>
            </ul>
          </div>

         
          <div className="col-lg-6">
            <h2 className="mb-4">Experiencia Laboral</h2>
            <ul className="timeline mt-4 pr-md-5">
              <li>
               
                <div className="title">2022</div>
                <div className="details">
                  <p>Maestro de computación, Instituto Federico Morales Pivaral</p>
                </div>
              </li>
              <li>
               
                <div className="title">2024</div>
                <div className="details">
                  <p>Maestra de computación, Telesecundaria Astillero</p>
                </div>
              </li>
              <li>
                
                <div className="title">2025</div>
                <div className="details">
                  <p>Maestra de computación, Telecndaria Astillero</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
