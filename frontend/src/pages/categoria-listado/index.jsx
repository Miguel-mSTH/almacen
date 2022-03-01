import React from "react";
import "./index.scss";
import { Row, Col, Card, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class TableBasic extends React.Component {
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
    axios.post(`http://localhost:8000/categorias`, {
      categoria_nombre: this.state.categoria_nombre,
    });
    this.setState({
      categoria_nombre: "",
    });
    this.mostrar();
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <div className="float-right mt-10">
                  <Link
                    to="/categoria/registro"
                    className="btn btn-primary btn-rounded box-shadow btn-icon"
                  >
                    <i className="fa fa-plus" /> Agregar Categoria
                  </Link>
                </div>
                Listado de Categorias
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
                        <strong>Accion</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.categorias.map((categoria, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{categoria.categoria_nombre}</td>
                          <td className="text-center">
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

export default TableBasic;
