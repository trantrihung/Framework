import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let {dt, xemChiTiet, themGioHang} = this.props;
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
        <div className="container">
          <div className="card bg-light" style={{ width: 300 }}>
            <img
              className="card-img-top"
              src={dt.image}
              alt="Cardimage"
              style={{ maxWidth: "100%", height: 250 }}
            />
            <div className="card-body text-center">
              <h4 className="card-title text-center">{dt.name}</h4>
              <p className="card-text">
                iPhone X features a new all-screen design. Face ID, which makes
                your face your password
              </p>
              <a href="!#" className="btn btn-primary" data-toggle="modal" data-target="#modelId" onClick={() => xemChiTiet(dt)}>
                Detail
              </a>
              <button className="btn btn-danger" onClick={() => themGioHang(dt)}>
                Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
