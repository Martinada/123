import React, { Component } from 'react';
import logo from '../img/alter.png';
import { Link } from 'react-router-dom';

import '../estilos/header.css';

class Header extends Component {
  render() {
    return (
      <div className = "encabezado">
        <div className = "navbar2">
          <img className = "logo" src={logo}/>

          <ul className = "navigation2">

            <Link to={`/`}>
              <button>Start</button>
            </Link>

            <Link to={`/aboutme`}>
            <button>About me</button>
            </Link>

            <Link to={`/work`}>
            <button>Work</button>
            </Link>

            <Link to={`/contact`}>
            <button>Contact</button>
            </Link>

          </ul>

        </div>
    </div>
    )
  }
}

export default Header;
