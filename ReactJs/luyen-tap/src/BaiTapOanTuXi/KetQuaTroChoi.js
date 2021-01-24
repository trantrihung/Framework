import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  render() {
    return (
      <div style={{ fontSize: "40px" }}>
        <div className="display-4 text-warning">{this.props.ketQua}</div>
        <div>
          Số bàn thắng: <span>{this.props.soBanThang}</span>
        </div>
        <div>
          Tổng số lượt chơi: <span>{this.props.tongSoBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.BaiTapOanTuXiReducer.ketQua,
    soBanThang: state.BaiTapOanTuXiReducer.soBanThang,
    tongSoBanChoi: state.BaiTapOanTuXiReducer.tongSoBanChoi,
    addClass: state.BaiTapOanTuXiReducer.addClass,
  };
};

export default connect(mapStateToProps, null)(KetQuaTroChoi);
