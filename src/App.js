import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApiService from './services/ApiService'
import ImagesList from "./ImagesList/ImagesList";

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
      /////////////////
      // const api = new ApiService();
      // api.getImages().then((res) => {console.log(res)});
      // debugger;
      ///////////////////
  }
  render() {
    return (
      <div className="App">
        <ImagesList/>
      </div>
    );
  }
}

export default App;
