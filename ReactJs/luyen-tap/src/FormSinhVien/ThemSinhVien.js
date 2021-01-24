import React, { Component } from "react";
import { connect } from "react-redux";

class ThemSinhVien extends Component {
  state = {
    values: {
      maSV: "",
      hoTen: "",
      lop: "",
      sdt: "",
      email: "",
    },
    errors: {
      maSV: "",
      hoTen: "",
      lop: "",
      sdt: "",
      email: "",
    },
    valid: false,
  };
  handleChange = (e) => {
    let inputTarger = e.target;
    let { name, value, type, pattern } = inputTarger;
    console.log(inputTarger);

    let errMessage = "";

    //kiểm tra input rỗng
    if (value.trim() === "") {
      errMessage = name + "không đc bỏ trống";
      console.log(value + "rong");
    }

    // kiểm tra email
    if (type === "email") {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        errMessage = name + " không đúng định dạng";
      }
    }

    if (name === "sdt") {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        errMessage = name + "phải là số";
      }
    }

    let values = { ...this.state.values, [name]: value }; // cập nhật giá trị value
    let errors = { ...this.state.errors, [name]: errMessage }; // cập nhật errors

    this.setState(
      {
        // this.state phải để lên trên đầu ko thì dữ liệu onChange sẽ ko đc thay đổi
        ...this.state,
        values: values,
        errors: errors,
      },
      () => {
        // sau khi nhập dữ liệu đầy đủ thì gọi lại hàm checkValid để cập nhật lại
        // mỗi khi nhập dữ liệu
        this.checkValid();
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault(); // Cản sự kiện reload lại trang khi enter
    this.props.themSinhVien(this.state.values);
  };

  checkValid = () => {
    let valid = true;
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "" || this.state.values[key] === "") {
        valid = false;
      }
    }

    this.setState({
      ...this.state,
      valid: valid,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <h1 className="bg-dark text-white">Thông tin sinh viên</h1>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="form-group col-6">
                  <span>Mã sinh viên</span>
                  <input
                    type="text"
                    className="form-control"
                    name="maSV"
                    value={this.state.values.maSV}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.maSV}</p>
                </div>
                <div className="form-group col-6">
                  <span>Họ tên</span>
                  <input
                    value={this.state.values.hoTen}
                    type="text"
                    className="form-control"
                    name="hoTen"
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.hoTen}</p>
                </div>
                <div className="form-group col-6">
                  <span>Lớp</span>
                  <input
                    value={this.state.values.lop}
                    type="text"
                    className="form-control"
                    name="lop"
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.lop}</p>
                </div>
                <div className="form-group col-6">
                  <span>Số điện thoại</span>
                  <input
                    pattern="^(0|[1-9][0-9]*)$"
                    value={this.state.values.sdt}
                    type="text"
                    className="form-control"
                    name="sdt"
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.sdt}</p>
                </div>
                <div className="form-group col-6">
                  <span>email</span>
                  <input
                    type="email"
                    pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                    value={this.state.values.email}
                    className="form-control"
                    name="email"
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>
                <div className="row">
                  <div className="col-md-12 text-right">
                    {this.state.valid ? (
                      <button className="btn btn-success" type="submit">
                        Them sinh vien
                      </button>
                    ) : (
                      <button
                        className="btn btn-success"
                        type="submit"
                        disabled
                      >
                        Them sinh vien
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhVien) => {
      const action = {
        type: "THEM_SINHVIEN",
        sinhVien,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(ThemSinhVien);
