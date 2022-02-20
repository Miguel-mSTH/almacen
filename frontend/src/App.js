import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aside from "./components/Aside/Aside";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
//import "./../public/dist/css/adminlte.min.css";
//import { Register } from "./components/Content/register";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Aside />
        <Content />
        {/* <Routes>
          <Route path="/ingreso/registro">
            <Register />
          </Route>
        </Routes> */}
        <Footer />
      </Router>
    </div>
  );
}
