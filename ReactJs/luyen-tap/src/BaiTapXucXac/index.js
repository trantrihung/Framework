import React, { Component } from "react";
import "./style.css";
import ThongTin from "./ThongTin";
import XucXac from "./XucXac";
import { connect } from "react-redux";

class BaiTapXucXac extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">GAME ĐỔ XÚC XẮC</h1>
        <div className="row">
          <div className="col-4">
            <button className="taixiu" onClick={() => this.props.datCuoc(true)}>
              TÀl
            </button>
          </div>
          <div className="col-4">
            <XucXac />
          </div>
          <div className="col-4">
            <button
              className="taixiu"
              onClick={() => this.props.datCuoc(false)}
            >
              XỈU
            </button>
          </div>
        </div>
        <div className="thongtin">
          <ThongTin />
          <button
            className="btn btn-success p-3 mt-5"
            onClick={this.props.playGame}
          >
            Play Game
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      const action = {
        type: "TAIXIU",
        taiXiu,
      };
      dispatch(action);
    },
    playGame: () => {
      dispatch({
        type: "PLAY_GAME",
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(BaiTapXucXac);
