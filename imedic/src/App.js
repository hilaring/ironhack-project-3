import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        Hola Joder
        <Sidebar />
        <div id="page-wrap">
          <h1>IMEDIC</h1>
          <h2>Check out our tutorials the side menubar</h2>
        </div>
      </div>
      </BrowserRouter> 
    );
  }
}

export default App;