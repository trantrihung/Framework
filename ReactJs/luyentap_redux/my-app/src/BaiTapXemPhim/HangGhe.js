import React, { Component } from "react";
import { connect } from "react-redux";

class HangGhe extends Component {
  renderGhe = () => {
    const { hangGhe, soHangGhe } = this.props;
    return hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDuocChon = "";
      let disabled = false;
      if (ghe.daDat) {
        cssGheDuocChon = "gheDuocChon";
        disabled = true;
      }
      let cssGheDangChon = "";
      let indexGheDangChon = this.props.mangDuLieu.findIndex((item) => {
        return item.soGhe === ghe.soGhe;
      });
      if (indexGheDangChon !== -1) {
        cssGheDangChon = "gheDangChon";
      }

      if (soHangGhe === 0) {
        return (
          <button key={index} className="ghe">
            {index + 1}
          </button>
        );
      } else {
        return (
          <button
            disabled={disabled}
            className={`ghe ${cssGheDuocChon} ${cssGheDangChon}`}
            key={index}
            onClick={() => this.props.datVe(ghe.soGhe)}
          >
            {index + 1}
          </button>
        );
      }
    });
  };
  render() {
    const { hangGhe } = this.props;
    return (
      <div
        className="text-light text-left mt-2"
        style={{ fontSize: "30px", marginLeft: "120px" }}
      >
        {hangGhe.hang}
        {this.renderGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangDuLieu: state.bookVeXemPhimReducer.mangDuLieu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datVe: (ma) => {
      dispatch({
        type: "DAT_VE",
        ma,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
