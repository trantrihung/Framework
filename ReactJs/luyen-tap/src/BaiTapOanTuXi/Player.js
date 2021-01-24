import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    return (
      <div>
        <div className="speech-bubble rounded large blue">
          <img
            src={this.props.mangDatCuoc.find((item) => item.datCuoc).img}
            alt="bua"
          />
        </div>
        <div className="col-center">
          <div className="divChiBi">
            <img
              className="chibi"
              src="./images/GameOanTuXi/ironman.jpg"
              alt="ironman"
            />
          </div>
        </div>
        <div className="row">
          {this.props.mangDatCuoc.map((item, index) => {
            // Xử lý đặt cược thêm viền cho item được chọn
            let border = {};
            if (item.datCuoc) {
              border = { border: "4px solid  red" };
            }
            return (
              <div key={index} className="col-4 tuXi">
                <button
                  style={border}
                  className="btnItem"
                  onClick={() => this.props.datCuoc(item.ma)}
                >
                  <img src={item.img} alt="hinhAnh" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({
        type: "CHON_ITEM",
        maCuoc,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
