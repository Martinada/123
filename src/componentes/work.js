import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class Work extends Component {
  render() {
    return (
      <div>
        <div className = "header">
          <Header/>
        </div>
        <div className = "main">
        <h1 className = "title">To follow our work click on the link below.</h1>
          <a href='http://github.com/' target="_blank" className='red'><button>GitHub</button></a>
      </div>
      <hr></hr>
      </div>
    )
  }
}

export default Work;
