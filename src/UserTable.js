import React, { Component } from 'react';
import UserRow from './UserRow';
import './UserTable.css';

class UserTable extends Component {
  constructor(props) {
    super(props);

    //Not needed because of arrow syntax handling .bind(this)?
    //this.populateRows = this.populateRows.bind(this);
    //this.showTable = this.showTable.bind(this);
  }

  populateRows() {
    let rows = [];
    //console.log("hi")
    this.props.students.forEach((student, index) => {
      //console.log(student.name)
      //console.log(student.completedChallenges.length)
      rows.push((

        <UserRow key={index}
            name={student.name}
            challengesCompleted={student.completedChallenges.length}
        />
      ));
    });
    //console.log("bye")

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
    //console.log("Student list size" + this.props.students.length)
    return (
      <div className= "UserTable">
        {isStudentListEmpty ? <div></div> : this.showTable()}
      </div>
    );
  }

}




export default UserTable;