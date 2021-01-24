import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTin extends Component {
  render() {
    const { taiXiu, soBanThang, tongSoBanThang } = this.props;
    return (
      <div>
        <div className="display-4">
          BẠN CHỌN:{" "}
          <span className="text-success">{taiXiu ? "TÀI" : "XỈU"}</span>
        </div>
        <div className="display-4">
          BÀN THẮNG: <span className="text-danger">{soBanThang}</span>
        </div>
        <div className="display-4">
          TỔNG SỐ BÀN CHƠI:{" "}
          <span className="text-primary">{tongSoBanThang}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taiXiu: state.BaiTapXucXacReducer.taiXiu,
    soBanThang: state.BaiTapXucXacReducer.soBanThang,
    tongSoBanThang: state.BaiTapXucXacReducer.tongSoBanThang,
  };
};

export default connect(mapStateToProps, null)(ThongTin);
