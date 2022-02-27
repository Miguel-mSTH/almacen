import React from "react";
import "./index.scss";
import { Row, Col, Card, Form, InputGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                placeholder="Nombre del producto"
                defaultValue=""
              />
            </Form.Group>
            <Form.Group as={Col} sm="12" controlId="validationCustom02">
              <Form.Label>Fecha Registro</Form.Label>
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
              <label>Estado</label>
              <select name="account" className="form-control m-b">
                <option>Nuevo</option>
                <option>Obsoleto</option>
              </select>
            </Form.Group>
            <Form.Group>
              <label>Imagen</label>
              <div className="fileinput-new" data-provides="fileinput">
                <div
                  className="fileinput-preview"
                  data-trigger="fileinput"
                  style={{ width: 200, height: 150 }}
                />
                <span className="btn btn-primary  btn-file">
                  <span className="fileinput-new">Seleccionar</span>
                  <span className="fileinput-exists">Cambiar</span>
                  <input type="file" id="image" name="image" />
                </span>
                <Link
                  to="#be"
                  className="btn btn-danger fileinput-exists"
                  data-dismiss="fileinput"
                >
                  Remove
                </Link>
              </div>
            </Form.Group>
            <Form.Group as={Col} sm="12" controlId="validationCustomUsername">
              <Form.Label>Unidad</Form.Label>
              <InputGroup>
                <Form.Control type="text" placeholder="Unidad de producto" />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} sm="6">
              <label>Categoria</label>
              <select name="account" className="form-control m-b">
                <option>Tecnologia</option>
                <option>Limpieza</option>
              </select>
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
