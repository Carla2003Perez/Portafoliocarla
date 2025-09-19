import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './owasp.css';
import Navowasp from "../navowasp";
import Plan from "../parte2/planpruebas";


function Owasp() {
  return (
  
  <div className="owasp-container">
    <Navowasp />
   <section className="bg-light py-5">
  
      <div className="container">
        <h1 className="owasp">OWASP TOP 10 DE RIESGOS DE SEGURIDAD</h1>
      </div>       

    </section>



      {/* 1 */}
      <section id="Acceso" className="container py-5">
        <h2  >1. Accesos de control rotos</h2>
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
      <section id="Criptografia" className="container py-5">
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
      <section id="Inyeccion" className="container py-5">
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

      <section id="Diseño" className="container py-5">
        <h2>4. Diseño inseguro</h2>
        <h3>¿Qué es?</h3>
        <p>
          Un diseño inseguro puede resultar en vulnerabilidades críticas que persisten durante toda la vida útil de la aplicación. Esto puede incluir la falta de autenticación adecuada, 
          autorización débil, almacenamiento inseguro de datos, entre otros. Un diseño eficiente puede permitir a los atacantes explotar fácilmente las debilidades del sistema.
        </p>
        <h3>¿Cómo prevenirlo?</h3>
        <ul className=''>
         
          <li>
            Se debe establecer un ciclo de desarrollo seguro, respaldado por profesionales especializados en seguridad de aplicaciones, con el fin de evaluar, diseñar e implementar estrategias
             de protección y controles orientados a la privacidad de los datos.
          </li>
          <li>
           Es fundamental crear y utilizar un catálogo de patrones de diseño seguros y componentes de camino pavimentado, previamente preparados para las implementaciones eficientes.
          </li>
          <li>
           El modelado de amenazas debe aplicarse sistemáticamente a flujos críticos, incluyendo autenticación, control de acceso, lógica de negocio y procesos clave.
          </li>
          <li>
           Los equipos de desarrollo deben escribir pruebas unitarias y de integración para validar la resistencia de los flujos críticos frente al modelo de amenazas, recopilando
            cuidadosamente casos de uso y casos de mal uso para cada capa de la aplicación.
          </li>
          
        </ul>
      </section>

      <section id="Configuracion" className="container py-5">
        
        <h2>5. Congirucación incorrecta de seguridad</h2>
        <h3>¿Qué es?</h3>
        <p>
          La falta de configuración adecuada de los sistemas y aplicaciones para 
          mitigar las vulnerabilidades conocidas se denomina como configuración incorrecta de seguridad. 
          Este tipo de falla puede permitir a los atacantes acceder a información confidencial, comprometan la integridad
           de los datos o lleven a cabo ataques más complejos.
        </p>
        <h3>¿Cómo prevenirlo?</h3>
        <ul>
         
          <li>
           <b>Endurecimiento repetible:</b> constituye un procedimiento que pueda ser replicado de forma rápida y eficiente de nuevos 
           entornos adecuadamente protegidos. Los entornos de desarrollo, pruebas y producción deben configurarse de forma idéntica,
           utilizando credenciales distintas para cada uno. 
          </li>
          <li>
           <b>Plataforma mínima:</b> el uso de una plataforma debe de operar sin funciones, componentes, documentación o ejemplos innecesarios. 
           Los profesionales deben eliminar o no instalar funciones y marcos que no se utilicen, manteniendo únicamente lo esencial para el funcionamiento del sistema.
          </li>
          <li>
            <b>Verificación automatizada:</b> Los equipos técnicos deben Implementar un proceso automatizado para verificar la efectividad de las configuraciones y ajustes en todos los entornos.
          </li>
          <li>
          <b> Directivas de seguridad:</b> es esencial enviar directivas de seguridad a los clientes, incluyendo encabezados de seguridad que protejan la integridad del sistema.
          </li>
          <li>
           <b>Arquitectura de aplicación segmentada:</b> garantiza una separación efectiva y segura entre componentes o usuarios, utilizando técnicas como segmentación, contenedores o grupos de seguridad en la nube (ACL).
          </li>
          <li>
           <b>Revisión y actualización de configuraciones:</b> Como parte del proceso de gestión de parches, es crucial realizar una tarea periódica para revisar y actualizar las configuraciones conforme a todas las notas de seguridad, actualizaciones y parches disponibles. 
          </li>

        </ul>
      </section>

      <section id="Vulnerables" className="container py-5">
        <h2>6. Componentes vulnerables y obsoletos</h2>
        <h3>¿Qué es?</h3>
        <p>
          Los componentes vulnerables y obsoletos son aquellos componentes de software en una aplicación que presentan vulnerabilidades conocidas o se encuentran desactualizados. Estos componentes pueden incluir bibliotecas de terceros, módulos, o incluso sistemas operativos subyacentes
        </p>
        <h3>¿Cómo prevenirlo?</h3>
        <ul>
          <li>
           Eliminar las dependencias no son utilizadas, funcionalidades, componentes, archivos y documentación innecesarios.
          </li>
          <li>
           Al obtener componentes, es fundamental recurrir únicamente a fuentes oficiales a través de enlaces seguros. Se recomienda priorizar paquetes firmados, ya que hay una posibilidad de incorporar
           componentes maliciosos que hayan sido modificados 
          </li>
          <li>
           La supervisión constante de bibliotecas y componentes es esencial, especialmente aquellos que carecen de
            mantenimiento activo o no generan parches de seguridad para versiones anteriores. 
          </li>
          
        </ul>
      </section>

      <section id="Identificacion" className="container py-5">
        <h2>7. Fallas de identificación y Autenticación </h2>
        <h3>¿Qué es?</h3>
        <p>
         La incapacidad de un sistema para verificar correctamente la identidad de un usuario y garantizar que solo los usuarios autorizados puedan acceder a recursos protegidos se conoce como fallas 
         de identificación y autenticación.
        </p>
        <h3>¿Cómo prevenirlo?</h3>
        <ul>
          <li>
           Siempre que sea posible, se debe implementar autenticación multifactor con el objetivo prevenir ataques automatizados de relleno de credenciales, fuerza bruta y reutilización de credenciales robadas
          </li>
          <li>
            Los procesos de registro, recuperación de credenciales y las rutas API deben estar fortalecidos contra ataques de enumeración de cuentas, utilizando mensajes para todos los resultados
          </li>
          <li>
           Se debe emplear un administrador de sesiones seguro y basado en el servidor, que genere un nuevo ID de sesión aleatorio con alta entropía tras el inicio de sesión
          </li>
          
        </ul>
      </section>

      <section id="Integridad" className="container py-5">
        <h2>8. Fallas de integridad de datos y software</h2>
        <h3>¿Qué es?</h3>
        <p>
         Las fallas de integridad de datos y software ocurren cuando un sistema no logra proteger adecuadamente la integridad de los datos almacenados o del propio software.
        </p>
        <h3>¿Cómo prevenirlo?</h3>
        <ul>
         <li>
           <b>Verificación de Firmas Digitales:</b> Es fundamental que las organizaciones garanticen que todo el software y las actualizaciones provengan de fuentes confiables y estén firmados digitalmente
            para verificar su autenticidad
          </li>
          <li>
           <b>Implementación de Controles de integridad:</b> Los equipos de seguridad deben utilizar hashes o firmas digitales para verificar la integridad de los archivos críticos antes de implementarlos en
            entornos de producción, minimizando así potenciales riesgos de manipulación.
          </li>
          <li>
            <b>Auditorias Regulares:</b>Es crucial realizar auditorías periódicas del software y los datos para detectar cualquier alteración no autorizada, estableciendo un protocolo sistemático de monitoreo
             y revisión continua
          </li>
          <li>
          <b> Control Estricto de la Cadena de Suminstro de software:</b> 
          Las organizaciones deben evaluar rigurosamente a todos los proveedores de software, asegurándose de que cumplan con las mejores prácticas de seguridad y mantengan estándares de calidad 
          que protejan la infraestructura tecnológica.
          </li>
        </ul>
      </section>

      <section id="Monitoreo" className="container py-5">
        <h2>9. Fallas de monitoreo y registro de seguridad </h2>
        <h3>¿Qué es?</h3>
        <p>
         La ausencia de un monitoreo efectivo puede permitir a los atacantes operar sin ser detectados, lo que conduciría a graves consecuencias para la seguridad y la integridad de la aplicación. 
         Estas vulnerabilidades pueden retrasar la detección y respuesta a incidentes de seguridad, haciendo que los atacantes operen durante más tiempo y causen un mayor daño
        </p>
        <h3>¿Cómo prevenirlo?</h3>
        <ul>
          <li>
           Se recomienda que los equipos de seguridad implementen estrategias exhaustivas para el registro de eventos críticos. Deben asegurar que todos los errores relacionados con inicio de sesión,
          control de acceso y validación de entradas de datos del lado del servido
          </li>
          <li>
           Es fundamental que los registros se generen en un formato que facilite su procesamiento por herramientas de gestión de registros, garantizando su utilidad y accesibilidad. Además, es crucial
            que los datos de los registros estén correctamente codificados para prevenir posibles inyecciones o ataques dirigidos al sistema de monitoreo.
          </li>
          <li>
           Para transacciones de alto valor, se debe implementar una traza de auditoría robusta con controles de integridad que impidan su modificación o eliminación
          </li>
          
        </ul>
      </section>

      <section id="Falsificacion" className="container py-5">
        <h2>10. Falsificación de solicitudes del lado del servidor </h2>
        <h3>¿Qué es?</h3>
        <p>
         La falsificación de solicitudes del lado del servidor surge cuando una aplicación web solicita recursos remotos sin validar las URLs proporcionadas por el usuario. Un atacante puede inducir a 
         los servidores web a realizar solicitudes a otros recursos en su nombre, permitiéndole acceder a recursos internos o externos que normalmente estarían fuera de su alcance.
        </p>
        <h3>¿Cómo prevenirlo?</h3>
        <ul>
          <li>
           El desarrollador debe sanitizar y validar meticulosamente todos los datos de entrada proporcionados por el cliente, garantizando su integridad y seguridad antes de procesarlos.
          </li>
          <li>
           Es fundamental implementar un esquema de control estricto para URL, puertos y destinos, utilizando una lista positiva de elementos permitidos que restrinja el acceso
          únicamente a recursos previamente autorizados.
          </li>
          <li>
            Es crucial evitar enviar respuestas en formato "crudo" a los clientes, priorizando la presentación de información procesada y estructurada que facilite su comprensión.
          </li>
          
        </ul>
      </section>

      
    
      <section  className="container py-5">
        <Plan />
      </section>

      <section id="Glosario" className="container py-5">
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

      <footer>
            <p> &copy; 2025,CARLAPEREZ</p>
            </footer>

    </div>
  );
}

   export default Owasp;