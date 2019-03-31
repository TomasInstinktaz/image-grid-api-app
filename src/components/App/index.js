import React, { Component } from 'react';
import SearchForm from '../../containers/SearchForm';
import logo from '../../logo.svg';
import 'bootstrap-grid-only-css/dist/css/bootstrap-grid.min.css';
import './App.scss';
import 'whatwg-fetch';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </div>
        </header>
        <div className="bootstrap-wrapper">
            <SearchForm/>
        </div>
      </div>
    );
  }
}

export default App;
