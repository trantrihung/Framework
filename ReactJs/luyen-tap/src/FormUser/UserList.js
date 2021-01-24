import React, { Component } from "react";
import UserItem from "./UserItem";

export default class UserList extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>UserName</th>
              <th>FullName</th>
              <th>DateOfBirth</th>
              <th>Email</th>
              <th>Posotion</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => {
              return <UserItem key={user.id} user={user} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
