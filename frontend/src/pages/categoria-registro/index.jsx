import React from "react";
import "./index.scss";
import { Row, Col, Form, Card, Button } from "react-bootstrap";

class FormBasic extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="4">
            <Card>
              <Card.Header>Registro de Categoria</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese nombre de la categoria"
                    />
                  </Form.Group>
                  <Button type="submit" className="btn-sm">
                    Guardar
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default FormBasic;
