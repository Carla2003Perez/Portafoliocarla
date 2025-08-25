import React from 'react';
import './css/habilidades.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



function Habilidad() {
  
  return(
    <div>
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
      </div>
      );
}
export default Habilidad;