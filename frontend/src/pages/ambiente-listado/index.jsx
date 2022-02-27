import React from "react";
import "./index.scss";
import axios from "axios";
import { Row, Col, Card, Table } from "react-bootstrap";

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
              <Card.Header>Listado de Ambientes</Card.Header>
              <Card.Body>
                <Table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombre</th>
                      <th>Ubicacion</th>
                      <th>Tipo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.ambientes.map((ambiente, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{ambiente.ambiente_nombre}</td>
                          <td>{ambiente.ambiente_ubicacion}</td>
                          <td>{ambiente.ambiente_tipo}</td>
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
