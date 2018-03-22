import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './client.css';

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
          <div>props.user_info.name doesn't exist  </div>
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

    if (!githubName) return;

    fetch('https://fcc-profile-scraper.herokuapp.com/users/' + githubName)
      .then(res => res.json())
      .then((user_info) => {
        this.setState({ user_info });
      });
  }

  render() {
    return (
      <div className="Client">
        <h1>testing</h1>
        <input type="text" id="github-name-input"></input>
        <button onClick={this.handleSearch.bind(this)}>Search</button>
        <DisplayUserInfo user_info={this.state.user_info}/>
      </div>

    );
  }

}
//TODO: index.js was needed, see if we need to route it to client.js
//TODO: start working on search feature that uses scraper on this client.js

export default Client;