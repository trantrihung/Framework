import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const {user} = this.props;
    return (
      <div
        className="modal fade"
        id="formUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">User</h5>
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
              <div className="form-group">
                <label htmlFor="userName">Username</label>
                <input type="text" name="userName" id="userName" className="form-control"/>
              </div>
              <div className="form-group">
                <label htmlFor="fullName">FullName</label>
                <input type="text" name="fullName" id="fullName" className="form-control"/>
              </div>
              <div className="form-group">
                <label htmlFor="dateOfBirth">DateOfBirth</label>
                <input type="text" name="dateOfBirth" id="dateOfBirth" className="form-control"/>
              </div>
              <div className="form-group">
                <label htmlFor="email">email</label>
                <input type="text" name="email" id="email" className="form-control"/>
              </div>
              <div className="form-group">
                <label htmlFor="position">Position</label>
                <select name="position" id="position" className="form-control">
                  <option value="">---</option>
                  <option value="employee">employee</option>
                  <option value="manager">manager</option>
                  <option value="director">director</option>
                </select>
              </div>

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
