import React, { Component } from "react";
import Search from "./Search";
import UserList from "./UserList";
import data from "./data.json"
import Modal from "./Modal";

export default class FormUsers extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       user: data[0]
    }
  }
  
  render() {
    return (
      <div className="container">
        <h2 className="text-center">User Managerment</h2>
        <div className="d-flex justify-content-between">
          <Search />
          <button className="btn btn-success" data-toggle="modal" data-target="#formUser" >Add User</button>
        </div>
        <UserList data={data}/>
        <Modal user={this.state.user}/>
      </div>
    );
  }
}




