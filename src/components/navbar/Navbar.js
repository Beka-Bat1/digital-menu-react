import React, { Component } from "react";
import logo from "../../assets/media/logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import Home from "../home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const LogedOutComponent = (prop) => {
  return (
    <>
      <li className="nav-item">
        <Link to={"/Register"} className="nav-link">
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link to={"/LogIn"} className="nav-link" onClick={prop.click}>
          Log In
        </Link>
      </li>
    </>
  );
};

const LogedInComponent = (prop) => {
  return (
    <>
      <li className="nav-item">
        <Link to={"/workshop"} className="nav-link">
          Workshop
        </Link>
      </li>
      <li className="nav-item">
        <Link to={"/home"} className="nav-link" onClick={prop.click}>
          Log Out
        </Link>
      </li>
    </>
  );
};

class Navbar extends Component {
  componentDidUpdate() {
    if (this.props.logedIn) {
      //console.log(this.props.logedIn);
    }
  }

  render() {
    let isLoggedIn = this.props.logedIn;

    return (
      <header>
        <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">
          <div className="container-fluid">
            <Link to={"/Home"} className="nav-link">
              <img id="logo" src={logo} alt="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarMobile"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarMobile">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/Home"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/About"} className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/Contact"} className="nav-link">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/Team"} className="nav-link">
                    Team
                  </Link>
                </li>
                { !isLoggedIn ? <LogedInComponent click={this.props.click} /> : <LogedOutComponent click={this.props.click} /> }
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
