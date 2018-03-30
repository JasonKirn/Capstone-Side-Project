import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './client.css';
import UserTable from './UserTable';

//Making request from React
//Make ajax call in app.js
//npm start

class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      students: []
    };

    //binding of 'this' to make 'this' accessible in render's form. Equivalent to putting
    //.bind(this) after function call in render()
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSearch(e) {
    e.preventDefault()

    let githubName = this.state.searchValue;
    console.log(githubName)

    //ajax call
    fetch('https://fcc-profile-scraper.herokuapp.com/user/' + githubName)
      .then(res => res.json())
      .then(function(student) {//everytime we search, update students state by pushing a new object(the JSON data) into students
        let students = this.state.students;

        if (student.error == undefined) {
          students.push(student);
          this.setState({ students });
          console.log(this.state.students)
        }
        else {
          console.log("User not added since user doesn't exist")
        }

      }.bind(this));
  }

  handleChange(e) {
    this.setState({searchValue: e.target.value});
  }

  render() {
    return (
      <div className="Client">
        <h1>FreeCodeCamp Profile Page</h1>
        <form onSubmit={this.handleSearch}>
          Search: <input type="text" value={this.state.searchValue} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        <UserTable students={this.state.students}/>
      </div>

    );
  }

}
//TODO: When passing props, don't pass props if it's a bad user error (not found)
//Ideas: Could use errors
//Check status code
//In JSON, "error" has value when user doesn't exist.
export default Client;