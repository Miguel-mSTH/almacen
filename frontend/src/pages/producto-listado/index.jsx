import React from "react";
import "./index.scss";
import axios from "axios";
import { Row, Col, Card, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class EcommerceProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
    };
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/productos`).then((res) => {
      console.log(res.data);
      this.setState({
        productos: res.data,
      });
    });
  }
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <div className="float-right mt-10">
                  <Link
                    to="/producto/registro"
                    className="btn btn-primary btn-rounded box-shadow btn-icon"
                  >
                    <i className="fa fa-plus" /> Agregar Producto
                  </Link>
                </div>
                Listado de Productos
              </Card.Header>
              <Card.Body>
                <Table
                  id="datatable1"
                  className="table table-striped dt-responsive nowrap table-hover"
                >
                  <thead>
                    <tr>
                      <th className="text-center">
                        <strong>ID</strong>
                      </th>
                      <th className="text-center">
                        <strong>Nombre</strong>
                      </th>
                      <th className="text-center">
                        <strong>Fecha de Registro</strong>
                      </th>
                      <th className="text-center">
                        <strong>Estado</strong>
                      </th>
                      <th className="text-center">
                        <strong>Unidad</strong>
                      </th>
                      <th className="text-center">
                        <strong>Categoria</strong>
                      </th>
                      <th className="text-center">
                        <strong>Accion</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.productos.map((producto, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{producto.producto_nombre}</td>
                          <td>{producto.producto_fecreg}</td>
                          <td>{producto.producto_estado}</td>
                          <td>{producto.producto_unidad}</td>
                          <td>{producto.categoria_id}</td>
                          <td className="text-center">
                            <Button className="btn btn-sm btn-default">
                              <i className="fa fa-search" />
                            </Button>{" "}
                            <Button variant="success" size="sm">
                              <i className="fa fa-edit" />
                            </Button>{" "}
                            <Button variant="danger" size="sm">
                              <i className="fa fa-trash" />
                            </Button>{" "}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default EcommerceProducts;
