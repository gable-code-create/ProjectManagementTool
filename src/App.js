import React, { useState, useEffect, Component } from 'react';

import axios from 'axios';
import logo from './logo.svg';
import NavbarComponent from './NavbarComponent';
import './App.css';

class App extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: '',
      alldata: 'blue',
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

  handleSubmit() {
   

    fetch(`/this`).then(response => response.json()).then(state => this.setState(state));
    
     
  }

  handleRequest(){
   
    
    fetch('/api').then(response => response.json()).then(state => this.setState(state));
   
  }
  handleSignUp(){
    fetch('/create').then()
  }
  
render(){

 

 

  return (
    <div >
      <header>
     
       
      <button onClick={this.handleSubmit}>dynamo fetch test</button>
       
        
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
