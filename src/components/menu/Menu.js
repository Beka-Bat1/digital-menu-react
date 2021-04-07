import { Component } from "react";
import axios from "../../axios-orders";

var React = require("react");

class Menu extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    axios
      .get("/orderData.json")
      .then((response) => {
        console.log("view on page")
        console.log(response.data);
        this.setState({
          items: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    
    // iterate through object
    const items = Object.keys(this.state.items)
      .map( (key) => {
        return ( 
        <div className="card" id="table-card" key={key} style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={this.state.items[key].imageLink}
            alt={this.state.items[key].itemName}
          />
          <div className="card-body">
            <h5 className="card-title">{this.state.items[key].itemName}</h5>
            <p className="card-text">{this.state.items[key].itemPrice}$</p>
            <p className="card-text">{this.state.items[key].itemDescription}</p>
          </div>
        </div>
      
          )
      })

    return (
      <>
        <div
          className="container"
          style={{ marginTop: "7em", height: "fit-content" }}
        >
        <div className="row d-flex justify-content-between align-items-center">
          {items}


          </div>
        </div>
      </>
    );
  }
}

export default Menu;
