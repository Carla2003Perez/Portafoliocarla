import 'bootstrap/dist/css/bootstrap.min.css';
import pruebas from "./pruebas.png"
import casos from "./casos.png"
function Plan() {
  return (
  
  <div className="plan-container">
   <section id="Plan" className="container py-5">
    
      <section className="py-5">
  
      
        <h1>Segunda parte </h1>
         
       

    </section>
    <h2>¿Qué son los Planes de Prueba?</h2>
        
        <p>
          El Plan de pruebas describe el alcance, el enfoque, los recursos y el cronograma de todas las actividades de prueba. 
          Identifica los elementos y características que se van a probar, es decir, los tipos de pruebas. Contiene una estrategia
           detallada y ejecutable para la realización. Define el objetivo detallado de la prueba, específico de un sistema en particular,
         el enfoque de prueba, el entorno de prueba, las condiciones de prueba y el plan de prueba
        </p>

    <h2>¿Qué son los Casos de Prueba?</h2>
        
        <p>
          Es un conjunto de condiciones o variables bajo las cuales se determinará si una aplicación, un sistema de software o una característica o comportamiento de estos resulta o no aceptable.
           Se pueden realizar muchos casos de prueba para determinar que un requisito es completamente satisfactorio. Con el propósito de comprobar que todos los requisitos de una aplicación son revisados, 
           debe haber al menos un caso de prueba para cada requisito a menos que un requisito tenga requisitos secundarios. 
        </p>
        
    </section> 

    <section id="Ejemplos">
        <h1>Ejemplos</h1>
        <h2>plan de pruebas</h2>
         <div className="img-place wow fadeInUp">
            <img src={pruebas}alt="Foto perfil" className="img-fluid rounded mb-3" />
          </div>
        <p>
          
        </p>

    <h2> Casos de Prueba</h2>
        
        <p>
           <div className="img-place wow fadeInUp">
            <img src={casos}alt="Foto perfil" className="img-fluid rounded mb-3" />
          </div>
        </p>
        
    </section> 

    <section id="Casos" className="container py-5">
      <h2>Plan de Pruebas para un Catálogo</h2>

      {/* Objetivo */}
      <div className="mt-4">
        <h3>Objetivo</h3>
        <p>
          Este plan de pruebas tiene como objetivo validar de manera integral el correcto funcionamiento de <strong>Create, Read, Update y Delete (CRUD)</strong> dentro de un catálogo de productos. 
          Esta validación permitirá asegurar que los usuarios puedan gestionar los productos de forma confiable y segura, sin errores visibles ni fallas en la lógica del sistema o en la persistencia de los datos.
        </p>
      </div>

      {/* Descripción del Módulo */}
      <div className="mt-4">
        <h3>Descripción del Módulo</h3>
        <p>
          El módulo a evaluar forma parte de una aplicación web orientada a la gestión de un catálogo de productos deportivos. Este catálogo permite a los usuarios realizar operaciones básicas sobre los productos, tales como:
        </p>
        <ul>
          <li>Crear nuevos registros con información como nombre del producto, categoría, precio y cantidad.</li>
          <li>Editar productos existentes para modificar cualquiera de sus atributos.</li>
          <li>Eliminar productos de forma permanente del sistema.</li>
        </ul>
        <p>
          Este tipo de funcionalidades es esencial en aplicaciones de tipo administrativo o de inventario, ya que constituyen el núcleo de la gestión de datos.
        </p>
      </div>

      {/* Alcance del Plan de Pruebas */}
      <div className="mt-4">
        <h3>Alcance del Plan de Pruebas</h3>
        <p><strong>Incluye:</strong></p>
        <ul>
          <li>Validación de funcionalidades del CRUD.</li>
          <li>Comprobación del comportamiento de la interfaz en cada operación.</li>
          <li>Evaluación del manejo de errores y validaciones del lado del cliente y del servidor.</li>
        </ul>

        <p><strong>Excluye:</strong></p>
        <ul>
          <li>Pruebas de rendimiento o carga.</li>
          <li>Pruebas de seguridad como inyecciones o accesos no autorizados.</li>
          <li>Pruebas de integración con otros módulos o servicios externos.</li>
        </ul>
      </div>

      {/* Recursos y Herramientas */}
      <div className="mt-4">
        <h3>Recursos y Herramientas</h3>
        <ul>
          <li>Entorno de desarrollo o pruebas: PostgreSQL</li>
          <li>Navegador web: Google Chrome</li>
          <li>Herramienta para pruebas manuales de API: Postman</li>
          <li>Editor de código: Visual Studio Code</li>
          <li>Base de datos con datos de prueba</li>
        </ul>
      </div>
    </section>
    </div>
  );
}

export default Plan;