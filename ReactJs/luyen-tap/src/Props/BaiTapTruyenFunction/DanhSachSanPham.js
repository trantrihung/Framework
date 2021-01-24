import React, { Component } from "react";
import data from "../../data/data.json";
import SanPham from "./SanPham";
export default class DanhSachSanPham extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chiTietSanPham: data[0],
    };
  }

  chiTiet = (sp) => {
    console.log(sp)
    this.setState({
      chiTietSanPham: sp
    })
  }

  render() {
    const { chiTietSanPham } = this.state;
    return (
      <div>
        <div className="row">
          {data.map((item, index) => {
            return (
              <SanPham key={index} item={item} chiTiet={this.chiTiet} />
            );
          })}
          <hr/>
        </div>
        <div className="row">
          <div className="col-6 text-center">
            <h3 className="mt-5">Chi tiết sản phẩm</h3>
            <img
              src={chiTietSanPham.image}
              alt="hinh anh"
              width="300"
              height="350"
            />
          </div>
          <div className="col-6">
            <h3 className="mt-5">Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <th>Màn hình</th>
                  <th>{chiTietSanPham.manHinh}</th>
                </tr>
                <tr>
                  <th>Ram</th>
                  <th>{chiTietSanPham.ram}</th>
                </tr>
                <tr>
                  <th>rom</th>
                  <th>{chiTietSanPham.rom}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
