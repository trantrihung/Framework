import React, { Component } from "react";
import { connect } from "react-redux";

class TableSinhVien extends Component {
  renderSinhVien = () => {
    const { mangSinhVien } = this.props;
    return mangSinhVien.map((sv, index) => {
      return (
        <tr key={index}>
          <td>{sv.maSV}</td>
          <td>{sv.hoTen}</td>
          <td>{sv.lop}</td>
          <td>{sv.sdt}</td>
          <td>{sv.email}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr className="bg-dark text-white">
              <th>Mã sinh viên</th>
              <th>Họ tên</th>
              <th>Lop</th>
              <th>số điện thoại</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>{this.renderSinhVien()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien,
  };
};

export default connect(mapStateToProps, null)(TableSinhVien);
