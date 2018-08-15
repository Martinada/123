import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../estilos/contact.css';
import Header from './Header';

class Contact extends Component {
  render() {
    return (
      <div>
        <div className = "header">
          <Header/>
        </div>
        <div className = "main">
        <h2 className = "title">You can find us on: Buenos Aires, Berlin & NYC.</h2>
        <h2 className = "title">Our phone number is: 0303456</h2>
        <h2 className = "title">Via e-mail: hello@helloworld.com</h2>
        <h2 className = "title">On every social media as @helloworld</h2>
        <h2 className = "title">Hope to hear from you soon</h2>
      </div>
      <hr></hr>
      </div>
    )
  }
}

export default Contact;
