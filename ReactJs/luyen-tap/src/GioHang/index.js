import React, { Component } from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Header from "./Header";
import Modal from "./Modal";
import ProductList from "./ProductList";
import data from "../data/data.json";
import ModalGioHang from "./ModalGioHang";

export default class GioHang extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sanPhamModal: data[0], // Tạo nguồn dữ liệu thay đổi
      gioHang: [],
    };
  }

  // Dữ liệu cần nhận ở đâu thì mình sẽ tạo callback function tại component đó
  xemChiTiet = (sanPhamChiTiet) => {
    this.setState({
      sanPhamModal: sanPhamChiTiet,
    });
  };

  themGioHang = (sanPhamChon) => {
    console.log(sanPhamChon);
    // B1: Từ sản phẩm đc chọn tạo ra sp giỏ hàng
    let spGioHang = {
      id: sanPhamChon.id,
      image: sanPhamChon.image,
      name: sanPhamChon.name,
      soLuong: 1,
      price: sanPhamChon.price,
    };
    // Kiểm tra sp có trong giỏ hàng chưa
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.id === spGioHang.id);
    if (index !== -1) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      gioHangCapNhat.push(spGioHang);
    }
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  //Đặt sự kiện xóa giỏ hàng tại component cha chung
  xoaGioHang = (id) => {
    // C1:
    // let gioHangCapNhat = [...this.state.gioHang];
    // let index = gioHangCapNhat.findIndex((sp) => sp.id === id);
    // if(index !== -1) {
    //   gioHangCapNhat.splice(index,1)
    // }

    // C2:
    let gioHangCapNhat = this.state.gioHang.filter((sp) => sp.id !== id)


    //Cap nhat lai this.state
    this.setState({
      gioHang: gioHangCapNhat,
    })
  }

  tangGiamSP = (id, tangGiam) => { //tang giam: true thi + Sp, false: thi - Sp
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.id === id);
    if(tangGiam) {
      gioHangCapNhat[index].soLuong += 1;
    }else {
      if(gioHangCapNhat[index].soLuong > 1){
        gioHangCapNhat[index].soLuong -=1;
      }
    }

    this.setState({
      gioHang: gioHangCapNhat,
    })
  }

  render() {
    let tongSoLuong = this.state.gioHang.reduce((tsl, spGH) => {
      return (tsl += spGH.soLuong);
    }, 0);
    let tongThanhTien = this.state.gioHang.reduce((ttt, spGH) => {
      return (ttt += (spGH.price * spGH.soLuong));
    }, 0);

    return (
      <div className="bg-dark">
        <Header />
        <Carousel />
        <div className="d-flex justify-content-end mr-5">
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelGioHang"
          >
            Gio hang ({tongSoLuong})
          </button>
        </div>
        <ProductList
          data={data}
          xemChiTiet={this.xemChiTiet}
          themGioHang={this.themGioHang}
        />
        <Footer />
        <Modal sanPhamModal={this.state.sanPhamModal}/>
        <ModalGioHang
          gioHang={this.state.gioHang}
          tongThanhTien={tongThanhTien}
          xoaGioHang={this.xoaGioHang}
          tangGiamSP={this.tangGiamSP}
        />
      </div>
    );
  }
}
