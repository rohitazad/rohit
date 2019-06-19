import React, { Component } from "react";
import Table from "react-bootstrap/Table";

class UserList extends Component {
  render() {
    console.log("Course List Component with ", this.props);
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email ID</th>
            <th>Contact No</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.userList.map(item => {
            return (
              <tr key={item.email}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.gender}</td>
                <td>button to view action</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default UserList;
