import React, { Component } from "react";
// Kết nối redux (connect  hàm kết nối  reactComponent - redux store)
import { connect } from "react-redux";

class ModalGioHangRedux extends Component {
  renderGioHang = () => {
    console.log(this.props.gioHang);
    // this.props.gioHang là thuộc tính nhận từ redux
    return this.props.gioHang.map((item, index) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>
            <img src={item.image} alt="hinh anh" width={50} height={75} />
          </td>
          <td>{item.price}</td>
          <td>
            <button onClick={() => this.props.tangGiamSoLuong(index, true)}>
              +
            </button>
            {item.soLuong}
            <button onClick={() => this.props.tangGiamSoLuong(index, false)}>
              -
            </button>
          </td>
          <td>{item.price * item.soLuong}</td>
          <td>
            <button
              className="btn btn-primary"
              onClick={() => this.props.xoaGioHangTheoMa(item.id)}
            >
              Xoa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th> Mã sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Hình ảnh</th>
                <th>Giá bán</th>
                <th>số lượng</th>
                <th>Thành tiền</th>
              </tr>
            </thead>
            <tbody>{this.renderGioHang()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //state: là store tổng, => truy xuất đến GioHangReducer => biến thành state trên GioHangReducer
  return {
    gioHang: state.GioHangReducer.gioHang, // Tạo ra 1 props cho component ModalGioHangRedux
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     xoaGioHang: (index) => {
//       const action = {
//         type: "XOA_GIOHANG",
//         index,
//       };

//       dispatch(action);
//     },
//   };
// };
const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHangTheoMa: (id) => {
      const action = {
        type: "XOA_GIOHANG_THEOMA",
        id,
      };

      dispatch(action);
    },

    tangGiamSoLuong: (index, tangGiam) => {
      const action = {
        type: "TANGGIAM_SL",
        index,
        tangGiam,
      };

      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalGioHangRedux);
