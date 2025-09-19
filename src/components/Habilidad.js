import React, { useEffect, useState } from "react";
import "./css/habilidades.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Habilidad() {
  const skills = [
    { label: "HTML & CSS", value: 60 },
    { label: "Postgresql", value: 50 },
    { label: "JavaScript", value: 40 },
    { label: "C#", value: 30 },
  ];

  const [animated, setAnimated] = useState(false);

  // Cuando el componente se monta, activa la animación
  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div>
      <section id="habilidades" className="container py-5">
        <h2>Habilidades</h2>
        {skills.map((skill, idx) => (
          <div key={idx} className="mb-3">
            <p className="mb-1">{skill.label}</p>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: animated ? `${skill.value}%` : "0%",
                  transition: "width 2s ease-in-out",
                }}
              >
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
