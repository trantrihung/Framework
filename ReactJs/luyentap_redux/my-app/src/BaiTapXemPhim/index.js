import React, { Component } from "react";
import HangGhe from "./HangGhe";
import "./style.css";
import danhSachGheData from "./DanhSachGhe.json";
import ThongTinDatGhe from "./ThongTinDatGhe";

export default class BaiTapXemPhim extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./images/bookingTicket/bgmovie.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.7)",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <h1 style={{ color: "white" }}>
                  ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                </h1>
                <h4 className="text-center text-light mt-5">Màn hình</h4>
                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                </div>
                {this.renderHangGhe()}
              </div>
              <div className="col-4">
                <h1 style={{ color: "white" }}>Danh sách ghế bạn chọn</h1>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
