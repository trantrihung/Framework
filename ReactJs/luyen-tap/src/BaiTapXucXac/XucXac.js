import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  renderXucXac = () => {
    const { mangXucXac } = this.props;
    return mangXucXac.map((xucXac, index) => {
      return <img key={index} src={xucXac.hinhAnh} alt="hinh anh" />;
    });
  };

  render() {
    return (
      <div>
        {this.renderXucXac()}
        {/* <img src={mangXucXac.hinhAnh} alt="hinh anh" /> */}
        {/* <img src={mangXucXac.hinhAnh} alt="hinh anh" />
        <img src={mangXucXac.hin} alt="hinh anh" /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangXucXac: state.BaiTapXucXacReducer.mangXucXac,
  };
};

export default connect(mapStateToProps, null)(XucXac);
