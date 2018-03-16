import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './client.css';

//Making request from React
//Make ajax call in app.js
//npm start
class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      errors: [],
      user_info: {}
    };
  }

  render() {
    return (
      <div className="Client">
        <h1>testing</h1>
      </div>

    );
  }

}
//TODO: index.js was needed, see if we need to route it to client.js
//TODO: start working on search feature that uses scraper on this client.js

export default Client;