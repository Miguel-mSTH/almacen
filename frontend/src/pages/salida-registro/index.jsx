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
            <Form.Group as={Col} sm="6" controlId="validationCustom01">
              <Form.Label>Nombre Producto</Form.Label>
              <select name="account" className="form-control m-b">
                <option>Tecnologia</option>
                <option>Limpieza</option>
              </select>
            </Form.Group>
            <Form.Group as={Col} sm="12" controlId="validationCustom02">
              <Form.Label>Fecha de Ingreso</Form.Label>
              <InputGroup className="m-b">
                <input
                  type="text"
                  name="birthdate"
                  defaultValue=""
                  placeholder="26/02/2022"
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} sm="6">
              <label>Ambiente Emision</label>
              <select name="account" className="form-control m-b">
                <option>Nuevo</option>
                <option>Obsoleto</option>
              </select>
            </Form.Group>
            <Form.Group as={Col} sm="6">
              <label>Ambiente Destino</label>
              <select name="account" className="form-control m-b">
                <option>Nuevo</option>
                <option>Obsoleto</option>
              </select>
            </Form.Group>
            <Form.Group as={Col} sm="6">
              <label>Estado</label>
              <select name="account" className="form-control m-b">
                <option>Nuevo</option>
                <option>Obsoleto</option>
              </select>
            </Form.Group>
            <Form.Group as={Col} sm="6">
              <label>Tipo</label>
              <select name="account" className="form-control m-b">
                <option>Nuevo</option>
                <option>Obsoleto</option>
              </select>
            </Form.Group>
            <Form.Group as={Col} sm="6">
              <label>Unidad</label>
              <select name="account" className="form-control m-b">
                <option>Nuevo</option>
                <option>Obsoleto</option>
              </select>
            </Form.Group>
            <Form.Group as={Col} sm="6">
              <label>Categoria</label>
              <select name="account" className="form-control m-b">
                <option>Tecnologia</option>
                <option>Limpieza</option>
              </select>
            </Form.Group>
            <Form.Group as={Col} sm="12" controlId="validationCustom02">
              <Form.Label>Observaciones</Form.Label>
              <InputGroup className="m-b">
                <textarea
                  rows={2}
                  className="form-control"
                  placeholder=""
                  defaultValue={""}
                />
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
              <Card.Header>Registro de Productos</Card.Header>
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
