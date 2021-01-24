import React, { Component } from "react";
import { connect } from "react-redux";
// import Modal from "./Modal";
import "./style.css";
import swal from "sweetalert";
class BaiTapBurger extends Component {
  renderBreadMid = () => {
    // console.log(this.props.burger);
    let { burger } = this.props;

    // C1: Dùng mảng
    // return burger.map((item, index) => {
    //   let content = [];
    //   for (let propsBurger in item) {
    //     for (let i = 0; i < item[propsBurger]; i++) {
    //       content.push(<div key={i} className={propsBurger}></div>);
    //     }
    //   }
    //   return content;
    // });

    let content = [];
    for (let propBurger in burger) {
      let breadMid = [];
      for (let i = 0; i < burger[propBurger]; i++) {
        breadMid.push(<div key={i} className={propBurger}></div>);
      }
      content.push(breadMid);
    }
    return content;

    // return Object.entries(burger).map(([propsBurger, value], index) => {
    //   let breadMid = [];
    //   for (let i = 0; i < value; i++) {
    //     breadMid.push(<div key={index} className={propsBurger}></div>);
    //   }
    //   return breadMid;
    // });
  };

  renderMenu = () => {
    // Lấy props từ state về
    let { menu, burger } = this.props;
    return Object.entries(menu).map(([propsMenu, price], index) => {
      return (
        <tr key={index}>
          <td>{propsMenu}</td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => this.props.addBreadMid(propsMenu, 1)}
            >
              +
            </button>
            {burger[propsMenu]}
            <button
              className="btn btn-danger"
              onClick={() => this.props.addBreadMid(propsMenu, -1)}
            >
              -
            </button>
          </td>
          <td className="text-center">{price}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-center text-success">bài tập</h3>
        <div className="row">
          <div className="col-7">
            <h3 className="text-center text-danger">
              Cửa hàng burger Cybersoft
            </h3>
            <div className="breadTop"></div>
            {this.renderBreadMid()}
            <div className="breadBottom"></div>
          </div>
          <div className="col5">
            <h3 className=" text-center text-success">Chọn thức ăn</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Thức ăn</th>
                  <th></th>
                  <th>Đơn giá</th>
                </tr>
                {this.renderMenu()}
              </thead>
              <tfoot>
                <tr>
                  <td></td>
                  <td colSpan="2" className="text-right">
                    Tổng tiền: {this.props.total}
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td colSpan="2" className="text-right">
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        swal("Success!", "Thanh toán thành công!", "success");
                      }}
                    >
                      Thanh Toán
                    </button>
                    {/* <Modal /> */}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBreadMid: (propsBurger, amount) => {
      // tao action
      const action = {
        type: "ADD_BREADMID",
        propsBurger,
        amount,
      };

      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BaiTapBurger);
