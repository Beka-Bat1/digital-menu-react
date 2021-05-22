import "./App.css";
import React, {  } from "react";
// ROUTER
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
// COMPONENTS
import Workshop from "./components/Workshop";
import Home from "./components/home/Home";
import Navbar from "./layout/navbar/Navbar";
import About from "./components/about/about";
import Contact from "./components/contact/Contact";
import Team from "./components/team/Team";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Menu from "./components/menu/Menu";
import Add from "./components/add/Add";
import GlobalState from "./context/GlobalState";
import Footer from './layout/footer/footer'

const App = (props) => {
  return (
    <GlobalState>
      <Router>
        <div>
          <Navbar />
          <hr />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/team" component={Team} />
            <Route path="/logIn" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/workshop" component={Workshop} {...props} />
            <Route path="/menu" component={Menu} />
            <Route path="/Add" component={Add} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </GlobalState>
  );
};

export default App;
