import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: '',
      alldata: 'red',
      username:'',
      password: ''

      

    
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
  }

  handleChange(event) {
  
    this.setState({[event.target.id]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch(`api/user/${this.state.username}/${this.state.password}`).then(response => response.json()).then(state => this.setState(state));
    
     
  }

  handleRequest(){
   
    
    fetch('/api').then(response => response.json()).then(state => this.setState(state));
   
  }

  
render(){

 

 

  return (
    <div className="App">
      <header className="App-header">
     
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <button onClick={this.handleRequest}>fetch</button>
        <p>{this.state.username}</p>
        <p>{this.state.password}</p>
        <div><button onClick={this.handleRequest}>request data</button>
        {this.state.alldata}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }

 
}


export default App;
