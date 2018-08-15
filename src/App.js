import React, { Component } from 'react';
import Header from './componentes/Header';
import Start from './componentes/start';
import Aboutme from './componentes/aboutme';
import Footer from './componentes/footer';
import Form from './componentes/form';
import Work from './componentes/work';
import Contact from './componentes/contact';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends Component {
  render(){
    return (
      <div className="App">

      <Router>
         <Switch>
          <Route exact path="/" component={Start}/>
          <Route exact path="/aboutme" component={Aboutme}/>
          <Route exact path="/work" component={Work}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </Router>
      <Router>
        <Footer/>
      </Router>
    </div>
    )
  }
}

export default App;
