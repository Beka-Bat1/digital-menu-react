import React, { Component } from "react";
import free from "../../../assets/media/free.jpg";
import qr from "../../../assets/media/qr.jpg";
import access1 from "../../../assets/media/access1.jpg";

class HomeContent extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row text-center program">
          <div className="col-12">
            <h1 className="yellowText">Why us?</h1>
          </div>
        </div>
        <div className="container">
          <div className="row text-center">
            <div className="card-column col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div className="card shadow">
                <img className="card-img-top" src={free} alt="Card" />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h3 className="highlightText">
                    {" "}
                    <i className="fas fa-child icon"></i> access from any device{" "}
                  </h3>
                  <p>
                    our webpage is flexible and easy to use for any device. edit
                    update or delete your work anytime.
                  </p>
                  <div>
                    <a href="\register" className="btn btn-primary">
                      <span>Start Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-column col-xs-12 col-sm-6 col-md-6  col-lg-4">
              <div className="card shadow">
                <img className="card-img-top" src={qr} alt="Card" />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h3 className="highlightText">
                    <i className="fas fa-user-graduate icon"></i> Share quickly
                    and easily
                  </h3>
                  <p>
                    you can share menu with QR code. post it, print it and make
                    your digital menu accesseble with just one QR code.
                  </p>
                  <div>
                    <a href="\register" className="btn btn-primary">
                      {" "}
                      <span>Start Now</span>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-column col-xs-12 col-sm-6 col-md-6  col-lg-4">
              <div className="card shadow">
                <img
                  className="card-img-top"
                  src={access1}
                  alt="Card"
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h3 className="highlightText">
                    <i className="fas fa-female icon"></i> Free to use
                  </h3>
                  <p>
                    You can start using it today. It is actually free to use.
                  </p>
                  <div>
                    <a href="\register" className="btn btn-primary">
                      <span>Start Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContent;