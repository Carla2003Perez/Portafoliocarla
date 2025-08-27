import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './owasp.css';
import { Link} from 'react-router-dom'; 

function Owasp() {
  return (
  
  <div className="owasp-container">
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top px-4">
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <p className="back-link"> 
          <Link to="/"><span className="material-symbols-outlined">arrow_back</span></Link>
        </p>
      </div>

    </nav>
    
    <section className="bg-light py-5">
      <div className="container">
        <h1>OWASP TOP 10 DE RIESGOS DE SEGURIDAD</h1>
      </div>
    </section> 

        <section className="bg-light py-5">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>|
        </section> 

      {/* 1 */}
      <section>
        <h2>1. Accesos de control rotos</h2>
        <h3>¿Qué es?</h3>
        <p>
          El control de acceso garantiza que los usuarios operen dentro de los
          límites de sus permisos. Una falla permite a usuarios no autorizados
          acceder, modificar o eliminar datos sensibles, con consecuencias como
          fuga de información o suplantación de identidad.
        </p>
        <h3>¿Cómo prevenirlo?</h3>
        <ul>
          <li>
            Implementar control de acceso impecable a nivel de dato (CRUD mínimo).
          </li>
          <li>
            Deshabilitar listado de directorios y bloquear acceso a archivos
            (.git, backups).
          </li>
          <li>
            Invalidar sesiones en el servidor al cerrar sesión; usar JWT de corta duración.
          </li>
        </ul>
      </section>

      {/* 2 */}
      <section>
        <h2>2. Fallas criptográficas</h2>
        <h3>¿Qué es?</h3>
        <p>
          Se producen por un uso incorrecto de algoritmos, claves débiles,
          aleatoriedad predecible o implementaciones inseguras.
        </p>
        <h3>¿Cómo prevenirlo?</h3>
        <ul>
          <li>Usar algoritmos confiables como RSA o ECC.</li>
          <li>Aplicar cifrado de extremo a extremo en comunicaciones.</li>
          <li>
            Implementar controles de acceso basados en roles y mínimo privilegio.
          </li>
          <li>
            Realizar pentesting periódico para detectar y corregir fallas.
          </li>
        </ul>
      </section>

      {/* 3 */}
      <section>
        <h2>3. Ataques de inyección</h2>
        <h3>¿Qué es?</h3>
        <p>
          Se insertan datos maliciosos en una aplicación a través de entradas
          inseguras, permitiendo ejecución de comandos arbitrarios.
        </p>
        <h3>¿Cómo prevenirlo?</h3>
        <ul>
          <li>Separar comandos de los datos.</li>
          <li>Usar consultas parametrizadas (SQL con parámetros).</li>
          <li>Emplear APIs seguras para eliminar intérpretes inseguros.</li>
          <li>
            Validación positiva en el servidor con detección de intrusiones.
          </li>
        </ul>
      </section>

      {/* … repetir igual hasta el punto 10 */}

      <section>
        <h2>Glosario</h2>
        <ul>
          <li>
            <strong>ACL:</strong> Lista que define qué usuarios o sistemas tienen
            permiso de acceso a recursos.
          </li>
          <li>
            <strong>Autenticación multifactor (MFA):</strong> Requiere más de un
            factor para verificar identidad.
          </li>
          <li>
            <strong>Criptografía:</strong> Técnica que protege información
            mediante algoritmos matemáticos.
          </li>
          <li>
            <strong>Pentesting:</strong> Simulación controlada de ataque para
            encontrar vulnerabilidades.
          </li>
          <li>
            <strong>Hash:</strong> Función criptográfica para verificar
            integridad de datos.
          </li>
          <li>
            <strong>Auditoría:</strong> Revisión de sistemas y procesos para
            cumplir políticas de seguridad.
          </li>
        </ul>
      </section>
    
      

    </div>
  );
}

   export default Owasp;