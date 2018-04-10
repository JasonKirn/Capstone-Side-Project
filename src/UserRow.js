import React, { Component } from 'react';

class UserRow extends Component {
  render() {
    return(
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.challengesCompleted}</td>
        <td><button onClick={ () => {this.props.handleRemoveButtonPress(this.props.studentIndex)} }>Remove</button></td>
      </tr>
    );
  }
}

export default UserRow;