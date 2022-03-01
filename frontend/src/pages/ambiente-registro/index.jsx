import React from "react";
import "./index.scss";
import axios from "axios";
import { Row, Col, Card, Form, Button } from "react-bootstrap";

class FormValidations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ambiente_nombre: "",
      ambiente_ubicacion: "",
      ambiente_tipo: "",
    };
    this.cambioNombre = this.cambioNombre.bind(this);
    this.cambioUbicacion = this.cambioUbicacion.bind(this);
    this.cambioTipo = this.cambioTipo.bind(this);
    this.guardar = this.guardar.bind(this);
  }
  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/ambientes`).then((res) => {
      console.log(res.data);
      this.setState({
        ambientes: res.data,
      });
    });
  }
  cambioNombre(e) {
    this.setState({
      ambiente_nombre: e.target.value,
    });
  }
  cambioUbicacion(e) {
    this.setState({
      ambiente_ubicacion: e.target.value,
    });
  }
  cambioTipo(e) {
    this.setState({
      ambiente_tipo: e.target.value,
    });
  }
  guardar(e) {
    e.preventDefault();
    axios.post(`http://localhost:8000/ambientes`, {
      ambiente_nombre: this.state.ambiente_nombre,
      ambiente_ubicacion: this.state.ambiente_ubicacion,
      ambiente_tipo: this.state.ambiente_tipo,
    });
    this.setState({
      ambiente_nombre: "",
      ambiente_ubicacion: "",
      ambiente_tipo: "",
    });
  }
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <Card>
              <Card.Header>Registro de Ambientes</Card.Header>
              <Card.Body>
                <Form onSubmit={this.guardar}>
                  <Form.Row>
                    <Form.Group as={Col} sm="12">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Nombre del ambiente"
                        defaultValue=""
                        onChange={this.cambioNombre}
                      />
                    </Form.Group>
                    <Form.Group as={Col} sm="12">
                      <Form.Label>Ubicacion</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Ubicacion del ambiente"
                        defaultValue=""
                        onChange={this.cambioUbicacion}
                      />
                    </Form.Group>
                    <Form.Group as={Col} sm="6">
                      <label>Tipo</label>
                      <select
                        name="tipo"
                        className="form-control m-b"
                        onChange={this.cambioTipo}
                      >
                        <option value="0">SUMINISTROS</option>
                        <option value="1">AULAS</option>
                        <option value="2">AUDITORIOS</option>
                        <option value="3">LABORATORIOS</option>
                        <option value="4">OFICINAS</option>
                        <option value="9">OBSOLETOS</option>
                      </select>
                    </Form.Group>
                  </Form.Row>
                  <Button type="submit">Guardar</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default FormValidations;
