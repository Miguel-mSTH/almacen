import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

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

//Widgets
import Page404 from "./pages/page-error/page-404";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={"/"}>
      <Switch>
        <Route
          exact
          path="/auth"
          render={() => <Redirect to="/auth/login" />}
        />
        <Route path={`/auth/login`} component={Login} />
        <Route path={`/auth/register`} component={Register} />
        <Route path={`/auth/forget-password`} component={ResetPassword} />
        <Route path={`/auth/lock-screen`} component={LockScreen} />

        <Layout name="backend">
          <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
          <Route path={`/dashboard`} component={Dashboard} />
          <Route path={`/categoria/registro`} component={FormCategoria} />
          <Route path={`/categoria/listado`} component={TableCategoria} />
          <Route path={`/ambiente/registro`} component={FormAmbiente} />
          <Route path={`/ambiente/listado`} component={TableAmbiente} />
          <Route path={`/producto/registro`} component={FormProducto} />
          <Route path={`/producto/listado`} component={TableProducto} />
        </Layout>
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
