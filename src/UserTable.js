import React, { Component } from 'react';
import UserRow from './UserRow';
import './UserTable.css';

class UserTable extends Component {

  populateRows() {
    let rows = [];
    this.props.students.forEach((student, index) => {
      rows.push((
        <UserRow key={index}
            name={student.name}
            challengesCompleted={student.completedChallenges}
        />
      ));
    });

    return rows;
  }

  showTable() {
    return (
      <table className="user table text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Challenges Completed</th>
          </tr>
        </thead>
          <tbody>
            {this.populateRows()}
          </tbody>
      </table>
    );
  }

  render() {
    const isStudentListEmpty = this.props.students.length === 0;
    return (
      <div className= "UserTable">
        {this.showTable()}
      </div>
    );
  }

}




export default UserTable;