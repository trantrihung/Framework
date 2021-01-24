import React, { Component } from "react";

export default class ModalGioHang extends Component {
  render() {
    let { gioHang, tongThanhTien, xoaGioHang, tangGiamSP } = this.props;
    return (
      <div
        className="modal fade"
        id="modelGioHang"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div
            className="modal-content"
            style={{ maxWidth: "800px", width: "800px" }}
          >
            <div className="modal-header">
              <h5 className="modal-title">Giỏ Hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã Sản Phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Tên SP</th>
                    <th>Số Lượng</th>
                    <th>Đơn Giá</th>
                    <th>Thành Tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {gioHang.map((sp, index) => {
                    return (
                      <tr key={index}>
                        <td>{sp.id}</td>
                        <td>
                          <img
                            src={sp.image}
                            alt="hinh anh"
                            width={50}
                            height={65}
                          />
                        </td>
                        <td>{sp.name}</td>
                        <td>
                          <button
                            className="btn btn-success"
                            onClick={() => tangGiamSP(sp.id, true)}
                          >
                            +
                          </button>
                          {sp.soLuong}
                          <button
                            className="btn btn-success"
                            onClick={() => tangGiamSP(sp.id, false)}
                          >
                            -
                          </button>
                        </td>
                        <td>{sp.price.toLocaleString()}</td>
                        <td>{(sp.soLuong * sp.price).toLocaleString()}</td>
                        <td>
                          <button
                            className="btn btn-success"
                            onClick={() => xoaGioHang(sp.id)}
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>{tongThanhTien.toLocaleString()}</tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
