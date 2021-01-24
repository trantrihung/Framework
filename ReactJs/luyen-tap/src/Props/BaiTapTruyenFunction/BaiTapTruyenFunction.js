import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
export default class BaiTapTruyenFunction extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="text-center">Danh Sách các sản phẩm</h2>
        <DanhSachSanPham />
      </div>
    )
  }
}
