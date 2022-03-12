import React from "react";
import "./index.scss";
import { Row, Col, Card, Form, InputGroup, Button } from "react-bootstrap";
//import { Link } from "react-router-dom";
import axios from "axios";
class FormValidations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      producto_nombre: "",
      producto_fecreg: "",
      producto_estado: "",
      producto_imgurl: "",
      producto_unidad: "",
      producto_categoria: "",
      categorias: [],
    };
    this.cambioNombre = this.cambioNombre.bind(this);
    this.cambioFecha = this.cambioFecha.bind(this);
    this.cambioEstado = this.cambioEstado.bind(this);
    this.cambioImagen = this.cambioImagen.bind(this);
    this.cambioUnidad = this.cambioUnidad.bind(this);
    this.cambioCategoria = this.cambioCategoria.bind(this);
    this.guardar = this.guardar.bind(this);
  }

  cambioNombre(e) {
    this.setState({
      producto_nombre: e.target.value,
    });
  }
  cambioFecha(e) {
    this.setState({
      producto_fecreg: e.target.value,
    });
  }
  cambioEstado(e) {
    this.setState({
      producto_estado: e.target.value,
    });
  }
  cambioImagen(e) {
    this.setState({
      producto_imgurl: e.target.value,
    });
  }
  cambioUnidad(e) {
    this.setState({
      producto_unidad: e.target.value,
    });
  }
  cambioCategoria(e) {
    this.setState({
      producto_categoria: e.target.value,
    });
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/categorias`).then((res) => {
      console.log(res.data);
      this.setState({
        categorias: res.data,
      });
    });
  }

  guardar(e) {
    e.preventDefault();
    axios
      .post(`http://127.0.0.1:8000/productos`, {
        producto_nombre: this.state.producto_nombre,
        producto_fecreg: this.state.producto_fecreg,
        producto_estado: this.state.producto_estado,
        producto_imgurl: this.state.producto_imgurl,
        producto_unidad: this.state.producto_unidad,
        producto_categoria: this.state.producto_categoria,
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
              <Card.Header>Registro de Producto</Card.Header>
              <Card.Body>
                <Form onSubmit={this.guardar}>
                  <Form.Row>
                    <Form.Group as={Col} sm="12" controlId="validationCustom01">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Nombre del producto"
                        defaultValue=""
                        onChange={this.cambioNombre}
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
                          onChange={this.cambioFecha}
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} sm="4">
                      <label>Estado</label>
                      <select
                        name="account"
                        className="form-control m-b"
                        onChange={this.cambioEstado}
                      >
                        <option value="VIGENTE">VIGENTE</option>
                        <option value="ANULADO">ANULADO</option>
                      </select>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <label>Imagen</label>
                      <div className="app">
                        <input
                          type="file"
                          className="app_uploadInput"
                          onChange={this.cambioImagen}
                        />
                      </div>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      sm="12"
                      controlId="validationCustomUsername"
                    >
                      <Form.Label>Unidad</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type="text"
                          placeholder="Unidad de producto"
                          onChange={this.cambioUnidad}
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} sm="6">
                      <label>Categoria</label>
                      <select
                        name="account"
                        className="form-control m-b"
                        onChange={this.cambioCategoria}
                      >
                        {this.state.categorias.map((categoria) => {
                          return (
                            <option value={categoria.categoria_nombre}>
                              {categoria.categoria_nombre}
                            </option>
                          );
                        })}
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
