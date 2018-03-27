import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './client.css';
import UserTable from './UserTable';

//Making request from React
//Make ajax call in app.js
//npm start
function DisplayUserInfo(props) {
     if (props.user_info.name) {
       console.log("props.user_info.name exists");
       return (
         <div>
           <div> {props.user_info.name} </div>
           <div> {props.user_info.completedChallenges.length} challenges completed</div>
         </div>

       );
     } else {
        return (
          <div></div>
        );
     }
}

class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      errors: [],
      user_info: {}
    };
  }

  handleSearch() {
    var githubName = document.getElementById('github-name-input').value;

    console.log("searching for: " + githubName)

    if (!githubName) return;

    fetch('https://fcc-profile-scraper.herokuapp.com/user/' + githubName)
      .then(res => res.json())
      .then((user_info) => {
        this.setState({ user_info });
        console.log(user_info);
      });
  }

  render() {
    return (
      <div className="Client">
        <h1>FreeCodeCamp Profile Page</h1>
        <input type="text" id="github-name-input"></input>
        <button onClick={this.handleSearch.bind(this)}>Search</button>
        <DisplayUserInfo user_info={this.state.user_info}/>
        <UserTable students={this.state.students} errors={this.state.errors}/>
      </div>

    );
  }

}
//TODO: When passing props, don't pass props if it's a bad user error (not found)
//Ideas: Could use errors
//Check status code
//In JSON, "error" has value when user doesn't exist.
export default Client;