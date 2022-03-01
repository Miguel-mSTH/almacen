import React from "react";
import "./index.scss";
import axios from "axios";
import { Row, Col, Card, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class TableBasic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ambientes: [],
    };
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/ambientes`).then((res) => {
      console.log(res.data);
      this.setState({
        ambientes: res.data,
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
                {" "}
                <div className="float-right mt-10">
                  <Link
                    to="/ambiente/registro"
                    className="btn btn-primary btn-rounded box-shadow btn-icon"
                  >
                    <i className="fa fa-plus" /> Agregar Ambiente
                  </Link>
                </div>
                Listado de Ambientes
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
                        <strong>Ubicacion</strong>
                      </th>
                      <th className="text-center">
                        <strong>Tipo</strong>
                      </th>
                      <th className="text-center">
                        <strong>Accion</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.ambientes.map((ambiente, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{ambiente.ambiente_nombre}</td>
                          <td>{ambiente.ambiente_ubicacion}</td>
                          <td>
                            {(() => {
                              switch (ambiente.ambiente_tipo) {
                                case 0:
                                  return "SUMINISTROS";
                                case 1:
                                  return "AULAS";
                                case 2:
                                  return "AUDITORIOS";
                                case 3:
                                  return "OFICINAS";
                                case 4:
                                  return "LABORATORIOS";
                                case 9:
                                  return "OBSOLETOS";
                                default:
                                  return "N/A";
                              }
                            })()}
                          </td>
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

export default TableBasic;
