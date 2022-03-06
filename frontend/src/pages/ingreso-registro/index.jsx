import React from "react";
import "./index.scss";
import axios from "axios";
import { Row, Col, Card, Form, InputGroup, Button } from "react-bootstrap";

class FormValidations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      movimientos: [],
      categorias: [],
      ambientes: [],
    };
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

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <Card>
              <Card.Header>Registro de Productos</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} sm="6" controlId="validationCustom01">
                      <Form.Label>Nombre Producto</Form.Label>
                      <select name="" id="" className="form-control m-b">
                        {this.state.productos.map((producto) => {
                          return <option>{producto.producto_nombre}</option>;
                        })}
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
                      <select name="" id="" className="form-control m-b">
                        {this.state.ambientes.map((ambiente) => {
                          return <option>{ambiente.ambiente_nombre}</option>;
                        })}
                      </select>
                    </Form.Group>
                    <Form.Group as={Col} sm="6">
                      <label>Ambiente Destino</label>
                      <select name="" id="" className="form-control m-b">
                        {this.state.ambientes.map((ambiente) => {
                          return <option>{ambiente.ambiente_nombre}</option>;
                        })}
                      </select>
                    </Form.Group>
                    <Form.Group as={Col} sm="6">
                      <label>Estado</label>
                      <select name="" id="" className="form-control m-b">
                        {this.state.productos.map((producto) => {
                          return <option>{producto.producto_estado}</option>;
                        })}
                      </select>
                    </Form.Group>
                    <Form.Group as={Col} sm="6">
                      <label>Tipo</label>
                      <select name="" id="" className="form-control m-b">
                        {this.state.movimientos.map((movimiento) => {
                          return <option>{movimiento.movimiento_tipo}</option>;
                        })}
                      </select>
                    </Form.Group>
                    <Form.Group as={Col} sm="6">
                      <label>Unidad</label>
                      <select name="" id="" className="form-control m-b">
                        {this.state.productos.map((producto) => {
                          return <option>{producto.producto_unidad}</option>;
                        })}
                      </select>
                    </Form.Group>
                    <Form.Group as={Col} sm="6">
                      <label>Categoria</label>
                      <select name="" id="" className="form-control m-b">
                        {this.state.categorias.map((categoria) => {
                          return <option>{categoria.categoria_nombre}</option>;
                        })}
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
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default FormValidations;
