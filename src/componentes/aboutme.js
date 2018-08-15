import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/alter.png';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';
import pencil from '../img/pencil.jpeg';
import target from '../img/target.jpeg';
import lupagde from '../img/lupagde.jpeg';
import lupa from '../img/lupa.png';
import Form from './form';
import '../estilos/aboutme.css';

class Aboutme extends Component {
  render() {
    var backg1 = {backgroundImage:`url(${img1})`}
    var backg2 = {backgroundImage:`url(${img2})`}
    var backg3 = {backgroundImage:`url(${img3})`}
    var backg4 = {backgroundImage:`url(${img4})`}

    return (
      <div className = "mainDiv">

        <div className = "head">
          <div className = "navbar">
            <img className = "logo" src={logo}/>
            <ul className = "navigation">

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

  <section className = "info">
    <h1> May I introduce myself? </h1>
    <hr className = "hrHead"></hr>
    <h3> Frontend Desing | UI/UX Desing </h3>
  </section>

  <div className = "go"> GO AHEAD </div>

</div>

<div className = "center">
  <h1> LITEBOX TEST </h1>
  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.<br/>
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.<br/>
  Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>
  Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
</div>

<hr className = "hrCenter"></hr>

<div className = "articles">

  <section>
    <img src={pencil}/>
    <h4>Sketching is fun</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.<br/>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.<br/></p>
  </section>
  <section>
    <img src={target}/>
    <h4>Desing aferwards</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.<br/>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.<br/></p>
  </section>
  <section>
    <img src={lupagde}/>
    <h4>Finalize</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.<br/>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.<br/></p>
  </section>

</div>

<hr className = "hrCenter"></hr>

<div className = "centerPictures">
  <div className = "left">

    <div className = "producto">
      <div className = "image" style = {backg1}></div>
      <div className = "overlay">
        <div>
          <h5>Lorem impsum dolor sit</h5>
          <p>Amet consectetur adipiscing elit</p>
        </div>
      </div>
      <div className = "overlay-lupa">
        <img className = "lupa" src={lupa}/>
      </div>
    </div>

    <div className = "producto">
      <div className = "image" style = {backg2}></div>
      <div className = "overlay">
        <div>
          <h5>Lorem impsum dolor sit</h5>
          <p>Amet consectetur adipiscing elit</p>
        </div>
      </div>
      <div className = "overlay-lupa">
        <img className = "lupa" src={lupa}/>
      </div>
    </div>
  </div>

  <div className ="right">
    <div className = "producto">
      <div className = "image" style = {backg3}></div>
      <div className = "overlay">
        <div>
          <h5>Lorem impsum dolor sit</h5>
          <p>Amet consectetur adipiscing elit</p>
        </div>
      </div>
      <div className = "overlay-lupa">
        <img className = "lupa" src={lupa}/>
      </div>
    </div>

    <div className = "producto">
      <div className = "image" style = {backg4}></div>
      <div className = "overlay">
        <div>
          <h5>Lorem impsum dolor sit</h5>
          <p>Amet consectetur adipiscing elit</p>
        </div>
      </div>
      <div className = "overlay-lupa">
        <img className = "lupa" src={lupa}/>
      </div>
    </div>
  </div>
</div>

<button> VIEW MORE </button>

<hr className = "hrCenter"></hr>

<div className = "formulario">
  <Form/>
</div>

<hr className = "hrCenter"></hr>

</div>

)
}
}

export default Aboutme;
