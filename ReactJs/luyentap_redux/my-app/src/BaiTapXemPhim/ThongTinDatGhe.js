import React, { Component } from "react";

export default class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div>
          <button className="gheDuocChon"></button>{" "}
          <span className="text-light" style={{ fontSize: "20px" }}>
            Ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon"></button>{" "}
          <span className="text-light" style={{ fontSize: "20px" }}>
            Ghế đang chọn
          </span>
          <br />
          <button className="ghe" style={{ margin: "0px" }}></button>
          <span className="text-light" style={{ fontSize: "20px" }}>
            Ghế trống
          </span>
        </div>

        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: "30px" }}>
                <th>Số ghế</th>
                <th>giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>số ghế</td>
                <td>số ghế</td>
                <td>số ghế</td>
              </tr>
              <tr>
                <td>số ghế</td>
                <td>số ghế</td>
                <td>số ghế</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
