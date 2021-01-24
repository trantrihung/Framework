import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let {item, chiTiet} = this.props;
    return (
      <div className="col-3">
        <div className="card">
          <img
            className="card-img-top"
            src={item.image}
            alt="hinh anh"
            height="200"
          />
          <div className="card-body">
            <h4 className="card-title">
              {item.name.length > 9
                ? item.name.substring(0, 7) + "..."
                : item.name}
            </h4>
            <p className="card-text">{item.price}</p>
            <button
              className="btn btn-success"
              onClick={() => chiTiet(item)}
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}
