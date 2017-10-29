import React, { Component } from 'react';
import {FlatButton, RaisedButton} from 'material-ui/';
import logo from './logo.svg';
import logo2 from './logo2.png';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Main from './Components/main';
import Dashboard from './Components/dashboard';
import Contact from './Components/contact';
import Home from './Components/Home';
import SignUp from './Components/signup';

const styles = {
  box01:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ff6666',
    fontFamily: "monospace",
    textDecoration: "none",
  },
}
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      text: ''
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo2} className="App-logo" alt="logo" />
          <h2>Welcome to Blood Bank App</h2>
        </div>
        <p className="App-intro">          
        </p>
        
         <Router>
    <div>
        <ul>
        <li><Link style={styles.box01} to="/Home">Home</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Main}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/Home" component={Home}/>
      <Route path="/SignUp" component={SignUp}/>
    </div>
  </Router>

  
      </div>
    );
  }
}

export default App;
