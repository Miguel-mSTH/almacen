import React from "react";
import "./index.scss";
import { Row, Col, Card, Form, InputGroup, Button } from "react-bootstrap";

class FormValidations extends React.Component {
  render() {
    function FormExample() {
      const [validated, setValidated] = React.useState(false);

      const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }

        setValidated(true);
      };

      return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} sm="12" controlId="validationCustom01">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Nombre del ambiente"
                defaultValue=""
              />
            </Form.Group>
            <Form.Group as={Col} sm="12" controlId="validationCustom02">
              <Form.Label>Ubicacion</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Ubicacion del ambiente"
                defaultValue=""
              />
            </Form.Group>
            <Form.Group as={Col} sm="12" controlId="validationCustomUsername">
              <Form.Label>Tipo</Form.Label>
              <InputGroup>
                <Form.Control type="text" placeholder="Tipo de ambiente" />
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Button type="submit">Guardar</Button>
        </Form>
      );
    }

    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <Card>
              <Card.Header>Registro de Ambientes</Card.Header>
              <Card.Body>
                <FormExample />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default FormValidations;
