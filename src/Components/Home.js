import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import signup from './signup.JPG';
import signin from './signin.JPG';
import dashboard from './dashboard.jpg';
import contact from './contact.png';

const styles = {
}

export default class Home extends Component {
  render() {
    return (
        <div>  
              <ul>
        <li ><Link to="/signup"><img id="box28" src={signup} alt="signup" title="Sign Up"/></Link></li>
        <li><Link  to="/"><img id="box29" src={signin} alt="signin" title="Sign In"/></Link></li>
        <li><Link  to="/dashboard"><img id="box30" src={dashboard} alt="dashboard" title="Dashboard"/></Link></li>
        <li><Link  to="/contact"><img id="box31" src={contact} alt="contact" title="Contact Us"/></Link></li>
        </ul>
        </div>
    )
  }
}
