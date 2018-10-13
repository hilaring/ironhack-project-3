import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Sidebar />
        <div id="page-wrap">
          <h1>IMEDIC</h1>
          <h2>The side menubar</h2>
        </div>
      </div>
      </BrowserRouter> 
    );
  }
}

export default App;