import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    return (
      <div>
        <div className="speech-bubble rounded">
          <img
            className={this.props.addClass ? "hieuUng" : ""}
            src={this.props.computer.img}
            alt="bua"
          />
        </div>
        <div className="col-center">
          <div className="divChiBi">
            <img
              className="chibi"
              src="./images/GameOanTuXi/thanos.jpg"
              alt="thanos"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.BaiTapOanTuXiReducer.computer,
    addClass: state.BaiTapOanTuXiReducer.addClass,
  };
};

export default connect(mapStateToProps, null)(Computer);
