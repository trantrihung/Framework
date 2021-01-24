import React, { Component } from "react";
import Computer from "./Computer";
import KetQuaTroChoi from "./KetQuaTroChoi";
import Player from "./Player";
import "./style.css";
import { connect } from "react-redux";

class BaiTapOanTuXi extends Component {
  multiClass = () => {
    this.props.ranDom();
    this.props.addClass();
  };
  render() {
    return (
      <div className="oanTuXi">
        <div className="pt-5">
          <div className="row text-center">
            <div className="col-4">
              <Player />
            </div>
            <div className="col-4">
              <KetQuaTroChoi />
              <button className="btn btn-success" onClick={this.multiClass}>
                Play Games
              </button>
            </div>
            <div className="col-4">
              <Computer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ranDom: () => {
      let count = 1;
      let randomComputer = setInterval(() => {
        const action = {
          type: "RANDOM",
        };
        dispatch(action);

        count++;
        if (count > 10) {
          clearInterval(randomComputer);
          dispatch({
            type: "CA_CUOC",
          });
        }
      }, 100);
    },
    addClass: () => {
      dispatch({
        type: "ADD_CLASS",
      });
    },

    // ketQua: () => {
    //   type: "KETQUA";
    // },
  };
};

// const mapStateToProps = (state) => {
//   return {
//     addClass: state.BaiTapOanTuXiReducer.addClass,
//   };
// };

export default connect(null, mapDispatchToProps)(BaiTapOanTuXi);
