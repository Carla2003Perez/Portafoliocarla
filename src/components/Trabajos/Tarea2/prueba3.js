import { Card, Badge, Row, Col } from "react-bootstrap";
import { BsCheckCircleFill, BsXCircleFill, BsShieldFill } from "react-icons/bs";

import "./prueba.css"


function Prueba3() {
  return (
    <div id="Seguridad">
        <Card.Header className="d-flex align-items-center text-danger fw-bold fs-4">
          <BsShieldFill className="me-2" />
          PRUEBAS DE SEGURIDAD
        </Card.Header>
        <Card.Body>
          <div className="p-3 mb-3 bg-danger bg-opacity-25 rounded">
            <h5 className="fw-semibold text-danger">Definición:</h5>
            <p className="small text-muted">
              Son pruebas enfocadas a verificar que los sistemas no tengan fallas de diseño ni configuración que permitan 
              situaciones donde el servicio o información no estén disponibles, o personas no autorizadas accedan a datos sensibles.
            </p>
          </div>

          <Row xs={1} md={2} className="g-4">
            {/* Nessus Professional */}
            <Col>
              <Card className="h-100 border-danger">
                <Card.Header className="d-flex flex-column">
                  <span className="fw-bold text-danger">1. Nessus Professional</span>
                  <Badge bg="dark" className="mt-1 w-auto">
                    Comercial
                  </Badge>
                </Card.Header>
                <Card.Body>
                  <p className="small text-muted">
                    Destinado a profesionales de seguridad para gestión de parches, problemas de software, eliminación de malware 
                    y configuración incorrecta en diversos sistemas operativos.
                  </p>
                  <h6 className="fw-semibold text-danger">Características:</h6>
                  <ul className="small">
                    <li>Escaneo exhaustivo de vulnerabilidades</li>
                    <li>Análisis de configuración</li>
                    <li>Detección de malware</li>
                    <li>Monitoreo en tiempo real</li>
                    <li>Informes personalizables</li>
                    <li>Cumplimiento normativo (PCI DSS, HIPAA)</li>
                  </ul>

                  <Row>
                    <Col>
                      <h6 className="text-success d-flex align-items-center">
                        <BsCheckCircleFill className="me-1" /> Ventajas
                      </h6>
                      <ul className="small">
                        <li>Escaneo exhaustivo</li>
                        <li>Amplia cobertura</li>
                        <li>Actualizaciones constantes</li>
                        <li>Informes detallados</li>
                      </ul>
                    </Col>
                    <Col>
                      <h6 className="text-danger d-flex align-items-center">
                        <BsXCircleFill className="me-1" /> Desventajas
                      </h6>
                      <ul className="small">
                        <li>Configuración compleja</li>
                        <li>Costo de licencias alto</li>
                        <li>Falsos positivos</li>
                        <li>Impacto en rendimiento</li>
                      </ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            {/* Metasploit */}
            <Col>
              <Card className="h-100 border-danger">
                <Card.Header className="d-flex flex-column">
                  <span className="fw-bold text-danger">2. Metasploit</span>
                  <Badge bg="secondary" className="mt-1 w-auto">
                    Código Abierto
                  </Badge>
                </Card.Header>
                <Card.Body>
                  <p className="small text-muted">
                    Robusta herramienta de penetration testing para sondear vulnerabilidades en redes y servidores, 
                    con más de 900 exploits incluidos.
                  </p>
                  <h6 className="fw-semibold text-danger">Características:</h6>
                  <ul className="small">
                    <li>Selección y configuración de exploits</li>
                    <li>~900 exploits para Windows, Unix/Linux, Mac OS X</li>
                    <li>Verificación de susceptibilidad</li>
                    <li>Técnicas de codificación IPS</li>
                    <li>Visualización de ejecución</li>
                  </ul>

                  <Row>
                    <Col>
                      <h6 className="text-success d-flex align-items-center">
                        <BsCheckCircleFill className="me-1" /> Ventajas
                      </h6>
                      <ul className="small">
                        <li>Base de datos amplia</li>
                        <li>Código abierto</li>
                        <li>Arquitectura modular</li>
                        <li>Interfaz intuitiva</li>
                        <li>Educativo</li>
                      </ul>
                    </Col>
                    <Col>
                      <h6 className="text-danger d-flex align-items-center">
                        <BsXCircleFill className="me-1" /> Desventajas
                      </h6>
                      <ul className="small">
                        <li>Fácilmente detectado</li>
                        <li>Puede ser inestable</li>
                        <li>Riesgos éticos</li>
                        <li>Requiere autorización</li>
                      </ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Aplicaciones Prácticas */}
          <Card className="mt-3 border-danger">
            <Card.Body>
              <h6 className="fw-semibold text-danger mb-2">Aplicaciones Prácticas:</h6>
              <p className="small text-muted mb-2">
                <strong>Nessus Professional:</strong> Los consultores de ciberseguridad utilizan Nessus para explorar redes de clientes en busca de vulnerabilidades y crear informes completos de la situación de seguridad.
              </p>
              <p className="small text-muted">
                <strong>Metasploit:</strong> Penetration testers, auditores de seguridad y analistas de vulnerabilidades lo utilizan para asegurar que las infraestructuras de TI sean robustas y seguras.
              </p>
            </Card.Body>
          </Card>
        </Card.Body>
    </div>
    );
}

export default Prueba3;
