import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApiService from './services/ApiService'

class App extends Component {

    constructor() {
        super();
        // this.api = new ApiService();
    }

  componentDidMount() {
     // ApiService.getImages(2222);
     //  this.api.getImages().then((body) => {
     //      console.log(body);
     //  } );
      //this.api.getImages();
      const api = new ApiService();
      api.getImages().then((res) => {console.log(res)});
      debugger;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          </p>
        </header>

      </div>
    );
  }
}

export default App;
