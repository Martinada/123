import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import twitter from '../img/twitter.png';
import ball from '../img/ball.png';
import face from '../img/face.png';
import '../estilos/footer.css';



class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <section className = 'logos'>
                 <a href='http://twitter.com/123seguro' target="_blank" className='red'> <img src ={twitter} alt='twitter'/> </a>
                 <a href='https://dribbble.com/search?q=123seguro' target="_blank" className='red'> <img src= {ball} alt='dribbble'/></a>
                 <a href='https://www.facebook.com/123seguro/' target="_blank" className='red'> <img src= {face} alt='facebook'/> </a>
          </section>
        </div>
      </footer>
    )
  }
}

export default Footer;
