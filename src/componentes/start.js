import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../estilos/start.css';


class Start extends Component {
  render() {
    return (
      <div>
        <div className = "header">
          <Header/>
        </div>
        <div className = "main">
        <h1 className = "title">Are you ready to know more about us?</h1>
        <Link to={`/aboutme`}>
          <button>Click me if you dare</button>
        </Link>
      </div>
      <hr></hr>
      </div>
    )
  }
}

export default Start;
