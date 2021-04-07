import "./App.css";
import React, { Component, setState } from "react";
// ROUTER
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
// COMPONENTS
import Workshop from "./components/Workshop";
import Home from './components/home/Home';
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/footer';
import About from './components/about/about';
import Contact from './components/contact/Contact';
import Team from './components/team/Team';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Menu from './components/menu/Menu';
import Add from './components/add/Add';





class App extends Component {
  state = {
    logedIn: true,
    page: null,
    items: []
  };

  toggleLogin = () => {
    alert('login')
    console.log(this.state.logedIn)
    this.setState( prevState => ({
      logedIn: !prevState.logedIn
    }));
  };

  render() {
    return (
      <>
      <Router>
        <div>
          <Navbar click={this.toggleLogin} logedIn={this.logedIn}/>
          <hr />
          <Switch>
              <Route path='/home' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/team' component={Team} />
              <Route path='/logIn' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/workshop' component={Workshop} {...this.props}/>
              <Route path='/menu' component={Menu} />
              <Route path='/Add' component={Add} click={this.acceptItems}/>
          </Switch>
        </div>
      </Router>
      <Footer />
      </>
    );
  }
}

export default App;
