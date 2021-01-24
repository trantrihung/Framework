import React, { Component } from "react";
import GioHangRedex from "./GioHangRedex";
import ProductListRedux from "./ProductListRedux";

export default class BaiTapGioHangRedux extends Component {
  render() {
    return (
      <div>
        <h3>Danh sach gio hang</h3>
        <ProductListRedux />
        <GioHangRedex />
      </div>
    );
  }
}
