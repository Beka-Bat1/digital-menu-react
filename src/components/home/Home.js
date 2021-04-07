import React from "react";
import { Component } from "react";
import Carousel from "./Carousel/Carousel";
import HomeContent from './homeContent/homeContent'

class Home extends Component {
  render() {
    return (
      <div style={{marginTop: "4em"}}>
        <Carousel />
        <HomeContent />
      </div>
    );
  }
}

export default Home;
