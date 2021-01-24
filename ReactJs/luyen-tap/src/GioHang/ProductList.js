import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    let {data, xemChiTiet, themGioHang} = this.props
    return (
      <section id="smartphone" className="container-fluid pt-5 pb-5">
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        <div className="row">
          {
            data.map((dt,index) => {
              return (
                <ProductItem key={index} dt={dt} xemChiTiet={xemChiTiet} themGioHang={themGioHang}/>
              )
            })
          }
        </div>
      </section>
    );
  }
}
