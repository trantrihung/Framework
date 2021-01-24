import React, { Component } from 'react'

export default class UserItem extends Component {
  render() {
    const {user} = this.props;
    return (
      <tr>
        <td>{user.userName}</td>
        <td>{user.fullName}</td>
        <td>{user.dateOfBirth}</td>
        <td>{user.email}</td>
        <td>{user.position}</td>
      </tr>
    )
  }
}
