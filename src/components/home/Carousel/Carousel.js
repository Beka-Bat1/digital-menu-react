import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../../styles.css'

// IMAGES
import pic1 from "../../../assets/media/pic1.jpeg";
import fb from "../../../assets/media/fb.jpg";
import background4 from "../../../assets/media/background4.jpg";

class Carousel extends Component {
  render() {
    return (
        <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={background4} alt="Los Angeles" width="1100" height="500" />
            <div className="carousel-caption">
              <h3>Los Angeles</h3>
              <p>We had such a great time in LA!</p>
            </div>   
          </div>
          <div className="carousel-item">
            <img src={pic1} alt="Chicago" width="1100" height="500" />
            <div className="carousel-caption">
              <h3>Chicago</h3>
              <p>Thank you, Chicago!</p>
            </div>   
          </div>
          <div className="carousel-item">
            <img src={fb} alt="New York" width="1100" height="500" />
            <div className="carousel-caption">
              <h3>New York</h3>
              <p>We love the Big Apple!</p>
            </div>   
          </div>
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    );
  }
}

export default Carousel;

