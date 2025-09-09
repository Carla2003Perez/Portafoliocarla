import React from 'react';
import './css/inicio.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Inicio() {
    return(
        <div>
          
    
      <section id="servicios" className="servicios">
        <div className="container">
          <h2 className="mb-4">Estudios</h2>
          <div className="row">
          
            <div className="col-md-4">
              
              
              <ul className="timeline mt-4 pr-md-5">
                 <li>
                   <h5>Basicos</h5>
                   <div className="title">2016-2018</div>
                   <div className="details">
                    <p>Colegio Catolioco jesus Nazareno</p>
                    </div>
                  </li>
                   <li>
                   <h5>Diversificado</h5>
                   <div class="title">2019-2020</div>
                   <div class="details">
                    <p>Colegio Lic. Osmin Pineda Melgar</p>
                    </div>
                  </li>
                  <li>
                   <h5>Universidad</h5>
                   <div class="title">2021-2025</div>
                   <div class="details">
                    <p>10° ciclo - Ingeniería en Sistemas - UMG</p>
                    </div>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      </div>
      );
}
export default Inicio;