import { Card,  Row, Col } from "react-bootstrap";
import { BsCheckCircleFill} from "react-icons/bs";
import sele from './sele.png';
import Blaze from './blaze.png';
import Meta from './Meta.png';

function Final() {
  return (
    <div className="p-3">
      <Card className="mb-4 shadow">
        <Card.Header id="Conclusion"className="text-primary fw-bold fs-4">CONCLUSIONES</Card.Header>
        <Card.Body>
          <p className="small text-muted">
            La investigación permitió identificar de forma clara las capacidades, ventajas y limitaciones de herramientas para la 
            ejecución de pruebas funcionales, de rendimiento y de seguridad en el desarrollo de software.
          </p>
          <Row>
            <Col md={4} className="bg-success bg-opacity-25 p-3 rounded mb-2">
              <h6 className="fw-semibold text-success">Pruebas Funcionales</h6>
              <p className="small text-muted">Selenium y TestComplete son grandes aliados para automatizar pruebas y asegurar que el sistema haga lo que promete.</p>
            </Col>
            <Col md={4} className="bg-warning bg-opacity-25 p-3 rounded mb-2">
              <h6 className="fw-semibold text-warning">Pruebas de Rendimiento</h6>
              <p className="small text-muted">Apache JMeter y BlazeMeter brillan cuando se trata de poner el software bajo presión y comprobar si soporta la carga.</p>
            </Col>
            <Col md={4} className="bg-danger bg-opacity-25 p-3 rounded mb-2">
              <h6 className="fw-semibold text-danger">Pruebas de Seguridad</h6>
              <p className="small text-muted">Nessus Professional y Metasploit ayudan a detectar y probar vulnerabilidades de forma controlada.</p>
            </Col>
          </Row>
          <p className="small text-muted mt-2">
            La integración de herramientas es importante para la calidad de las pruebas, ya que facilitará el uso y respaldará a la 
            comunidad de los riesgos posibles. Siempre hay que optar por soluciones que se adapten a la arquitectura del sistema y 
            que cuenten con soporte adecuado.
          </p>
        </Card.Body>
        </Card>
      

      {/* Recomendaciones */}
      <Card id="Recomendaciones" className="mb-4 shadow">
        <Card.Header className="text-purple fw-bold fs-4">RECOMENDACIONES</Card.Header>
        <Card.Body>
          <Row>
            <Col md={6} className="bg-purple bg-opacity-25 p-3 rounded mb-2">
              <h6 className="fw-semibold text-purple">Herramientas Recomendadas</h6>
              <ul className="small">
                <li>Selenium: Para automatización web multiplataforma con recursos limitados</li>
                <li>Nessus: Para escaneo proactivo y cumplimiento normativo</li>
                <li>JMeter: Para pruebas unitarias de rendimiento en conexiones</li>
              </ul>
            </Col>
            <Col md={6} className="bg-purple bg-opacity-25 p-3 rounded mb-2">
              <h6 className="fw-semibold text-purple">Mejores Prácticas</h6>
              <ul className="small">
                <li>Capacitar al equipo en interfaces complejas</li>
                <li>Integrar pruebas automatizadas en desarrollo local</li>
                <li>Usar Metasploit para pruebas éticas durante coding</li>
                <li>Implementar hooks en repositorios para CI/CD</li>
              </ul>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      

      {/* Bibliografía */}
      <Card id="Bibliografia" className="mb-4 shadow">
        <Card.Header className="text-secondary fw-bold fs-4">BIBLIOGRAFÍA</Card.Header>
        <Card.Body className="small text-muted">
          <p>Apache JMeter. (s. f.). Jmeter.net. Recuperado 11 de agosto de 2025, de https://es.jmeter.net/</p>
          <p>Aranza, R. (2025, julio 18). ¿Qué son las pruebas funcionales y por qué son críticas para la calidad del software? MTP International.</p>
          <p>Hamilton, T. (2024, mayo 17). ¿Qué son las pruebas funcionales? Tipos y ejemplos. Guru99.</p>
          <p>Kamunya, T. (2023, enero 27). 10 Mejores Herramientas de Pruebas Funcionales para Validar Funcionalidades. Geekflare Spain.</p>
          <p>Lee, G. (2021, septiembre 11). Pruebas de carga de JMeter: Cómo usar JMeter para pruebas de rendimiento. LoadView.</p>
          <p>Nessus. (2021, abril 14). Technologyevaluation.com.</p>
          <p>Pathak, A. (2021, julio 8). Las 26 mejores herramientas de pruebas de rendimiento para usar en 2025. Kinsta®.</p>
          <p>¿Qué son las pruebas de seguridad? - Fluid Attacks. (s. f.). Fluidattacks.com.</p>
          <p>Selenium 3 y 4: ventajas, novedades y usos. (2022, enero 12). Trentia Consulting.</p>
          <p>Metasploit. La herramienta esencial en Ciberseguridad. (2024, noviembre 27). Campus Internacional de Ciberseguridad.</p>
        </Card.Body>
      </Card>

 {/* Anexos */}
      <Card id="Anexos" className="mb-4 shadow">
        <Card.Header className="text-secondary fw-bold fs-4">Anexos</Card.Header>
        <Card.Body className="small text-muted">
          <Row>
            <Col>
            <h6 className="text-success d-flex align-items-center">
                <BsCheckCircleFill className="me-1" /> Selenium</h6>
                <ul className="small">
                    <div className="img-place wow fadeInUp">
                        <img src={sele}alt="Foto perfil" className="img-fluid rounded mb-3" />
                        </div>
                    <p>Como se muestra en la imagen contigua, Selenium permite agrupar los casos de prueba en un conjunto llamado Suit Test.En la parte derecha se muestran los comandos que se ejecutarán. </p>
                    
                </ul>
            </Col>
             <Col>
             <h6 className="text-success d-flex align-items-center">
                <BsCheckCircleFill className="me-1" />BlazeMeter</h6>
                <ul className="small">
                    <div className="img-place wow fadeInUp">
                        <img src={Blaze}alt="Foto perfil" className="img-fluid rounded mb-3" />
                        </div>
                    <p>ofrece la flexibilidad de las herramientas de código abierto para probar realmente la experiencia del usuario e identificar cómo se ejecutan los componentes 
                        backend de su aplicación incluso bajo una alta demanda</p>
                    
                </ul>
             </Col>
             <Col>
             <h6 className="text-success d-flex align-items-center">
                <BsCheckCircleFill className="me-1" /> Metasploit</h6>
                <ul className="small">
                    <div className="img-place wow fadeInUp">
                        <img src={Meta}alt="Foto perfil" className="img-fluid rounded mb-3" />
                        </div>
                    <p>Comunidad de metasploit muestra tres hosts, dos de los cuales fueron comprometidos por un exploit.</p>
                    
                </ul>
             </Col>
             </Row>
        </Card.Body>
      </Card>

      
    </div>
  );
}

export default Final;
