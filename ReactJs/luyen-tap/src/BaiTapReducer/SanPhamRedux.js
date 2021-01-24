import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamRedux extends Component {
  render() {
    const { sanPham } = this.props;
    return (
      <div>
        <div className="card text-white">
          <img
            className="card-img-top"
            src={sanPham.image}
            alt="hinhanh"
            width={150}
            height={250}
          />
          <div className="card-body bg-primary">
            <h4 className="card-title">{sanPham.name}</h4>
            <p className="card-text">{sanPham.price}</p>
            <button
              className="btn btn-danger"
              onClick={() => this.props.themGioHang(sanPham)}
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// Xây dựng hàm tạo ra props là hàm xử lý sự kiện để đưa dữ liệu lên store
const mapDispatchToProps = (dispatch) => {
  return {
    //Tạo ra props component (là function) => đưa dữ liệu lên store
    themGioHang: (sanPham) => {
      const spGioHang = {
        id: sanPham.id,
        name: sanPham.name,
        image: sanPham.image,
        price: sanPham.price,
        soLuong: 1,
      };

      // Tạo action đưa dư liệu lên reducer
      const action = {
        type: "THEM_GIOHANG", //bắt buộc đặt type
        spGioHang: spGioHang, //nội dung gưi lên reducer
      };
      console.log(action);

      // Dùng hàm dispatch để đưa dữ liệu action lên reducer
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPhamRedux);
