import React from "react";
import "./index.scss";
import axios from "axios";
//import { Link } from "react-router-dom";
import { Row, Col, Card, Form, InputGroup, Button } from "react-bootstrap";

class FormValidations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movdetalle_estado: "",
      movdetalle_cantidad: "",
      movdetalle_sku: "",
      movdetalle_glosa: "",
      producto_id: "",
      movimiento_id: "",
      productos: [],
    };
    this.cambioEstado = this.cambioEstado.bind(this);
    this.cambioCantidad = this.cambioCantidad.bind(this);
    this.cambioSku = this.cambioSku.bind(this);
    this.cambioGlosa = this.cambioGlosa.bind(this);
    this.cambioProducto = this.cambioProducto.bind(this);
    this.cambioId = this.cambioId.bind(this);
    this.guardar = this.guardar.bind(this);
  }

  cambioEstado(e) {
    this.setState({
      movdetalle_estado: e.target.value,
    });
  }
  cambioCantidad(e) {
    this.setState({
      movdetalle_cantidad: e.target.value,
    });
  }
  cambioSku(e) {
    this.setState({
      movdetalle_sku: e.target.value,
    });
  }
  cambioGlosa(e) {
    this.setState({
      movdetalle_glosa: e.target.value,
    });
  }
  cambioProducto(e) {
    this.setState({
      producto_id: e.target.value,
    });
  }
  cambioId(e) {
    this.setState({
      movimiento_id: e.target.value,
    });
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/productos`).then((res) => {
      console.log(res.data);
      this.setState({
        productos: res.data,
      });
    });
  }

  guardar(e) {
    e.preventDefault();
    axios
      .post(`http://127.0.0.1:8000/movdetalles`, {
        movdetalle_estado: this.state.movdetalle_estado,
        movdetalle_cantidad: this.state.movdetalle_cantidad,
        movdetalle_sku: this.state.movdetalle_sku,
        movdetalle_glosa: this.state.movdetalle_glosa,
        producto_id: this.state.producto_id,
        movimiento_id: localStorage.getItem("movimiento_id"),
      })
      .then((response) => {
        console.log(response);
        ///window.location.reload();
        this.props.history.push("/ingreso/vista");
        //localStorage.setItem("movimiento_id", JSON.stringify(response.data.movimiento_id));
      });
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <Card>
              <Card.Header>Registro de Detalle</Card.Header>
              <Card.Body>
                <Form onSubmit={this.guardar}>
                  <Form.Row>
                    <Form.Group as={Col} sm="6" controlId="validationCustom01">
                      <Form.Label>Nombre Producto</Form.Label>
                      <select
                        name=""
                        id=""
                        className="form-control m-b"
                        onChange={this.cambioProducto}
                      >
                        {this.state.productos.map((producto) => {
                          return (
                            <option value={producto.id}>
                              {producto.producto_nombre}
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
                    <Form.Group as={Col} sm="12" controlId="validationCustom01">
                      <Form.Label>Cantidad</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Cantidad del producto"
                        defaultValue=""
                        onChange={this.cambioCantidad}
                      />
                    </Form.Group>
                    <Form.Group as={Col} sm="12" controlId="validationCustom01">
                      <Form.Label>SKU</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Sku del producto"
                        defaultValue=""
                        onChange={this.cambioSku}
                      />
                    </Form.Group>
                    <Form.Group as={Col} sm="12" controlId="validationCustom02">
                      <Form.Label>Glosa</Form.Label>
                      <InputGroup className="m-b">
                        <textarea
                          rows={2}
                          className="form-control"
                          placeholder=""
                          defaultValue={""}
                          onChange={this.cambioGlosa}
                        />
                      </InputGroup>
                    </Form.Group>
                  </Form.Row>
                  <Button type="submit">Guardar</Button>
                  {/* <Link to="#be" className="btn btn-success btn-icon">
                    <i className="fa fa-floppy-o " />
                    Guardar y Salir
                  </Link>
                  <Link
                    to="#be"
                    className="btn btn-warning btn-icon"
                    type="submit"
                  >
                    <i className="fa fa-reply" />
                    Agregar Nuevo
                  </Link> */}
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
