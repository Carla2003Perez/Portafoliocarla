import { Card, Badge, Row, Col } from "react-bootstrap";
import { BsCheckCircleFill, BsXCircleFill, BsLightningFill } from "react-icons/bs";

import "./prueba.css"


function Prueba2() {
  return (
    <div id="Rendimiento">
        
        {/* Pruebas de Rendimiento */}
      
        <Card.Header className="d-flex align-items-center text-warning fw-bold fs-4">
          <BsLightningFill className="me-2" />
          PRUEBAS DE RENDIMIENTO
        </Card.Header>
        <Card.Body>
          <div className="p-3 mb-3 bg-warning bg-opacity-25 rounded">
            <h5 className="fw-semibold text-warning">Definición:</h5>
            <p className="small text-muted">
              Son pruebas que ayudan a determinar el rendimiento de un software en términos de velocidad, tiempo de respuesta,
              escalabilidad, uso de recursos y estabilidad bajo una carga de trabajo determinada.
            </p>
          </div>

          <Row xs={1} md={2} className="g-4">
            {/* Apache JMeter */}
            <Col>
              <Card className="h-100 border-warning">
                <Card.Header className="d-flex flex-column">
                  <span className="fw-bold text-warning">1. Apache JMeter</span>
                  <Badge bg="secondary" className="mt-1 w-auto">
                    Java - Código Abierto
                  </Badge>
                </Card.Header>
                <Card.Body>
                  <p className="small text-muted">
                    Herramienta de código abierto construida en Java, ampliamente utilizada para pruebas de carga, comportamiento funcional y evaluación del rendimiento.
                  </p>
                  <h6 className="fw-semibold text-warning">Características:</h6>
                  <ul className="small">
                    <li>IDE completo con grabación rápida</li>
                    <li>Modo CLI para cualquier OS Java</li>
                    <li>Informes HTML dinámicos</li>
                    <li>Correlación de datos (HTML, JSON, XML)</li>
                    <li>100% Java y multiplataforma</li>
                  </ul>

                  <Row>
                    <Col>
                      <h6 className="text-success d-flex align-items-center">
                        <BsCheckCircleFill className="me-1" /> Ventajas
                      </h6>
                      <ul className="small">
                        <li>Código abierto gratuito</li>
                        <li>Independiente de plataforma</li>
                        <li>Soporte multiprotocolo</li>
                        <li>Grabación y reproducción</li>
                        <li>Gran comunidad</li>
                      </ul>
                    </Col>
                    <Col>
                      <h6 className="text-danger d-flex align-items-center">
                        <BsXCircleFill className="me-1" /> Desventajas
                      </h6>
                      <ul className="small">
                        <li>Solo pruebas de protocolo</li>
                        <li>Limitaciones de hardware</li>
                        <li>Interfaz compleja</li>
                        <li>No soporta JavaScript/AJAX</li>
                      </ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            {/* BlazeMeter */}
            <Col>
              <Card className="h-100 border-warning">
                <Card.Header className="d-flex flex-column">
                  <span className="fw-bold text-warning">2. BlazeMeter</span>
                  <Badge bg="dark" className="mt-1 w-auto">
                    SaaS - Comercial
                  </Badge>
                </Card.Header>
                <Card.Body>
                  <p className="small text-muted">
                    Herramienta empresarial de pruebas de carga con interfaz intuitiva, que permite simular miles de usuarios virtuales desde 56 ubicaciones globales.
                  </p>
                  <h6 className="fw-semibold text-warning">Características:</h6>
                  <ul className="small">
                    <li>Pruebas de API de 360 grados</li>
                    <li>Integración con JMeter, Gatling, Selenium</li>
                    <li>Plan gratuito: 50 usuarios simultáneos</li>
                    <li>Planes pagos desde $99/mes</li>
                  </ul>

                  <Row>
                    <Col>
                      <h6 className="text-success d-flex align-items-center">
                        <BsCheckCircleFill className="me-1" /> Ventajas
                      </h6>
                      <ul className="small">
                        <li>Fácil de usar</li>
                        <li>Integración con herramientas open source</li>
                        <li>Reportes simples</li>
                        <li>Colaboración en equipo</li>
                        <li>Gestión de APIs</li>
                      </ul>
                    </Col>
                    <Col>
                      <h6 className="text-danger d-flex align-items-center">
                        <BsXCircleFill className="me-1" /> Desventajas
                      </h6>
                      <ul className="small">
                        <li>Grabación deficiente</li>
                        <li>Problemas de exportación</li>
                        <li>Limitaciones de grabación</li>
                        <li>Dependiente de internet</li>
                      </ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Aplicaciones Prácticas */}
          <Card className="mt-3 border-warning">
            <Card.Body>
              <h6 className="fw-semibold text-warning mb-2">Aplicaciones Prácticas:</h6>
              <p className="small text-muted mb-2">
                <strong>Apache JMeter:</strong> Se usa para pruebas unitarias de conexiones de bases de datos (JDBC, FTP, LDAP, servicios web, JMS, HTTP) y como monitor de sistemas, aunque es considerado una solución ad hoc.
              </p>
              <p className="small text-muted">
                <strong>BlazeMeter:</strong> Facilita la creación y monitorización de pruebas de API desde desarrollo hasta producción, integrándose con Jenkins, Slack y otras herramientas para notificaciones automáticas.
              </p>
            </Card.Body>
          </Card>
        </Card.Body>
     
    </div>
 
  );
}

export default Prueba2;
