import React from "react";
import "./index.scss";
import axios from "axios";
import { Row, Col, Card, Form, InputGroup, Button } from "react-bootstrap";
//import { Link } from "react-router-dom";

class FormValidations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movimiento_fecha: "",
      movimiento_tipo: "",
      movimiento_estado: "",
      movimiento_observaciones: "",
      movimiento_usuario: "",
      ambiente_origen: "",
      ambiente_destino: "",
      productos: [],
      movimientos: [],
      categorias: [],
      ambientes: [],
    };
    this.cambioFecha = this.cambioFecha.bind(this);
    this.cambioTipo = this.cambioTipo.bind(this);
    this.cambioEstado = this.cambioEstado.bind(this);
    this.cambioObservaciones = this.cambioObservaciones.bind(this);
    this.cambioUsuario = this.cambioUsuario.bind(this);
    this.cambioOrigen = this.cambioOrigen.bind(this);
    this.cambioDestino = this.cambioDestino.bind(this);
    this.guardar = this.guardar.bind(this);
  }

  cambioFecha(e) {
    this.setState({
      movimiento_fecha: e.target.value,
    });
  }
  cambioTipo(e) {
    this.setState({
      movimiento_tipo: e.target.value,
    });
  }
  cambioEstado(e) {
    this.setState({
      movimiento_estado: e.target.value,
      // movdetalle_estado: e.target.value,
    });
  }
  cambioObservaciones(e) {
    this.setState({
      movimiento_observaciones: e.target.value,
    });
  }
  cambioUsuario(e) {
    this.setState({
      movimiento_usuario: e.target.value,
    });
  }
  cambioOrigen(e) {
    this.setState({
      ambiente_origen: e.target.value,
    });
  }
  cambioDestino(e) {
    this.setState({
      ambiente_destino: e.target.value,
    });
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/productos`).then((res) => {
      console.log(res.data);
      this.setState({
        productos: res.data,
      });
    });

    axios.get(`http://127.0.0.1:8000/movimientos`).then((res) => {
      this.setState({
        movimientos: res.data,
      });
    });

    axios.get(`http://127.0.0.1:8000/categorias`).then((res) => {
      this.setState({
        categorias: res.data,
      });
    });

    axios.get(`http://127.0.0.1:8000/ambientes`).then((res) => {
      this.setState({
        ambientes: res.data,
      });
    });
  }

  guardar(e) {
    e.preventDefault();
    axios
      .post(`http://127.0.0.1:8000/movimientos`, {
        movimiento_fecha: this.state.movimiento_fecha,
        movimiento_tipo: -1,
        movimiento_estado: this.state.movimiento_estado,
        movimiento_observaciones: this.state.movimiento_observaciones,
        movimiento_usuario: JSON.parse(localStorage.getItem("user")).id,
        ambiente_origen: this.state.ambiente_origen,
        ambiente_destino: this.state.ambiente_destino,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("movimiento_id", JSON.stringify(response.data.id));
        this.props.history.push("/ingreso/vista");
        //window.location.reload();
      });
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <Card>
              <Card.Header>Registro de Salida</Card.Header>
              <Card.Body>
                <Form onSubmit={this.guardar}>
                  <Form.Row>
                    <Form.Group as={Col} sm="12" controlId="validationCustom02">
                      <Form.Label>Fecha de Salida</Form.Label>
                      <InputGroup className="m-b">
                        <input
                          type="text"
                          name="birthdate"
                          defaultValue=""
                          placeholder="26/02/2022"
                          onChange={this.cambioFecha}
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} sm="6">
                      <label>Ambiente Emision</label>
                      <select
                        name=""
                        id=""
                        className="form-control m-b"
                        onChange={this.cambioOrigen}
                      >
                        {this.state.ambientes.map((ambiente) => {
                          return (
                            <option value={ambiente.id}>
                              {ambiente.ambiente_nombre}
                            </option>
                          );
                        })}
                      </select>
                    </Form.Group>
                    <Form.Group as={Col} sm="6">
                      <label>Ambiente Destino</label>
                      <select
                        name=""
                        id=""
                        className="form-control m-b"
                        onChange={this.cambioDestino}
                      >
                        {this.state.ambientes.map((ambiente) => {
                          return (
                            <option value={ambiente.id}>
                              {ambiente.ambiente_nombre}
                            </option>
                          );
                        })}
                      </select>
                    </Form.Group>
                    <Form.Group as={Col} sm="6">
                      <label>Estado</label>
                      <select
                        name=""
                        id=""
                        className="form-control m-b"
                        onChange={this.cambioEstado}
                      >
                        <option value="vigente">VIGENTE</option>
                        <option value="anulado">ANULADO</option>
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
                          onChange={this.cambioObservaciones}
                        />
                      </InputGroup>
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
