import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./layouts";
// auth
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import ResetPassword from "./pages/auth/reset-password";
import LockScreen from "./pages/auth/lockscreen";
// //pages
import Dashboard from "./pages/dashboard";

import FormCategoria from "./pages/categoria-registro";
import TableCategoria from "./pages/categoria-listado";
import FormAmbiente from "./pages/ambiente-registro";
import TableAmbiente from "./pages/ambiente-listado";
import FormProducto from "./pages/producto-registro";
import TableProducto from "./pages/producto-listado";
import FormIngreso from "./pages/ingreso-registro";
import FormSalida from "./pages/salida-registro";
import TableIngreso from "./pages/ingreso-listado";
import TableSalida from "./pages/salida-listado";
import VistaIngreso from "./pages/ingreso-vista";

//Widgets
//import Page404 from "./pages/page-error/page-404";

//import * as serviceWorker from "./serviceWorker";

import AuthService from "./services/auth.service";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }

  render() {
    const { currentUser } = this.state;

    return (
      <BrowserRouter>
        {currentUser ? (
          <Switch>
            <Layout name="backend">
              <Route
                exact
                path="/"
                render={() => <Redirect to="/dashboard" />}
              />
              <Route path={`/dashboard`} component={Dashboard} />
              <Route path={`/categoria/registro`} component={FormCategoria} />
              <Route path={`/categoria/listado`} component={TableCategoria} />
              <Route path={`/ambiente/registro`} component={FormAmbiente} />
              <Route path={`/ambiente/listado`} component={TableAmbiente} />
              <Route path={`/producto/registro`} component={FormProducto} />
              <Route path={`/producto/listado`} component={TableProducto} />
              <Route path={`/ingreso/registro`} component={FormIngreso} />
              <Route path={`/ingreso/listado`} component={TableIngreso} />
              <Route path={`/salida/registro`} component={FormSalida} />
              <Route path={`/salida/listado`} component={TableSalida} />
              <Route path={`/ingreso/vista`} component={VistaIngreso} />
            </Layout>
          </Switch>
        ) : (
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/auth/login" />}
            />
            <Route path={`/auth/login`} component={Login} />
            <Route path={`/auth/register`} component={Register} />
            <Route path={`/auth/forget-password`} component={ResetPassword} />
            <Route path={`/auth/lock-screen`} component={LockScreen} />

            {/* <Redirect to={Login} /> */}
          </Switch>
        )}
      </BrowserRouter>
    );
  }
}

export default App;
