import React from "react";
import "./index.scss";
import { Row, Col, Card } from "react-bootstrap";
import axios from "axios";

class TableBasic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categorias: [],
    };
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/categorias`).then((res) => {
      console.log(res.data);
      this.setState({
        categorias: res.data,
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col md="5">
            <Card>
              <Card.Header>Lista de Categorias</Card.Header>
              <Card.Body>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombre</th>
                      <th>###</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.categorias.map((categoria, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{categoria.categoria_nombre}</td>
                          <td>end</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default TableBasic;
