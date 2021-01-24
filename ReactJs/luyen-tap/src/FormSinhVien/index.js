import React, { Component } from "react";
import TableSinhVien from "./TableSinhVien";
import ThemSinhVien from "./ThemSinhVien";

export default class FormSinhVien extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center text-success">Quản lý nhân viên</h1>
        <ThemSinhVien />
        <TableSinhVien />
      </div>
    );
  }
}
