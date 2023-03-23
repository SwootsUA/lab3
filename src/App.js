import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  render() {
    return (
    <div className = 'button_container'>
      <button className = 'button' onClick = {this.handleClick}>
        push me
      </button>
      <p>{this.state.id}</p>

      <button className = 'button green' onClick = {this.handleClick2}>
        see date
      </button>
      <p>{this.state.created_at}</p>
    </div>
    )
  }

  handleClick() {  
    axios.get('https://api.github.com/users/maecapozzi')
    .then(response => this.setState({
      id:response.data.id
    }))
  }

  handleClick2() { 
    axios.get('https://api.github.com/users/maecapozzi')
    .then(response => this.setState({
      created_at:response.data.created_at
    }))
    
  }

  constructor() {
    super();

    this.state = {
      id: '',
      created_at: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }
}

export default App;