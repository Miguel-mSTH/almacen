import React from "react";
import "./index.scss";
import axios from "axios";
import { Row, Col, Form, Card, Button } from "react-bootstrap";

class FormBasic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categorias: [],
      categoria_nombre: "",
    };
    this.cambioNombre = this.cambioNombre.bind(this);
    this.guardar = this.guardar.bind(this);
  }
  cambioNombre(e) {
    this.setState({
      categoria_nombre: e.target.value,
    });
  }
  guardar(e) {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/categorias`, {
        categoria_nombre: this.state.categoria_nombre,
      })
      .then(() => {
        window.location.reload();
      });
  }
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <Card>
              <Card.Header>Registro de Categoria</Card.Header>
              <Card.Body>
                <Form onSubmit={this.guardar}>
                  <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese nombre de la categoria"
                      onChange={this.cambioNombre}
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
