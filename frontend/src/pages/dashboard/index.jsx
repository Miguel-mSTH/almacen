import React from "react";
import "./index.scss";
import { Row, Col, Card, Badge, Table, Button } from "react-bootstrap";
import { Events, animateScroll as scroll, scroller } from "react-scroll";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container",
      })
    );
  }

  render() {
    return (
      <React.Fragment>
        <Row className="w-no-padding margin-b-30">
          <Col md="3">
            <div className="widget  bg-light">
              <Row className="row-table ">
                <div className="margin-b-30">
                  <h2 className="margin-b-5">Productos</h2>
                  <p className="text-muted">Total Productos</p>
                  <span className="float-right text-primary widget-r-m">
                    37859
                  </span>
                </div>
                <div className="progress margin-b-10  progress-mini">
                  <div
                    style={{ width: "50%" }}
                    className="progress-bar bg-primary"
                  />
                </div>
                <p className="text-muted float-left margin-b-0">Change</p>
                <p className="text-muted float-right margin-b-0">50%</p>
              </Row>
            </div>
          </Col>
          <Col md="3">
            <div className="widget  bg-light">
              <Row className="row-table ">
                <div className="margin-b-30">
                  <h2 className="margin-b-5">Salidas</h2>
                  <p className="text-muted">Total Salidas</p>
                  <span className="float-right text-indigo widget-r-m">
                    1758
                  </span>
                </div>
                <div className="progress margin-b-10 progress-mini">
                  <div
                    style={{ width: "45%" }}
                    className="progress-bar bg-indigo"
                  />
                </div>
                <p className="text-muted float-left margin-b-0">Change</p>
                <p className="text-muted float-right margin-b-0">450%</p>
              </Row>
            </div>
          </Col>
          <Col md="3">
            <div className="widget  bg-light">
              <Row className="row-table ">
                <div className="margin-b-30">
                  <h2 className="margin-b-5">Ingresos</h2>
                  <p className="text-muted">Total Ingresos</p>
                  <span className="float-right text-success widget-r-m">
                    1385
                  </span>
                </div>
                <div className="progress margin-b-10 progress-mini">
                  <div
                    style={{ width: "85%" }}
                    className="progress-bar bg-success"
                  />
                </div>
                <p className="text-muted float-left margin-b-0">Change</p>
                <p className="text-muted float-right margin-b-0">85%</p>
              </Row>
            </div>
          </Col>
          <Col md="3">
            <div className="widget  bg-light">
              <Row className="row-table ">
                <div className="margin-b-30">
                  <h2 className="margin-b-5">Visitors</h2>
                  <p className="text-muted">Total Visitors</p>
                  <span className="float-right text-warning widget-r-m">
                    98421
                  </span>
                </div>
                <div className="progress margin-b-10 progress-mini">
                  <div
                    style={{ width: "38%" }}
                    className="progress-bar bg-warning"
                  />
                </div>
                <p className="text-muted float-left margin-b-0">Change</p>
                <p className="text-muted float-right margin-b-0">38%</p>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <Card.Body>
                <Table className="table table-striped dt-responsive nowrap">
                  <thead>
                    <tr>
                      <th style={{ width: 80 }}>
                        <strong>ORDER ID</strong>
                      </th>
                      <th>
                        <strong>PURCHASED ON</strong>
                      </th>
                      <th>
                        <strong>CLIENT NAME</strong>
                      </th>
                      <th>
                        <strong>AMOUNT</strong>
                      </th>
                      <th>
                        <strong>QUANTITY</strong>
                      </th>
                      <th>
                        <strong>SHIPMENT</strong>
                      </th>
                      <th className="text-center">
                        <strong>STATUS</strong>
                      </th>
                      <th className="text-center">
                        <strong>VIEW</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>0001</td>
                      <td>02/08/2018</td>
                      <td>Description for Product</td>
                      <td>$28.55</td>
                      <td>385</td>
                      <td>04/09/2018</td>
                      <td className="text-center">
                        <Badge variant="success">Was Delivered</Badge>
                      </td>
                      <td className="text-center">
                        <button
                          type="button"
                          className="btn btn-sm btn-default"
                        >
                          <em className="fa fa-search" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>0002</td>
                      <td>02/08/2018</td>
                      <td>Description for Product</td>
                      <td>$28.55</td>
                      <td>385</td>
                      <td>04/09/2018</td>
                      <td className="text-center">
                        <Badge variant="warning">Pending</Badge>
                      </td>
                      <td className="text-center">
                        <button
                          type="button"
                          className="btn btn-sm btn-default"
                        >
                          <em className="fa fa-search" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>0003</td>
                      <td>02/08/2018</td>
                      <td>Description for Product</td>
                      <td>$28.55</td>
                      <td>385</td>
                      <td>04/09/2018</td>
                      <td className="text-center">
                        <Badge variant="danger">Cancel</Badge>
                      </td>
                      <td className="text-center">
                        <button
                          type="button"
                          className="btn btn-sm btn-default"
                        >
                          <em className="fa fa-search" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>0004</td>
                      <td>02/08/2018</td>
                      <td>Description for Product</td>
                      <td>$28.55</td>
                      <td>385</td>
                      <td>04/09/2018</td>
                      <td className="text-center">
                        <Badge variant="success">Was Delivered</Badge>
                      </td>
                      <td className="text-center">
                        <button
                          type="button"
                          className="btn btn-sm btn-default"
                        >
                          <em className="fa fa-search" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>0005</td>
                      <td>02/08/2018</td>
                      <td>Description for Product</td>
                      <td>$28.55</td>
                      <td>385</td>
                      <td>04/09/2018</td>
                      <td className="text-center">
                        <Badge variant="warning">Pending</Badge>
                      </td>
                      <td className="text-center">
                        <button
                          type="button"
                          className="btn btn-sm btn-default"
                        >
                          <em className="fa fa-search" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>0006</td>
                      <td>02/08/2018</td>
                      <td>Description for Product</td>
                      <td>$28.55</td>
                      <td>385</td>
                      <td>04/09/2018</td>
                      <td className="text-center">
                        <Badge variant="danger">Cancel</Badge>
                      </td>
                      <td className="text-center">
                        <button
                          type="button"
                          className="btn btn-sm btn-default"
                        >
                          <em className="fa fa-search" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>0007</td>
                      <td>02/08/2018</td>
                      <td>Description for Product</td>
                      <td>$28.55</td>
                      <td>385</td>
                      <td>04/09/2018</td>
                      <td className="text-center">
                        <Badge variant="success">Was Delivered</Badge>
                      </td>
                      <td className="text-center">
                        <button
                          type="button"
                          className="btn btn-sm btn-default"
                        >
                          <em className="fa fa-search" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>0008</td>
                      <td>02/08/2018</td>
                      <td>Description for Product</td>
                      <td>$28.55</td>
                      <td>385</td>
                      <td>04/09/2018</td>
                      <td className="text-center">
                        <Badge variant="warning">Pending</Badge>
                      </td>
                      <td className="text-center">
                        <button
                          type="button"
                          className="btn btn-sm btn-default"
                        >
                          <em className="fa fa-search" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>0009</td>
                      <td>02/08/2018</td>
                      <td>Description for Product</td>
                      <td>$28.55</td>
                      <td>385</td>
                      <td>04/09/2018</td>
                      <td className="text-center">
                        <Badge variant="danger">Cancel</Badge>
                      </td>
                      <td className="text-center">
                        <button
                          type="button"
                          className="btn btn-sm btn-default"
                        >
                          <em className="fa fa-search" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>0010</td>
                      <td>02/08/2018</td>
                      <td>Description for Product</td>
                      <td>$28.55</td>
                      <td>385</td>
                      <td>04/09/2018</td>
                      <td className="text-center">
                        <Badge variant="success">Was Delivered</Badge>
                      </td>
                      <td className="text-center">
                        <button
                          type="button"
                          className="btn btn-sm btn-default"
                        >
                          <em className="fa fa-search" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>0011</td>
                      <td>02/08/2018</td>
                      <td>Description for Product</td>
                      <td>$28.55</td>
                      <td>385</td>
                      <td>04/09/2018</td>
                      <td className="text-center">
                        <Badge variant="warning">Pending</Badge>
                      </td>
                      <td className="text-center">
                        <button
                          type="button"
                          className="btn btn-sm btn-default"
                        >
                          <em className="fa fa-search" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>0012</td>
                      <td>02/08/2018</td>
                      <td>Description for Product</td>
                      <td>$28.55</td>
                      <td>385</td>
                      <td>04/09/2018</td>
                      <td className="text-center">
                        <Badge variant="danger">Cancel</Badge>
                      </td>
                      <td className="text-center">
                        <Button size="sm" type="button" className="btn-default">
                          <em className="fa fa-search" />
                        </Button>
                      </td>
                    </tr>
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

export default Dashboard;
