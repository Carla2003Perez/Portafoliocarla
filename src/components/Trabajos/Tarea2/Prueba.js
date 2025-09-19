import { Card, Badge, Row, Col } from "react-bootstrap";
import { BsGearFill, BsCheckCircleFill, BsXCircleFill} from "react-icons/bs";
import Navprueba from "./Navprueba";
import Prueba2 from "./prueba2";
import Prueba3 from "./prueba3";
import Final from "./final";
import "./prueba.css"


function Prueba() {
  return (
    <div className="container-pru">
        <Navprueba />
    <div className="p-3">
         
      {/* Introducción */}
      <Card id="Introduccion" className="mb-4 shadow">
        <Card.Header className="d-flex align-items-center text-primary fw-bold fs-4">
          <BsGearFill className="me-2" />
          INTRODUCCIÓN
        </Card.Header>
        <Card.Body>
          <p>
            El objetivo de este trabajo es investigar y documentar las
            herramientas esenciales para realizar pruebas de software,
            enfocándonos en tres tipos:{" "}
            <strong>Pruebas funcionales, de rendimiento y de seguridad</strong>.
            La idea es que este documento proporcione una visión clara y
            ordenada para entender qué ofrece cada herramienta, sus ventajas,
            desventajas, entre otras cosas.
          </p>
          <p>
            Las pruebas de software son fundamentales en el desarrollo de
            aplicaciones, ya que aseguran la calidad, fiabilidad y seguridad de
            un proyecto. A continuación, en las siguientes secciones se mostrará
            información detallada de los siguientes temas.
          </p>
        </Card.Body>
      </Card>

      {/* Pruebas Funcionales */}
      <Card id= "Funcionales" className="mb-4 shadow">
        <Card.Header className="d-flex align-items-center text-success fw-bold fs-4">
          <BsCheckCircleFill className="me-2" />
          PRUEBAS FUNCIONALES
        </Card.Header>
        <Card.Body>
          <div className="p-3 mb-3  border rounded">
            <h5 className="fw-semibold text-success">Definición:</h5>
            <p>
              Son un tipo de prueba de software que evalúan las funcionalidades
              específicas de una aplicación según los requerimientos del cliente
              o del negocio. Se encargan de verificar si el sistema realiza lo
              que debe hacer, sin enfocarse en el "cómo" lo hace.
            </p>
          </div>

          <Row xs={1} md={2} className="g-4">
            {/* Selenium */}
            <Col>
              <Card className="h-100 border-success">
                <Card.Header className="d-flex flex-column">
                  <span className="fw-bold text-success">1. Selenium</span>
                  <Badge bg="secondary" className="mt-1 w-auto">
                    Código Abierto
                  </Badge>
                </Card.Header>
                <Card.Body>
                  <p className="small text-muted">
                    Herramienta de automatización web de código abierto,
                    ampliamente utilizada para automatizar pruebas en múltiples
                    sistemas operativos y navegadores.
                  </p>
                  <h6 className="fw-semibold text-success">Características:</h6>
                  <ul className="small">
                    <li>Scripts en Java, C#, Python, Ruby, PHP, Perl</li>
                    <li>Funciones de grabación y reproducción (Selenium IDE)</li>
                    <li>Selenium WebDriver para scripts avanzados</li>
                    <li>Precio: Gratuito</li>
                  </ul>

                  <Row>
                    <Col>
                      <h6 className="text-success d-flex align-items-center">
                        <BsCheckCircleFill className="me-1" /> Ventajas
                      </h6>
                      <ul className="small">
                        <li>Código abierto y gratuito</li>
                        <li>Soporte multi-navegador</li>
                        <li>Gran comunidad</li>
                        <li>Multi-plataforma</li>
                      </ul>
                    </Col>
                    <Col>
                      <h6 className="text-danger d-flex align-items-center">
                        <BsXCircleFill className="me-1" /> Desventajas
                      </h6>
                      <ul className="small">
                        <li>Solo aplicaciones web</li>
                        <li>Sin herramientas de reporte</li>
                        <li>Curva de aprendizaje alta</li>
                        <li>Problemas con gráficos/captchas</li>
                      </ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            {/* TestComplete */}
            <Col>
              <Card className="h-100 border-success">
                <Card.Header className="d-flex flex-column">
                  <span className="fw-bold text-success">
                    2. SmartBear TestComplete
                  </span>
                  <Badge bg="dark" className="mt-1 w-auto">
                    Comercial
                  </Badge>
                </Card.Header>
                <Card.Body>
                  <p className="small text-muted">
                    Herramienta de automatización GUI que funciona en
                    aplicaciones de escritorio, móviles y web, utilizando
                    reconocimiento de objetos impulsado por IA.
                  </p>
                  <h6 className="fw-semibold text-success">Características:</h6>
                  <ul className="small">
                    <li>Pruebas automatizadas de UI</li>
                    <li>Informes y análisis en tiempo real</li>
                    <li>Integración con DevOps</li>
                    <li>Pruebas continuas</li>
                  </ul>
                  <Row>
                  <Col>
                  <h6 className="text-success d-flex align-items-center">
                    <BsCheckCircleFill className="me-1" /> Ventajas
                  </h6>
                  <ul className="small">
                    <li>Multi-aplicación</li>
                    <li>Fácil de usar</li>
                    <li>Pruebas basadas en datos</li>
                    <li>Informes completos</li>
                  </ul>
                </Col>
                <Col>
                  <h6 className="text-danger d-flex align-items-center">
                    <BsXCircleFill className="me-1" /> Desventajas
                  </h6>
                  <ul className="small">
                    <li>Costoso</li>
                    <li>Solo Windows</li>
                    <li>Consume recursos</li>
                    <li>Curva de aprendizaje</li>
                  </ul>
                </Col>
                </Row>
                
                
                </Card.Body>
              </Card>
              
            </Col>
          </Row>
           {/* Aplicaciones Prácticas */}
      <Card className="mt-3 border-success">
        <Card.Body>
          <h6 className="fw-semibold text-success mb-2">Aplicaciones Prácticas:</h6>
          <p className="small text-muted mb-2">
            <strong>Selenium:</strong> Permite simular pruebas de interacción con aplicaciones web a través de varios navegadores,
            reduciendo tareas repetitivas de testing manual.
          </p>
          <p className="small text-muted">
            <strong>TestComplete:</strong> Se utiliza para crear y automatizar diversos tipos de pruebas mediante grabación y 
            reproducción, permitiendo modificaciones posteriores para casos de uso específicos.
          </p>
        </Card.Body>
      </Card>
        </Card.Body>
      </Card>
        
            {/* Pruebas de Rendimiento */}
      <Card className="mb-4 shadow">
       <Prueba2 />
      </Card>
      {/* Pruebas de Seguridad */}
      <Card className="mb-4 shadow">
       <Prueba3 />
      </Card>
       {/* Pruebas de Seguridad */}
      <Card className="mb-4 shadow">
       <Final />
      </Card>
    </div>
    </div>
  );
}

export default Prueba;
