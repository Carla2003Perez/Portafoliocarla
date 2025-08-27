import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './owasp.css';
import { Link} from 'react-router-dom'; 
import Navowasp from "./navowasp";

function Owasp() {
  return (
  
  <div className="owasp-container">
   <section className="bg-light py-5">
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top px-7">
      
        <p className="back-link"> 
          <Link to="/"><i class="bi bi-arrow-left"></i></Link>
        </p>
    </nav>
  
    
      <div className="container">
        <h1>OWASP TOP 10 DE RIESGOS DE SEGURIDAD</h1>
      </div>
       <Navowasp />
    </section> 
    
  
    

      {/* 1 */}
      <section  className="container py-5">
        <h2  id="Acceso">1. Accesos de control rotos</h2>
        <h3>¿Qué es?</h3>
        <p>
          El control de acceso constituye un mecanismo fundamental para garantizar que los usuarios operen dentro
           de los límites de sus permisos asignados. Este tipo de falla en el control de acceso puede permitir que 
           usuarios no autorizados penetren sistemas, accedan a información confidencial, realicen acciones prohibidas
            o modifiquen datos sensibles. Las consecuencias pueden ser devastadoras, incluyendo la potencial filtración 
            de datos confidenciales, la modificación de información crítica o la usurpación de identidad para ejecutar acciones
             fraudulentas suplantando la identidad de usuarios legítimos.
        </p>
        <h3>¿Cómo prevenirlo?</h3>
        <ul>
          <li>
            El control de acceso debe implementar de manera impecable a nivel de dato, impidiendo que los usuarios puedan crear, leer,
             actualizar o eliminar cualquier dato.
          </li>
          <li>
           Es fundamental deshabilitar el listado de directorios del servidor web y asegurar de que los archivos de metadatos (.git) o
            archivos de respaldo no sean accedidos desde la raíz del sitio web.
          </li>
          <li>
            Los identificadores de sesiones deben ser invalidados en el servidor inmediatamente después de cerrar la sesión. Además,
             los tokens JWT deberían ser diseñarse con duraciones cortas para minimizar la ventana de oportunidad de posibles ataques
          </li>
        </ul>
      </section>

      {/* 2 */}
      <section id="Criptografia">
        <h2>2. Fallas criptográficas</h2>
        <h3>¿Qué es?</h3>
        <p>
          Las fallas criptográficas se refieren a problemas relacionados con el uso inadecuado o incorrecto 
          de algoritmos criptográficos, la generación de claves débiles, la generación de números aleatorios 
          que no son lo suficientemente impredecibles o la implementación incorrecta de funciones criptográficas 
          en una aplicación. 
        </p>
        <h3>¿Cómo prevenirlo?</h3>
        <ul>
          <li>Es fundamental utilizar algoritmos de cifrado de clave pública y privada, como RSA o ECC, que son 
            estándares de la industria altamente confiables.</li>
          <li>Los mecanismos de cifrado de extremo a extremo, son cruciales los datos desde el dispositivo del 
            usuario hasta el servidor de destino, impidiendo que la comunicación puede ser interceptada.</li>
          <li>
            Los controles de acceso basados en roles son esenciales para restringir el acceso a datos confidenciales.
             Una regla fundamental es implementar siempre accesos y roles bajo la necesidad de saber, y con el mínimo 
             privilegio posible.
          </li>
          <li>
            Realizar Pentesting periódicos para identificar y corregir fallas criptográficas, esta práctica debe incorporarse
             en los procesos de desarrollo, operación y mantención. No cabe duda de que invertir en un programa de ciberseguridad 
             es más económico que hacerte cargo de las consecuencias de un ataque.
          </li>
        </ul>
      </section>

      {/* 3 */}
      <section>
        <h2>3. Ataques de inyección</h2>
        <h3>¿Qué es?</h3>
        <p>
          son aquellos en los que se realiza la inserción de código malicioso en una aplicación a través de datos no confiables
          proporcionados por el usuario. Estos ataques son comunes en aplicaciones web y pueden surgir cuando la entrada del usuario
          no se filtra adecuadamente antes de ser utilizada por la aplicación. Las consecuencias de inyección pueden ser devastadoras,
          ya que permiten a los atacantes ejecutar comandos arbitrarios en el contexto de la aplicación
        </p>
        <h3>¿Cómo prevenirlo?</h3>
        <ul>
          <li>Separar los comandos de los datos: esta técnica puede ayudar a prevenir ataques que reemplazan datos con ejecución de comandos no autorizados. </li>
          <li>Consultas SQL de código con parámetros: en lugar de estructurar un comando solo a partir del contenido ingresado por el usuario, se recomienda utilizar consultas
             parametrizadas (también llamadas declaraciones preparadas).</li>
          <li>
            Eliminación del intérprete: se puede utilizar una API segura para eliminar el intérprete.
          </li>
          <li>Implementación de validación positiva del lado del servidor: se sugiere emplear esta técnica con un sistema de detección de intrusiones para identificar comportamientos 
            sospechosos del lado del cliente.</li>
        </ul>
      </section>

      <section>
        <h2>4. Diseño inseguro</h2>
        <h3>¿Qué es?</h3>
        <p>
          Un diseño inseguro puede resultar en vulnerabilidades críticas que persisten durante toda la vida útil de la aplicación. Esto puede incluir la falta de autenticación adecuada, 
          autorización débil, almacenamiento inseguro de datos, entre otros. Un diseño eficiente puede permitir a los atacantes explotar fácilmente las debilidades del sistema.
        </p>
        <h3>¿Cómo prevenirlo?</h3>
        <ul>
         
          <li>
            Se debe establecer un ciclo de desarrollo seguro, respaldado por profesionales especializados en seguridad de aplicaciones, con el fin de evaluar, diseñar e implementar estrategias
             de protección y controles orientados a la privacidad de los datos.
          </li>
          <li>
           
          </li>
          
        </ul>
      </section>

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